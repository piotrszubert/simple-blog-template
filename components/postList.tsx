import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";

const posts = [
  {
    id: 1,
    title: "Exploring the Wonders of Nature",
    date: "2023-08-01",
    description: "A captivating journey through lush forests, majestic mountains, and serene lakes.",
    image: "https://via.placeholder.com/300",
    tags: ["travel", "nature", "adventure"]
  },
  {
    id: 2,
    title: "Unveiling the Secrets of Ancient Civilizations",
    date: "2023-07-15",
    description: "Delve into the mysteries of long-lost cultures and their remarkable achievements.",
    image: "https://via.placeholder.com/300",
    tags: ["history", "archaeology"]
  },
  {
    id: 3,
    title: "Mastering the Art of Culinary Delights",
    date: "2023-06-20",
    description: "Embark on a culinary adventure, exploring flavors from around the world and learning expert techniques.",
    image: "https://via.placeholder.com/300",
    tags: ["food", "cooking", "travel"]
  },
  {
    id: 4,
    title: "Astronomy: Discovering the Cosmos",
    date: "2023-05-10",
    description: "Peer through telescopes to unravel the mysteries of stars, galaxies, and beyond.",
    image: "https://via.placeholder.com/300",
    tags: ["science", "astronomy", "space", "exploration"]
  },
  {
    id: 5,
    title: "The Evolution of Technology",
    date: "2023-04-02",
    description: "Trace the history of innovation, from the first tools to cutting-edge advancements.",
    image: "https://via.placeholder.com/300",
    tags: ["technology", "history", "innovation"]
  },
  {
    id: 6,
    title: "Exploring Remote Wilderness",
    date: "2023-03-15",
    description: "Embark on an expedition to untouched landscapes, discovering hidden treasures of nature.",
    image: "https://via.placeholder.com/300",
    tags: ["travel", "nature", "adventure", "exploration"]
  },
  {
    id: 7,
    title: "Art and Culture: Bridging the Past and Present",
    date: "2023-02-08",
    description: "Immerse yourself in the rich tapestry of human creativity, from ancient artworks to modern expressions.",
    image: "https://via.placeholder.com/300",
    tags: ["art", "culture", "history"]
  }
];
  

export default function PostList() {
    return(
       <div
        className="flex flex-col gap-4 py-6"
       >
            {posts.map((item, index) => (
                <Card
                    className="md:hover:translate-x-2 border hover:shadow-lg hover:cursor-pointer hover:bg-accent transition-all"
                    key={index}
                >
                    <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img className="rounded" width="200" height="200" src={item.image} alt={item.title} />
                        <p className="mt-4">
                            {item.description}
                        </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, index) => (<Badge key={index} variant="outline">{tag}</Badge>))}
                      </div>
                    </CardFooter>
                </Card>
            ))}
       </div> 
    );
}