import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What sets Nick's Tutoring Hub apart from other services?",
    answer:
      "Nick's Tutoring Hub offers personalized, expert-level academic support with over a decade of experience. We provide a comprehensive range of services, from dissertation writing to online classes, all tailored to meet individual student needs.",
  },
  {
    question: "How do you ensure the quality and originality of your work?",
    answer:
      "We have a rigorous quality control process that includes multiple rounds of editing, plagiarism checks, and subject matter expert reviews. All our work is original, tailored to your specific requirements, and thoroughly checked for quality and authenticity.",
  },
  {
    question: "Can you help with urgent assignments or tight deadlines?",
    answer:
      "Yes, we understand that students often face tight deadlines. Our team is equipped to handle urgent assignments without compromising on quality. However, we recommend reaching out to us as early as possible to ensure the best results.",
  },
  {
    question: "Do you offer support in specialized or niche academic fields?",
    answer:
      "Our team includes experts from a wide range of academic disciplines. Whether you need help with a specialized STEM subject, a humanities paper, or a business case study, we have tutors with the relevant expertise to assist you.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing varies depending on the type of service, the complexity of the task, and the deadline. We offer competitive rates and strive to provide the best value for our high-quality services. Contact us for a personalized quote based on your specific needs.",
  },
  {
    question: "Is your service confidential?",
    answer:
      "Yes, we take your privacy very seriously. All our services are completely confidential, and we never share your personal information or academic work with third parties. Your trust and privacy are paramount to us.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
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
};

export default FAQ;
