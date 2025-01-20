import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const readingLists = [
  {
    title: "Academic Writing Essentials",
    description:
      "Curated list of resources to improve your academic writing skills",
  },
  {
    title: "Research Methodology",
    description: "Essential readings on various research methodologies",
  },
  {
    title: "Career Development",
    description: "Books and articles to boost your professional growth",
  },
];

const ReadingLists = () => {
  return (
    <section id="reading-lists" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Reading Lists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {readingLists.map((list, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{list.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{list.description}</CardDescription>
                <Button className="mt-4" variant="outline">
                  View List
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingLists;
