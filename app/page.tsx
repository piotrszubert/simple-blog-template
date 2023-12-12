import PostsList from "@/components/postsList"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main
      className={`m-auto grid max-w-5xl grid-cols-1 gap-x-6 gap-y-6 px-3 md:grid-cols-2`}
    >
      <div className="md:px-6">
        <div className="bg-accet top-1/2 mt-6 border-y border-dashed px-6 pt-8 md:sticky md:-translate-y-1/2">
          <Hero />
        </div>
      </div>
      <div>
        <PostsList />
      </div>
    </main>
  )
}
