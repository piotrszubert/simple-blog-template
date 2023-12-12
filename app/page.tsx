import ContentTabs from "@/components/contentTabs"
import PostsList from "@/components/postsList"

export default function Home() {
  return (
    <main
      className={`m-auto grid max-w-5xl grid-cols-1 gap-x-6 gap-y-6 px-3 md:grid-cols-2`}
    >
      <div>
        <div className="top-1/2 mt-6 md:sticky md:-translate-y-1/2">
          <ContentTabs />
        </div>
      </div>
      <div>
        <PostsList />
      </div>
    </main>
  )
}
