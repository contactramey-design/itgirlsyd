export interface AvatarConfig {
  skinTone: string;        // e.g., "#FDBCB4", "#F8C8A6", etc.
  hairStyle: string;       // e.g., "straight", "curly", "bob"
  hairColor: string;       // e.g., "#000000", "#8B4513"
  eyeColor: string;        // e.g., "#4A90E2"
  pose: 'neutral' | 'arms-up' | 'side';
}

export interface OutfitLayer {
  type: 'shirt' | 'pants' | 'dress' | 'shoes' | 'accessories';
  url: string;
  position: { x: number; y: number };
  scale: number;
}

export interface TryOnRequest {
  avatarId?: string;
  outfitUrl: string;
  outfitType: 'shirt' | 'pants' | 'dress' | 'shoes' | 'accessories';
}

export interface TryOnResponse {
  imageUrl: string;
  svgConfig: string;
}

export interface ApiKeyRecord {
  id: string;
  seller_id: string;
  api_key_hash: string;
  rate_limit: number;
  requests_count: number;
  requests_reset_at: string;
  last_used_at: string | null;
}
