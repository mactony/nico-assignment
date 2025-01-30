import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Edit, FileText, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Dissertation Writing",
    description: "Expert guidance and support for your thesis or dissertation",
    icon: GraduationCap,
    href: "/services/dissertation",
  },
  {
    title: "Resume Writing",
    description: "Professional resume writing to help you land your dream job",
    icon: FileText,
    href: "/services/resume",
  },
  {
    title: "Editing Services",
    description: "Comprehensive editing to perfect your academic work",
    icon: Edit,
    href: "/services/editing",
  },
  {
    title: "Proofreading",
    description:
      "Detailed proofreading to eliminate errors and improve clarity",
    icon: BookOpen,
    href: "/services/proofreading",
  },
];

export function Services() {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground">
          Comprehensive academic support tailored to your needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="relative group">
            <CardHeader>
              <service.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={service.href}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
