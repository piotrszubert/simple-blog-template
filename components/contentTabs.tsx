import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubscribeCard from '@/components/subscribeCard'
import FaqList from "@/components/faqList";
import ContactCard from "./contactCard";
import AboutCard from "./aboutCard";

export default function ContentTabs() {
    return(
        <Tabs defaultValue="about" className="md:min-h-[22rem]">
            <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="faq">Faq</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="subscribe">Subscribe</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
                <AboutCard />
            </TabsContent>
            <TabsContent value="faq">
                <FaqList />
            </TabsContent>
            <TabsContent value="contact">
                <ContactCard />
            </TabsContent>
            <TabsContent value="subscribe">
                <SubscribeCard />
            </TabsContent>
        </Tabs>
    );
}