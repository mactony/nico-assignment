import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Service } from "@prisma/client";

export const metadata: Metadata = {
  title: "Services - Nick's Tutoring Hub",
  description:
    "Professional academic writing services including dissertations, resumes, editing, and proofreading.",
};

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    services = await prisma.service.findMany({
      orderBy: { title: "asc" },
    });
  } catch (error) {
    console.error("Error fetching services:", error);
  }

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground">
          Professional academic writing services tailored to your needs
        </p>
      </div>

      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>
                  Starting from ${service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button asChild className="w-full">
                  <Link href={`/services/${service.category.toLowerCase()}`}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No services available at the moment. Check back soon!
        </p>
      )}
    </div>
  );
}
