import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const data = [
    {
        question: "What is the purpose of this blog?",
        answer: "Our blog aims to provide informative and engaging content on various topics, including technology, lifestyle, and current trends."
    },
    {
        question: "How often do you publish new articles?",
        answer: "We strive to publish new articles every week on different subjects to keep our readers informed and entertained."
    },
    {
        question: "Can I contribute my own articles to your blog?",
        answer: "Absolutely! We welcome guest contributions from passionate writers. Feel free to reach out to us with your ideas."
    },
    {
        question: "Do you offer advertising opportunities on your blog?",
        answer: "Yes, we offer advertising slots for businesses looking to promote their products or services to our engaged audience. Contact us for more information."
    }
];

export default function FaqList() {
    return(
        <div>
            <Accordion type="single" collapsible>
                {data.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}