import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import Image from "next/image"

function PostCard(post: Post) {
  return (
    <Card className="relative border transition-all hover:cursor-pointer hover:bg-accent md:hover:translate-x-2">
      <Link
        href={post.url}
        className="absolute inset-0 text-blue-700 hover:text-blue-900 dark:text-blue-400"
      ></Link>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          <time
            dateTime={post.date}
            className="mb-2 block text-xs text-gray-600"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          {/* {post.date} */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {post.image && (
          <Image
            className="rounded"
            width="200"
            height="200"
            src={post.image}
            alt={post.title}
          />
        )}
        <p className="mt-4">{post.description}</p>
      </CardContent>
      {/* <CardFooter>
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter> */}
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