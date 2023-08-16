import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

const formSchema = z.object({
    email: z.string().min(2).max(50),
    message: z.string().min(2).max(250),
})

export default function ContactCard() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          message: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <Card>
        <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Please use the form below to get in touch with us.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <>
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="email@example.com"  {...form.register("email")} />
                                    </FormControl>
                                    {/* <FormDescription>
                                        Leave your email so we can reply you
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea   {...form.register("message")} />
                                    </FormControl>
                                    {/* <FormDescription>
                                        Leave your email so we can reply you
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            </>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </CardContent>
        <CardFooter>
            {/* <p>Card Footer</p> */}
        </CardFooter>
        </Card>
    );
}