import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Bell } from "lucide-react";

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
                        <Bell className="w-4 h-4" />
                        Subscribe
                    </Button>
                </div>
            </CardContent>
          </Card>
    );
}