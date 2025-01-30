import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of academic services including dissertation writing, thesis support, resume writing, editing, and proofreading services.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "Our team of experienced academic writers and editors follows strict quality control measures. Each piece is thoroughly reviewed for accuracy, originality, and adherence to academic standards.",
  },
  {
    question: "What are your turnaround times?",
    answer:
      "Turnaround times vary depending on the service and project scope. We offer flexible deadlines and can accommodate urgent requests when possible.",
  },
  {
    question: "Do you guarantee originality?",
    answer:
      "Yes, all our work is original and custom-written according to your requirements. We use plagiarism detection software to ensure uniqueness.",
  },
];

export function FAQ() {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Find answers to common questions about our services
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
