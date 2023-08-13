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
        <Card className="mt-6 md:mt-0">
            <CardHeader>
              <CardTitle>Subsribe newsletter</CardTitle>
              <CardDescription>Submit you email and get notification when new post come out</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-3">
                    <Input placeholder="mail@example.com" className="flex-grow-1"/>
                    <Button className="gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
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