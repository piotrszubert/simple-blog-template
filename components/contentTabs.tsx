"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactCard from "./contactCard"
import FaqList from "./faqList"
import SubscribeCard from "./subscribeCard"
import AboutCard from "./aboutCard"
import SettingsCard from "./settingsCard"

export default function ContentTabs() {
  return (
    <Tabs defaultValue="about" className="md:min-h-[22rem]">
      <TabsList>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="faq">Faq</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
        <TabsTrigger value="subscribe">Subscribe</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
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
      <TabsContent value="settings">
        <SettingsCard />
      </TabsContent>
    </Tabs>
  )
}
