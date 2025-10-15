import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const testimonials = [
  {
    name: 'Vinay Sridhara',
    location: 'Bangalore',
    text: 'Had a great experience with Wild Horse Media. The communication with the representative on WhatsApp was very clear. The photographers were on time, very polite, friendly. Above all the photos and videos were awesome. Price also seems to be reasonable compared to others. I would definitely call the same team for our next function.',
    initials: 'VS',
  },
  {
    name: 'Avinash M',
    location: 'Bangalore',
    text: 'A very good service from the team, Team work to be very well appreciated. I had given my marriage album for print, Quality and the Time to delivery is too good. Team is ready to accept the changes required to deliver the best. Thanks for the nice album design. I will recommend for the people the most.',
    initials: 'AM',
  },
  {
    name: 'Kiran G',
    location: 'Bangalore',
    text: 'Extremely Happy with Maternity and Baby Shower Photo shoots. It was a great experience right from the beginning. Their coordination, follow ups and the response needs a special mention. Wild Horse Media has thorough professional, skilled and very friendly photographers. The photos and the quality are astounding.',
    initials: 'KG',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Testimonials
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            What our clients say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-[var(--shadow-pastel)] transition-all duration-300 border-border"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-poppins text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="bg-primary/10">
                    <AvatarFallback className="text-primary font-poppins font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-playfair font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm font-poppins text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
