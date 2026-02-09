import { createServiceClient } from '@/lib/supabase/server'
import bcrypt from 'bcryptjs'
import { ApiKeyRecord } from '@/lib/types'

export interface ApiKeyValidationResult {
  valid: boolean
  sellerId?: string
  error?: string
}

export async function validateApiKey(apiKey: string): Promise<ApiKeyValidationResult> {
  try {
    const supabase = await createServiceClient()

    // Get all API keys (we need to check each one since keys are hashed)
    const { data: apiKeys, error } = await supabase
      .from('api_keys')
      .select('*')

    if (error) {
      console.error('Error fetching API keys:', error)
      return { valid: false, error: 'Database error' }
    }

    if (!apiKeys || apiKeys.length === 0) {
      return { valid: false, error: 'No API keys found' }
    }

    // Check each API key hash
    for (const keyRecord of apiKeys) {
      const isValid = await bcrypt.compare(apiKey, keyRecord.api_key_hash)
      
      if (isValid) {
        // Check rate limit
        const rateLimitResult = await checkRateLimit(keyRecord)
        if (!rateLimitResult.allowed) {
          return { valid: false, error: rateLimitResult.error || 'Rate limit exceeded' }
        }

        // Update last_used_at
        await supabase
          .from('api_keys')
          .update({ last_used_at: new Date().toISOString() })
          .eq('id', keyRecord.id)

        return { valid: true, sellerId: keyRecord.seller_id }
      }
    }

    return { valid: false, error: 'Invalid API key' }
  } catch (error) {
    console.error('Error validating API key:', error)
    return { valid: false, error: 'Validation error' }
  }
}

async function checkRateLimit(keyRecord: ApiKeyRecord): Promise<{ allowed: boolean; error?: string }> {
  const now = new Date()
  const resetAt = new Date(keyRecord.requests_reset_at)

  // If reset time has passed, reset the counter
  if (now > resetAt) {
    const supabase = await createServiceClient()
    await supabase
      .from('api_keys')
      .update({
        requests_count: 0,
        requests_reset_at: new Date(now.getTime() + 60 * 60 * 1000).toISOString(), // 1 hour from now
      })
      .eq('id', keyRecord.id)

    return { allowed: true }
  }

  // Check if rate limit exceeded
  if (keyRecord.requests_count >= keyRecord.rate_limit) {
    return { allowed: false, error: `Rate limit exceeded. Limit: ${keyRecord.rate_limit} requests per hour` }
  }

  // Increment request count
  const supabase = await createServiceClient()
  await supabase
    .from('api_keys')
    .update({ requests_count: keyRecord.requests_count + 1 })
    .eq('id', keyRecord.id)

  return { allowed: true }
}
