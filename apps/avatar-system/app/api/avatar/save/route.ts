import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { avatarConfigSchema } from '@/lib/validation'
import { AvatarConfig } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { config, userId } = body

    // Validate config
    const validatedConfig = avatarConfigSchema.parse(config)

    // Get Supabase client
    const supabase = await createServiceClient()

    // Get current user if userId provided
    let currentUserId = userId || null
    if (!currentUserId) {
      // Try to get from auth session
      const { createClient } = await import('@/lib/supabase/server')
      const client = await createClient()
      const { data: { user } } = await client.auth.getUser()
      currentUserId = user?.id || null
    }

    // Check if avatar already exists for this user
    let avatarId: string | null = null
    if (currentUserId) {
      const { data: existing } = await supabase
        .from('avatars')
        .select('id')
        .eq('user_id', currentUserId)
        .single()

      if (existing) {
        avatarId = existing.id
      }
    }

    // Save or update avatar
    if (avatarId) {
      const { data, error } = await supabase
        .from('avatars')
        .update({
          config_json: validatedConfig as AvatarConfig,
          updated_at: new Date().toISOString(),
        })
        .eq('id', avatarId)
        .select()
        .single()

      if (error) throw error

      return NextResponse.json({ 
        success: true, 
        avatarId: data.id,
        message: 'Avatar updated successfully' 
      })
    } else {
      const { data, error } = await supabase
        .from('avatars')
        .insert({
          user_id: currentUserId,
          config_json: validatedConfig as AvatarConfig,
        })
        .select()
        .single()

      if (error) throw error

      return NextResponse.json({ 
        success: true, 
        avatarId: data.id,
        message: 'Avatar created successfully' 
      })
    }
  } catch (error: any) {
    console.error('Error saving avatar:', error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, error: 'Invalid avatar configuration', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to save avatar' },
      { status: 500 }
    )
  }
}
