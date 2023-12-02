import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutCard() {
    return (
        <Card className="mt-6 md:mt-0">
            <CardHeader>
                <CardTitle>The Journey Begins</CardTitle>
                <CardDescription>Discover the story behind this blog</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut maxime ex dolore quas recusandae dolor quibusdam sint excepturi accusantium architecto.
                </div>
                <div className="inline-flex gap-3">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar className="transition-all duration-300 hover:scale-110">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>Read about CN</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar className="transition-all duration-300 hover:scale-110">
                                    <AvatarImage src="https://github.com/piotrszubert.png" />
                                    <AvatarFallback>PS</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>Read about PS777</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </CardContent>
        </Card>
    );
}
