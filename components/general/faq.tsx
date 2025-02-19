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
    <section className="relative bg-white">
      <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 pb-6 md:pb-8 lg:pb-10 pt-12 md:pt-16 lg:pt-20 border-[#00000021] xl:border-x">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 xl:grid-cols-12 lg:gap-x-12 items-start gap-y-10 md:gap-y-12">
            <div className="col-span-2 md:col-span-4 lg:col-span-6">
              <div className="grid grid-flow-row gap-y-8">
                <div className="grid grid-flow-row gap-y-5">
                  <div className="grid-grid-flow-row gap-y-2">
                    <h2 className="text-[#151515] text-4xl font-semibold">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-4 lg:col-span-6">
              <div className="grid grid-flow-row">
                {faqs.map((faq) => (
                  <Accordion type="single" collapsible key={faq.answer}>
                    <AccordionItem
                      value="item-1"
                      className="py-2 grid grid-flow-row border-b border-[#00000021]"
                    >
                      <AccordionTrigger className="text-[#00000085] font-semibold text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#000c] text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
