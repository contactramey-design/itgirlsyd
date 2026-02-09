import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { validateApiKey } from '@/lib/api/validate-api-key'
import { tryOnRequestSchema } from '@/lib/validation'
import { generateAvatarSVG, getGenericAvatarConfig, renderAvatarToImage } from '@/lib/avatar-utils'
import { TryOnRequest, TryOnResponse } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    // Get API key from headers
    const apiKey = request.headers.get('X-API-Key')
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key required. Provide X-API-Key header.' },
        { status: 401 }
      )
    }

    // Validate API key
    const keyValidation = await validateApiKey(apiKey)
    if (!keyValidation.valid) {
      return NextResponse.json(
        { error: keyValidation.error || 'Invalid API key' },
        { status: 401 }
      )
    }

    const sellerId = keyValidation.sellerId!

    // Parse and validate request body
    const body = await request.json()
    const validatedRequest = tryOnRequestSchema.parse(body) as TryOnRequest

    // Get Supabase client
    const supabase = await createServiceClient()

    // Fetch avatar config
    let avatarConfig = getGenericAvatarConfig()
    if (validatedRequest.avatarId) {
      const { data: avatar, error } = await supabase
        .from('avatars')
        .select('config_json')
        .eq('id', validatedRequest.avatarId)
        .single()

      if (!error && avatar && avatar.config_json) {
        avatarConfig = avatar.config_json as typeof avatarConfig
      }
    }

    // Generate SVG with outfit
    const outfitLayer = {
      type: validatedRequest.outfitType,
      url: validatedRequest.outfitUrl,
      position: { x: 0, y: 0 },
      scale: 1.0,
    }

    const svgString = generateAvatarSVG(avatarConfig, outfitLayer)

    // Render SVG to image (PNG)
    const imageBuffer = await renderAvatarToImage(svgString)

    // Upload to Supabase Storage or convert to base64
    // For now, we'll return base64. In production, upload to storage bucket.
    const base64Image = imageBuffer.toString('base64')
    const imageUrl = `data:image/png;base64,${base64Image}`

    // Log try-on event (optional)
    try {
      await supabase.from('try_on_logs').insert({
        avatar_id: validatedRequest.avatarId || null,
        outfit_url: validatedRequest.outfitUrl,
        outfit_type: validatedRequest.outfitType,
        seller_id: sellerId,
      })
    } catch (logError) {
      // Don't fail the request if logging fails
      console.error('Failed to log try-on event:', logError)
    }

    // Return response
    const response: TryOnResponse = {
      imageUrl,
      svgConfig: svgString,
    }

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error in try-on API:', error)

    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid request', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-API-Key',
    },
  })
}
