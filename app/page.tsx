import { Inter } from "next/font/google"
import PostList from "@/components/postList"
import ContentTabs from "@/components/contentTabs"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/themeToggle"
import PostsList from "@/components/postsList"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`m-auto grid max-w-5xl grid-cols-1 gap-x-6 gap-y-6 px-3 md:grid-cols-2  ${inter.className}`}
    >
      <div>
        <div className="top-1/2 mt-6 md:sticky md:-translate-y-1/2">
          <ContentTabs />
        </div>
      </div>
      <div>
        <PostsList />
        <PostList />
      </div>
    </main>
  )
}
