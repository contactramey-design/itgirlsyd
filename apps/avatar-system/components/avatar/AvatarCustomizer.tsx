'use client'

import { useState } from 'react'
import { AvatarConfig } from '@/lib/types'
import { AvatarRenderer } from './AvatarRenderer'
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
import { SKIN_TONES, HAIR_STYLES, getGenericAvatarConfig } from '@/lib/avatar-utils'
import { Save, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AvatarCustomizerProps {
  initialConfig?: AvatarConfig
  onSave?: (config: AvatarConfig) => Promise<void>
}

export function AvatarCustomizer({ initialConfig, onSave }: AvatarCustomizerProps) {
  const [config, setConfig] = useState<AvatarConfig>(
    initialConfig || getGenericAvatarConfig()
  )
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSave = async () => {
    if (!onSave) return

    setIsSaving(true)
    setSaveStatus('idle')

    try {
      await onSave(config)
      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (error) {
      console.error('Failed to save avatar:', error)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Your avatar preview</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center min-h-[600px]">
          <AvatarRenderer config={config} />
        </CardContent>
      </Card>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Customize Avatar</CardTitle>
          <CardDescription>Adjust your avatar's appearance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Skin Tone */}
          <div className="space-y-2">
            <Label>Skin Tone</Label>
            <div className="grid grid-cols-4 gap-2">
              {SKIN_TONES.map((tone) => (
                <button
                  key={tone.value}
                  onClick={() => setConfig({ ...config, skinTone: tone.value })}
                  className={cn(
                    'h-12 rounded-md border-2 transition-all',
                    config.skinTone === tone.value
                      ? 'border-primary scale-110'
                      : 'border-border hover:border-primary/50'
                  )}
                  style={{ backgroundColor: tone.value }}
                  title={tone.name}
                />
              ))}
            </div>
          </div>

          {/* Hair Style */}
          <div className="space-y-2">
            <Label>Hair Style</Label>
            <Select
              value={config.hairStyle}
              onValueChange={(value) => setConfig({ ...config, hairStyle: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {HAIR_STYLES.map((style) => (
                  <SelectItem key={style} value={style}>
                    {style.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Hair Color */}
          <div className="space-y-2">
            <Label>Hair Color</Label>
            <Input
              type="color"
              value={config.hairColor}
              onChange={(e) => setConfig({ ...config, hairColor: e.target.value })}
              className="h-12 w-full"
            />
          </div>

          {/* Eye Color */}
          <div className="space-y-2">
            <Label>Eye Color</Label>
            <Input
              type="color"
              value={config.eyeColor}
              onChange={(e) => setConfig({ ...config, eyeColor: e.target.value })}
              className="h-12 w-full"
            />
          </div>

          {/* Pose */}
          <div className="space-y-2">
            <Label>Pose</Label>
            <Select
              value={config.pose}
              onValueChange={(value: 'neutral' | 'arms-up' | 'side') =>
                setConfig({ ...config, pose: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="arms-up">Arms Up</SelectItem>
                <SelectItem value="side">Side</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full"
            size="lg"
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Avatar
              </>
            )}
          </Button>

          {saveStatus === 'success' && (
            <p className="text-sm text-green-600 text-center">
              Avatar saved successfully!
            </p>
          )}
          {saveStatus === 'error' && (
            <p className="text-sm text-red-600 text-center">
              Failed to save avatar. Please try again.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
