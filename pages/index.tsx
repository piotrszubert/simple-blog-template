import { Inter } from 'next/font/google'
import PostList from '@/components/postList'
import ContentTabs from '@/components/contentTabs'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main
        className={`max-w-5xl m-auto gap-x-20 gap-y-6 grid grid-cols-1 md:grid-cols-2 px-3  ${inter.className}`}
        >
        <div>
          <div className='md:sticky top-1/2 md:-translate-y-1/2 mt-6'>
            <ContentTabs/>
          </div>
        </div>
        <div>
          <PostList/>
        </div>
      </main>
    </>
  )
}
