import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Edit,
  FileText,
  GraduationCap,
  PenTool,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Dissertation Writing",
    description:
      "Expert guidance and writing support for your dissertation. We help with topic selection, research methodology, literature review, data analysis, and final write-up.",
    icon: BookOpen,
  },
  {
    title: "Writing Services",
    description:
      "Professional writing assistance for all academic needs, including essays, research papers, case studies, and more. We ensure high-quality, plagiarism-free content.",
    icon: PenTool,
  },
  {
    title: "Online Classes",
    description:
      "Interactive online tutoring sessions covering a wide range of subjects. Get personalized attention and flexible scheduling to fit your learning needs.",
    icon: GraduationCap,
  },
  {
    title: "Resume Writing",
    description:
      "Craft compelling resumes that stand out. We highlight your strengths, tailor your experience to job requirements, and optimize for ATS systems.",
    icon: FileText,
  },
  {
    title: "Turnitin/AI/Plagiarism Removal",
    description:
      "Ensure originality in your academic work. We help identify and resolve potential plagiarism issues, including AI-generated content detection and removal.",
    icon: Shield,
  },
  {
    title: "Editing Services",
    description:
      "Polish your writing to perfection. Our editing services cover grammar, style, structure, and formatting to enhance the quality of your academic papers.",
    icon: Edit,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <service.icon className="mr-2 h-6 w-6" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
