import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { siteConfig } from "@/config/site"

function PostCard(post: Post) {
  return (
    <Card className="relative border transition-all hover:cursor-pointer hover:bg-accent md:hover:translate-x-2">
      <Link href={post.url} className="absolute inset-0"></Link>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          <time
            dateTime={post.date}
            className="text-muted-secondary mb-2 block text-xs font-semibold"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {siteConfig.postImages && post.image && (
          <Image
            className="mb-6 rounded"
            width="200"
            height="200"
            src={post.image}
            alt={post.title}
          />
        )}
        <p className="text-sm text-muted-foreground">{post.description}</p>
      </CardContent>
    </Card>
  )
}

export default function PostsList() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="my-6 flex flex-col gap-6">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
