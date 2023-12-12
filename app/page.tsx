import PostsList from "@/components/postsList"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main
      className={`m-auto grid max-w-5xl grid-cols-1 gap-x-6 gap-y-6 px-3 md:grid-cols-2`}
    >
      <div className="md:px-6">
        <div className="bg-accet top-1/2 mt-6 border-y border-dashed px-6 pt-8 md:sticky md:-translate-y-1/2">
          <div className="mb-6 flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://github.com/piotrszubert.png"
                alt="@ps777"
              />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Piotr Szubert</span>
              <span className="text-xs text-muted-foreground">@ps777</span>
            </div>
          </div>

          <h1 className="mb-3 text-2xl font-bold">Welcome to my blog</h1>
          <p className="mb-6 text-muted-foreground text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            eaque laborum modi ab incidunt ipsum provident ullam. Earum, illo
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Laborum impedit dolorum ratione maiores alias soluta minima
            voluptates eveniet possimus facere?
          </p>
          <div className="mb-8 flex gap-3">
            <Button variant="ghost" size="icon">
              <Linkedin />
            </Button>
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <PostsList />
      </div>
    </main>
  )
}
