import { z } from 'zod'
import { validateOutfitUrl } from './avatar-utils'

// Avatar config schema
export const avatarConfigSchema = z.object({
  skinTone: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Invalid hex color'),
  hairStyle: z.string().min(1),
  hairColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Invalid hex color'),
  eyeColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Invalid hex color'),
  pose: z.enum(['neutral', 'arms-up', 'side']),
})

// Outfit type enum
export const outfitTypeSchema = z.enum(['shirt', 'pants', 'dress', 'shoes', 'accessories'])

// Try-on request schema
export const tryOnRequestSchema = z.object({
  avatarId: z.string().uuid().optional(),
  outfitUrl: z.string().url().refine(validateOutfitUrl, {
    message: 'Invalid outfit URL. Must be HTTPS and from allowed domain.',
  }),
  outfitType: outfitTypeSchema,
})

// API key validation
export function validateApiKeyFormat(key: string): boolean {
  // API keys should be at least 32 characters
  return key.length >= 32 && /^[a-zA-Z0-9_-]+$/.test(key)
}
