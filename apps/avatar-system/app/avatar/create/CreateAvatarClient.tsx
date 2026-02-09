'use client'

import { AvatarCustomizer } from '@/components/avatar/AvatarCustomizer'
import { AvatarConfig } from '@/lib/types'

interface CreateAvatarClientProps {
  initialConfig: AvatarConfig
  userId: string | null
}

export default function CreateAvatarClient({ initialConfig, userId }: CreateAvatarClientProps) {
  async function handleSave(config: AvatarConfig) {
    const response = await fetch('/api/avatar/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        config,
        userId,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to save avatar')
    }

    const result = await response.json()
    return result
  }

  return <AvatarCustomizer initialConfig={initialConfig} onSave={handleSave} />
}
