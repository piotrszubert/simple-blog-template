import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function AboutCard() {
    return(
        <Card className="mt-6 md:mt-0">
            <CardHeader>
              <CardTitle>The Journey Begins</CardTitle>
              <CardDescription>Discover the story behind this blog</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut maxime ex dolore quas recusandae dolor quibusdam sint excepturi accusantium architecto.
                </div>
            </CardContent>
          </Card>
    );
}