'use client'

import { useState } from 'react'
import { AvatarRenderer } from '@/components/avatar/AvatarRenderer'
import { TryOnControls } from '@/components/avatar/TryOnControls'
import { AvatarConfig } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface TryOnPageClientProps {
  config: AvatarConfig
  avatarId: string
}

export default function TryOnPageClient({ config, avatarId }: TryOnPageClientProps) {
  const [outfitUrl, setOutfitUrl] = useState<string | undefined>()
  const [outfitType, setOutfitType] = useState<'shirt' | 'pants' | 'dress' | 'shoes' | 'accessories' | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const handleTryOn = (url: string, type: 'shirt' | 'pants' | 'dress' | 'shoes' | 'accessories') => {
    setIsLoading(true)
    setOutfitUrl(url)
    setOutfitType(type)
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Avatar Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Avatar Preview</CardTitle>
          <CardDescription>Your avatar with selected outfit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center min-h-[600px]">
            <AvatarRenderer
              config={config}
              outfitUrl={outfitUrl}
              outfitType={outfitType}
            />
          </div>
        </CardContent>
      </Card>

      {/* Try-On Controls */}
      <TryOnControls onTryOn={handleTryOn} isLoading={isLoading} />
    </div>
  )
}
