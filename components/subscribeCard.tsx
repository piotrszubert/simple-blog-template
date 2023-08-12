import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

export default function SubscribeCard() {
    return(
        <Card>
            <CardHeader>
              <CardTitle>Subsribe newsletter</CardTitle>
              <CardDescription>Submit you email and get notification when new post come out</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-3">
                    <Input placeholder="mail@example.com" className="flex-grow-1"/>
                    <Button>
                        Subscribe
                    </Button>
                </div>
            </CardContent>
            <CardFooter>
              {/* <p>Card Footer</p> */}
            </CardFooter>
          </Card>
    );
}