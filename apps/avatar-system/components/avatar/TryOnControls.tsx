'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wand2, Download, Share2, Loader2 } from 'lucide-react'
import { validateOutfitUrl } from '@/lib/avatar-utils'

interface TryOnControlsProps {
  onTryOn: (outfitUrl: string, outfitType: 'shirt' | 'pants' | 'dress' | 'shoes' | 'accessories') => void
  isLoading?: boolean
}

export function TryOnControls({ onTryOn, isLoading = false }: TryOnControlsProps) {
  const [outfitUrl, setOutfitUrl] = useState('')
  const [outfitType, setOutfitType] = useState<'shirt' | 'pants' | 'dress' | 'shoes' | 'accessories'>('shirt')
  const [urlError, setUrlError] = useState('')

  const handleTryOn = () => {
    setUrlError('')
    
    if (!outfitUrl.trim()) {
      setUrlError('Please enter an outfit URL')
      return
    }

    if (!validateOutfitUrl(outfitUrl)) {
      setUrlError('Invalid URL. Must be HTTPS and a valid image URL (PNG, JPG, JPEG, WEBP, SVG)')
      return
    }

    onTryOn(outfitUrl, outfitType)
  }

  const handleDownload = () => {
    // This would trigger a download of the current avatar with outfit
    // Implementation depends on how the avatar is rendered
    console.log('Download avatar')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out my avatar!',
        text: 'I created this avatar with the Avatar Try-On System',
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Try On Outfit</CardTitle>
        <CardDescription>
          Enter an outfit image URL to see how it looks on your avatar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="outfit-url">Outfit Image URL</Label>
          <Input
            id="outfit-url"
            type="url"
            placeholder="https://example.com/outfit.png"
            value={outfitUrl}
            onChange={(e) => {
              setOutfitUrl(e.target.value)
              setUrlError('')
            }}
            className={urlError ? 'border-destructive' : ''}
          />
          {urlError && (
            <p className="text-sm text-destructive">{urlError}</p>
          )}
          <p className="text-xs text-muted-foreground">
            Must be a valid HTTPS image URL (PNG, JPG, JPEG, WEBP, or SVG)
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="outfit-type">Outfit Type</Label>
          <Select value={outfitType} onValueChange={(value: any) => setOutfitType(value)}>
            <SelectTrigger id="outfit-type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shirt">Shirt</SelectItem>
              <SelectItem value="pants">Pants</SelectItem>
              <SelectItem value="dress">Dress</SelectItem>
              <SelectItem value="shoes">Shoes</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleTryOn}
          disabled={isLoading || !outfitUrl.trim()}
          className="w-full"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Applying Outfit...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Try On
            </>
          )}
        </Button>

        <div className="flex gap-2 pt-4 border-t">
          <Button
            variant="outline"
            onClick={handleDownload}
            className="flex-1"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button
            variant="outline"
            onClick={handleShare}
            className="flex-1"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
