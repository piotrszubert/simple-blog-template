import { Inter } from 'next/font/google'

import PostList from '@/components/postList'
import SubscribeCard from '@/components/subscribeCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 px-3  ${inter.className}`}
    >
      <div className='relative'>
        <div className='w-full md:w-80 block md:fixed top-1/2 md:-translate-y-1/2'>
          <SubscribeCard/>
        </div>
      </div>
      <div>
        <PostList/>
      </div>
    </main>
  )
}
