'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed', platform: string }>;
}

export default function InstallButton() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
      setIsInstallable(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!installPrompt) {
      // Si no hay prompt de instalación, generamos un enlace de instalación directo
      const installUrl = `web+pwa://${window.location.host}`
      window.location.href = installUrl
      return
    }

    installPrompt.prompt()

    const { outcome } = await installPrompt.userChoice
    console.log(`User response to the install prompt: ${outcome}`)

    if (outcome === 'accepted') {
      setIsInstallable(false)
    }
  }

  if (isStandalone) return null

  return (
    <Button 
      onClick={handleInstall} 
      className="fixed bottom-4 right-4 bg-primary text-primary-foreground"
    >
      <Share2 className="mr-2 h-4 w-4" />
      Instalar App
    </Button>
  )
}