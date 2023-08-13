import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubscribeCard from '@/components/subscribeCard'

export default function ContentTabs() {
    return(
        <Tabs defaultValue="about">
            <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="faq">Faq</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="subscribe">Subscribe</TabsTrigger>
            </TabsList>
            <TabsContent value="about">Make changes to your account here.</TabsContent>
            <TabsContent value="faq">Change your password here.</TabsContent>
            <TabsContent value="contact">faq</TabsContent>
            <TabsContent value="subscribe">
                <SubscribeCard/>
            </TabsContent>
        </Tabs>
    );
}