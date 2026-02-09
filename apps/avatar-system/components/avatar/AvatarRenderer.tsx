'use client'

import { useEffect, useRef, useState } from 'react'
import { AvatarConfig, OutfitLayer } from '@/lib/types'
import { generateAvatarSVG } from '@/lib/avatar-utils'
import { cn } from '@/lib/utils'

interface AvatarRendererProps {
  config: AvatarConfig
  outfitUrl?: string
  outfitType?: 'shirt' | 'pants' | 'dress' | 'shoes' | 'accessories'
  className?: string
  width?: number
  height?: number
}

export function AvatarRenderer({
  config,
  outfitUrl,
  outfitType,
  className,
  width = 400,
  height = 600,
}: AvatarRendererProps) {
  const [outfit, setOutfit] = useState<OutfitLayer | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (outfitUrl && outfitType) {
      setIsLoading(true)
      // Simulate image loading
      const img = new Image()
      img.onload = () => {
        setOutfit({
          type: outfitType,
          url: outfitUrl,
          position: { x: 0, y: 0 },
          scale: 1.0,
        })
        setIsLoading(false)
      }
      img.onerror = () => {
        setIsLoading(false)
      }
      img.src = outfitUrl
    } else {
      setOutfit(undefined)
    }
  }, [outfitUrl, outfitType])

  const svgString = generateAvatarSVG(config, outfit)
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml' })
  const svgUrl = URL.createObjectURL(svgBlob)

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(svgUrl)
    }
  }, [svgUrl])

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-block', className)}
      style={{ width, height }}
    >
      <div
        className={cn(
          'w-full h-full transition-opacity duration-300',
          isLoading && 'opacity-50'
        )}
        style={{ 
          background: 'transparent',
        }}
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  )
}
