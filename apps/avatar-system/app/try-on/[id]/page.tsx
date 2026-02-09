import { createServiceClient } from '@/lib/supabase/server'
import { getGenericAvatarConfig } from '@/lib/avatar-utils'
import { AvatarConfig } from '@/lib/types'
import TryOnPageClient from './TryOnPageClient'

interface TryOnPageProps {
  params: {
    id: string
  }
}

export default async function TryOnPage({ params }: TryOnPageProps) {
  const { id } = params
  let config: AvatarConfig = getGenericAvatarConfig()
  let avatarId: string | null = null

  // If id is 'generic', use generic config
  if (id === 'generic') {
    config = getGenericAvatarConfig()
  } else {
    // Try to fetch avatar from database
    try {
      const supabase = await createServiceClient()
      const { data: avatar, error } = await supabase
        .from('avatars')
        .select('id, config_json')
        .eq('id', id)
        .single()

      if (error || !avatar) {
        // Fall back to generic avatar
        config = getGenericAvatarConfig()
      } else {
        config = avatar.config_json as AvatarConfig
        avatarId = avatar.id
      }
    } catch (error) {
      // Fall back to generic avatar
      config = getGenericAvatarConfig()
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Virtual Try-On</h1>
        <p className="text-muted-foreground">
          See how outfits look on your avatar
        </p>
      </div>

      <TryOnPageClient config={config} avatarId={avatarId || id} />
    </div>
  )
}
