import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const Hero = () => {
  return (
    <>
      <div className="mb-6 flex items-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Avatar className="h-8 w-8 duration-300 hover:scale-110">
                <AvatarImage
                  src="https://github.com/piotrszubert.png"
                  alt="@ps777"
                />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>@ps777</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex flex-col">
          <span className="text-sm font-semibold">Piotr Szubert</span>
          <span className="text-xs text-muted-foreground">@ps777</span>
        </div>
      </div>

      <h1 className="mb-3 text-2xl font-bold">Welcome to my blog</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        eaque laborum modi ab incidunt ipsum provident ullam. Earum, illo
        voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laborum impedit dolorum ratione maiores alias soluta minima voluptates
        eveniet possimus facere?
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
    </>
  )
}
