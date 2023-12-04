"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FaqList from "./faqList"
import AboutCard from "./aboutCard"
import SettingsCard from "./settingsCard"

export default function ContentTabs() {
  return (
    <Tabs defaultValue="about" className="md:min-h-[22rem]">
      <TabsList>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="faq">Faq</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <AboutCard />
      </TabsContent>
      <TabsContent value="faq">
        <FaqList />
      </TabsContent>
      <TabsContent value="settings">
        <SettingsCard />
      </TabsContent>
    </Tabs>
  )
}
