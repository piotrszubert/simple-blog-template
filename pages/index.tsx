import { Button } from '@/components/ui/button'
import { Inter } from 'next/font/google'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PostList from '@/components/postList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 px-3  ${inter.className}`}
    >
      <div className='relative'>
        <div className='w-full md:w-80 block md:fixed top-1/2 md:-translate-y-1/2'>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>
                Button
              </Button>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div>
        <PostList/>
      </div>
    </main>
  )
}
