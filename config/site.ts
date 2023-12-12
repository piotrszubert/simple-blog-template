type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter: string
      github: string
    }
  }
  
export const siteConfig: SiteConfig = {
  name: "ps777",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "",
  ogImage: "",
  links: {
    twitter: "",
    github: "https://github.com/piotrszubert",
  },
}