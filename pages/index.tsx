import { Button } from '@/components/ui/button'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`p-24 ${inter.className}`}
    >
      <Button>
        Button
      </Button>
    </main>
  )
}
