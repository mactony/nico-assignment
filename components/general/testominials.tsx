import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "PhD Student",
    content:
      "The dissertation support I received was exceptional. The team helped me structure my research effectively.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Graduate Student",
    content:
      "Their editing services transformed my thesis. The attention to detail was impressive.",
    avatar: "MC",
  },
  {
    name: "Emma Davis",
    role: "Undergraduate",
    content:
      "The proofreading service helped me improve my essays significantly. Highly recommended!",
    avatar: "ED",
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto py-24 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground">
          Read about the experiences of our satisfied clients
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
