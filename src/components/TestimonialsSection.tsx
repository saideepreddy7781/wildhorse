import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

// Updated testimonials array to exactly four items
const testimonials = [
  {
    name: 'Suriya', // Specific client name
    location: 'Bangalore',
    text: 'We have been associated with Wildhorse Photography since 2018... they make everyone feel comfortable... quality of photos and videos has always exceeded our expectations... We trust them completely for all our family events, and we highly recommend them... Thank you, Lokesh, for preserving our memories so beautifully!', // Shortened for brevity in example, use full text in actual code
    initials: 'S',
  },
  {
    name: 'Vinay Sridhara', // Specific client name
    location: 'Bangalore',
    text: 'Had a great experience... communication... very clear. The photographers were on time, very polite, friendly. Above all the photos and videos were awesome. Price also seems to be reasonable compared to others.',
    initials: 'VS',
  },
  {
    name: 'Priya R.', // Demo name
    location: 'Hyderabad', // Demo location
    text: 'Absolutely breathtaking! Lokesh truly captured the magic of our special day. From the candid laughter to the tender moments, every photograph tells a beautiful story. Their professionalism, creativity, and attention to detail made the entire experience seamless and joyful.',
    initials: 'PR', // Demo initials
  },
  {
    name: 'Amit K.', // Demo name
    location: 'Chennai', // Demo location
    text: 'Wonderful experience! Wild Horse Media beautifully documented our wedding day with stunning photos that perfectly captured the emotions, traditions, and love. Truly exceptional service and highly recommended!',
    initials: 'AK', // Demo initials
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

        {/* Adjusted grid layout for 4 items: 1 column on small, 2 on medium, 4 on large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-border flex flex-col relative overflow-hidden hover:-translate-y-2"
            >
              {/* Warm gradient overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 90, 60, 0.05) 0%, rgba(184, 134, 11, 0.08) 100%)',
                }}
              />
              
              <CardContent className="pt-6 flex flex-col flex-grow relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary group-hover:fill-[hsl(var(--gold))] group-hover:text-[hsl(var(--gold))] transition-colors duration-300" />
                  ))}
                </div>
                <p className="font-poppins text-muted-foreground mb-6 italic flex-grow group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar className="bg-primary/10 group-hover:bg-[hsl(var(--gold)/0.2)] transition-colors duration-300">
                    <AvatarFallback className="text-primary font-poppins font-semibold group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-playfair font-semibold text-foreground group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
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