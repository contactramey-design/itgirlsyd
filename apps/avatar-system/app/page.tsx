import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-4xl font-bold text-gray-900">Avatar Try-On System</h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Create your customizable avatar and try on virtual outfits
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/avatar/create">
            <Button size="lg">Create Avatar</Button>
          </Link>
          <Link href="/try-on/generic">
            <Button size="lg" variant="outline">Try-On Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
