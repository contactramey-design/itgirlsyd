import { AvatarCustomizer } from '@/components/avatar/AvatarCustomizer'
import { createClient } from '@/lib/supabase/server'
import { getGenericAvatarConfig } from '@/lib/avatar-utils'
import { AvatarConfig } from '@/lib/types'
import CreateAvatarClient from './CreateAvatarClient'

export default async function CreateAvatarPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let initialConfig = getGenericAvatarConfig()
  let existingAvatarId: string | null = null

  // Try to load existing avatar if user is authenticated
  if (user) {
    const { data: avatar } = await supabase
      .from('avatars')
      .select('id, config_json')
      .eq('user_id', user.id)
      .single()

    if (avatar && avatar.config_json) {
      initialConfig = avatar.config_json as AvatarConfig
      existingAvatarId = avatar.id
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Create Your Avatar</h1>
        <p className="text-muted-foreground">
          Customize your avatar's appearance. Changes are saved automatically.
        </p>
      </div>
      <CreateAvatarClient initialConfig={initialConfig} userId={user?.id || null} />
    </div>
  )
}
