import { AvatarConfig, OutfitLayer } from './types'

// Skin tone presets (5-8 options)
export const SKIN_TONES = [
  { name: 'Light', value: '#FDBCB4' },
  { name: 'Light Medium', value: '#F8C8A6' },
  { name: 'Medium', value: '#E8B99A' },
  { name: 'Medium Dark', value: '#D4A574' },
  { name: 'Dark', value: '#B8865A' },
  { name: 'Very Dark', value: '#8B6F47' },
  { name: 'Deep', value: '#6B4E3A' },
  { name: 'Deepest', value: '#4A3425' },
]

// Hair style options (8+)
export const HAIR_STYLES = [
  'straight-long',
  'straight-short',
  'curly-long',
  'curly-short',
  'bob',
  'pixie',
  'wavy-long',
  'wavy-short',
  'afro',
  'braids',
  'ponytail',
  'bun',
]

// Default generic avatar configuration
export function getGenericAvatarConfig(): AvatarConfig {
  return {
    skinTone: '#F8C8A6',
    hairStyle: 'straight-long',
    hairColor: '#000000',
    eyeColor: '#4A90E2',
    pose: 'neutral',
  }
}

// Outfit type positioning and scaling
const OUTFIT_POSITIONS: Record<string, { x: number; y: number; scale: number }> = {
  shirt: { x: 100, y: 150, scale: 1.0 },
  pants: { x: 100, y: 350, scale: 1.0 },
  dress: { x: 100, y: 150, scale: 1.0 },
  shoes: { x: 100, y: 500, scale: 0.8 },
  accessories: { x: 100, y: 100, scale: 0.6 },
}

// Generate SVG avatar with outfit overlay
export function generateAvatarSVG(config: AvatarConfig, outfit?: OutfitLayer): string {
  const { skinTone, hairStyle, hairColor, eyeColor, pose } = config
  const viewBox = '0 0 400 600'
  
  // Get outfit positioning
  const outfitPos = outfit ? OUTFIT_POSITIONS[outfit.type] || { x: 100, y: 200, scale: 1.0 } : null
  
  return `
    <svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <style>
          .avatar-layer { transition: opacity 0.3s ease; }
        </style>
      </defs>
      
      <!-- Body Base Layer -->
      <g id="body-base" class="avatar-layer">
        <!-- Head -->
        <ellipse cx="200" cy="80" rx="50" ry="60" fill="${skinTone}" />
        
        <!-- Neck -->
        <rect x="185" y="130" width="30" height="20" fill="${skinTone}" />
        
        <!-- Torso -->
        <ellipse cx="200" cy="250" rx="80" ry="120" fill="${skinTone}" />
        
        <!-- Arms -->
        ${pose === 'neutral' ? `
          <ellipse cx="120" cy="250" rx="25" ry="80" fill="${skinTone}" />
          <ellipse cx="280" cy="250" rx="25" ry="80" fill="${skinTone}" />
        ` : pose === 'arms-up' ? `
          <ellipse cx="120" cy="200" rx="25" ry="80" fill="${skinTone}" transform="rotate(-30 120 200)" />
          <ellipse cx="280" cy="200" rx="25" ry="80" fill="${skinTone}" transform="rotate(30 280 200)" />
        ` : `
          <ellipse cx="120" cy="250" rx="25" ry="80" fill="${skinTone}" />
          <ellipse cx="280" cy="250" rx="25" ry="80" fill="${skinTone}" />
        `}
        
        <!-- Legs -->
        <ellipse cx="170" cy="450" rx="30" ry="100" fill="${skinTone}" />
        <ellipse cx="230" cy="450" rx="30" ry="100" fill="${skinTone}" />
      </g>
      
      <!-- Outfit Layer (if provided) -->
      ${outfit && outfitPos ? `
        <g id="outfit-layer" class="avatar-layer">
          <image
            href="${outfit.url}"
            x="${outfitPos.x - (200 * outfitPos.scale) / 2}"
            y="${outfitPos.y - (300 * outfitPos.scale) / 2}"
            width="${400 * outfitPos.scale}"
            height="${600 * outfitPos.scale}"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      ` : ''}
      
      <!-- Face Features -->
      <g id="face-features" class="avatar-layer">
        <!-- Eyes -->
        <circle cx="185" cy="75" r="8" fill="${eyeColor}" />
        <circle cx="215" cy="75" r="8" fill="${eyeColor}" />
        <circle cx="185" cy="75" r="4" fill="#000000" />
        <circle cx="215" cy="75" r="4" fill="#000000" />
        
        <!-- Nose -->
        <ellipse cx="200" cy="90" rx="4" ry="6" fill="#E8B99A" />
        
        <!-- Mouth -->
        <path d="M 190 100 Q 200 105 210 100" stroke="#8B4513" stroke-width="2" fill="none" />
      </g>
      
      <!-- Hair Front Layer -->
      <g id="hair-front" class="avatar-layer">
        ${renderHair(hairStyle, hairColor)}
      </g>
    </svg>
  `.trim()
}

// Render hair based on style
function renderHair(style: string, color: string): string {
  const hairStyles: Record<string, string> = {
    'straight-long': `
      <path d="M 150 50 Q 200 20 250 50 L 250 200 Q 200 180 150 200 Z" fill="${color}" />
    `,
    'straight-short': `
      <path d="M 150 50 Q 200 20 250 50 L 250 130 Q 200 120 150 130 Z" fill="${color}" />
    `,
    'curly-long': `
      <path d="M 150 50 Q 180 30 200 50 Q 220 30 250 50 L 250 200 Q 200 180 150 200 Z" fill="${color}" />
      <circle cx="170" cy="100" r="15" fill="${color}" />
      <circle cx="230" cy="100" r="15" fill="${color}" />
    `,
    'curly-short': `
      <path d="M 150 50 Q 180 30 200 50 Q 220 30 250 50 L 250 130 Q 200 120 150 130 Z" fill="${color}" />
      <circle cx="170" cy="90" r="12" fill="${color}" />
      <circle cx="230" cy="90" r="12" fill="${color}" />
    `,
    'bob': `
      <path d="M 150 50 Q 200 20 250 50 L 250 150 Q 200 140 150 150 Z" fill="${color}" />
    `,
    'pixie': `
      <path d="M 150 50 Q 200 20 250 50 L 250 100 Q 200 90 150 100 Z" fill="${color}" />
    `,
    'wavy-long': `
      <path d="M 150 50 Q 180 40 200 50 T 250 50 L 250 200 Q 200 180 150 200 Z" fill="${color}" />
    `,
    'wavy-short': `
      <path d="M 150 50 Q 180 40 200 50 T 250 50 L 250 130 Q 200 120 150 130 Z" fill="${color}" />
    `,
    'afro': `
      <circle cx="200" cy="80" r="60" fill="${color}" />
      <circle cx="170" cy="70" r="20" fill="${color}" />
      <circle cx="230" cy="70" r="20" fill="${color}" />
    `,
    'braids': `
      <path d="M 150 50 Q 200 20 250 50 L 250 200 Q 200 180 150 200 Z" fill="${color}" />
      <rect x="140" y="150" width="20" height="80" fill="${color}" />
      <rect x="240" y="150" width="20" height="80" fill="${color}" />
    `,
    'ponytail': `
      <path d="M 150 50 Q 200 20 250 50 L 250 130 Q 200 120 150 130 Z" fill="${color}" />
      <ellipse cx="200" cy="180" rx="15" ry="60" fill="${color}" />
    `,
    'bun': `
      <path d="M 150 50 Q 200 20 250 50 L 250 130 Q 200 120 150 130 Z" fill="${color}" />
      <circle cx="200" cy="150" r="25" fill="${color}" />
    `,
  }
  
  return hairStyles[style] || hairStyles['straight-long']
}

// Validate outfit URL
export function validateOutfitUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    
    // Must be HTTPS
    if (urlObj.protocol !== 'https:') {
      return false
    }
    
    // Check against allowed domains if configured
    const allowedDomains = process.env.ALLOWED_OUTFIT_DOMAINS?.split(',') || []
    if (allowedDomains.length > 0 && !allowedDomains.includes(urlObj.hostname)) {
      return false
    }
    
    // Must be a valid image URL (png, jpg, jpeg, webp, svg)
    const validExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg']
    const hasValidExtension = validExtensions.some(ext => 
      urlObj.pathname.toLowerCase().endsWith(ext)
    )
    
    return hasValidExtension
  } catch {
    return false
  }
}

// Server-side: Render SVG to image buffer
export async function renderAvatarToImage(svgString: string): Promise<Buffer> {
  try {
    const sharp = (await import('sharp')).default
    
    // Convert SVG to PNG using sharp
    const svgBuffer = Buffer.from(svgString)
    const pngBuffer = await sharp(svgBuffer)
      .png()
      .resize(400, 600, { fit: 'contain' })
      .toBuffer()
    
    return pngBuffer
  } catch (error) {
    console.error('Error rendering avatar to image:', error)
    // Fallback: return SVG as buffer if sharp fails
    return Buffer.from(svgString)
  }
}
