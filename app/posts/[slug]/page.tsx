import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import Image from "next/image"
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  // Add a custom component.
  Image: ({ src, alt, width, height }) => (
    <Image src={src} width={width} height={height} alt={alt} />
  ),

  Alert: ({title, children}) => (
    <div role="alert" className="alert border-2 shadow-lg border-info">
      <div className="px-5">
        <Info width={32} height={32} className="text-info" />
      </div>
      <div>
        <h3 className="font-bold mt-0 -mb-2">{title}</h3>
        <div className="text-sm">
          {children}
        </div>
      </div>
    </div>
  )
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()
return { title: `${post.title}` }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="py-8 max-w-xl prose prose-lg mx-auto">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-sm">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-5xl font-bold mb-12">{post.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
      <div className="divider my-8"></div>
      <div
        className="text-center"
      >
        <Button
          variant="outline"
        asChild>
          <Link
            href="/"
            >
            See all posts
          </Link>
        </Button>
      </div>
    </article>
  )
}