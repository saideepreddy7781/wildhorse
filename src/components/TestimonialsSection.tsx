import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const testimonials = [
  {
    name: 'Vinay Sridhara',
    location: 'Bangalore',
    text: 'Had a great experience with Wild Horse Media. The communication with the representative on WhatsApp was very clear. The photographers were on time, very polite, friendly. Above all the photos and videos were awesome. Price also seems to be reasonable compared to others.',
    initials: 'VS',
  },
  {
    name: 'Avinash M',
    location: 'Bangalore',
    text: 'A very good service from the team, Team work to be very well appreciated. I had given my marriage album for print, Quality and the Time to delivery is too good. Team is ready to accept the changes required to deliver the best.',
    initials: 'AM',
  },
  {
    name: 'Kiran G',
    location: 'Bangalore',
    text: 'Extremely Happy with Maternity and Baby Shower Photo shoots. It was a great experience right from the beginning. Their coordination, follow ups and the response needs a special mention. Wild Horse Media has thorough professional, skilled and very friendly photographers.',
    initials: 'KG',
  },
  {
    name: 'Priya Sharma',
    location: 'Hyderabad',
    text: 'Outstanding work! The team captured our wedding beautifully. Every moment was perfectly documented and the album design exceeded our expectations. Highly recommended!',
    initials: 'PS',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    text: 'Professional and creative photographers. They made our pre-wedding shoot so comfortable and fun. The final photos were stunning and unique. Thank you Wild Horse Media!',
    initials: 'RK',
  },
  {
    name: 'Deepa Reddy',
    location: 'Chennai',
    text: 'Excellent service for our baby photoshoot. The photographers were patient and knew exactly how to work with our little one. We got beautiful memories captured forever.',
    initials: 'DR',
  },
  {
    name: 'Amit Patel',
    location: 'Pune',
    text: 'Very professional corporate photography service. They understood our brand requirements perfectly and delivered high-quality images on time. Great team to work with!',
    initials: 'AP',
  },
  {
    name: 'Sneha Iyer',
    location: 'Bangalore',
    text: 'The maternity photoshoot was a wonderful experience. The team made me feel comfortable and the photos turned out absolutely gorgeous. Highly recommend their services!',
    initials: 'SI',
  },
  {
    name: 'Vikram Singh',
    location: 'Delhi',
    text: 'Fantastic product photography for our e-commerce store. The images are crisp, professional, and really showcase our products well. Great value for money!',
    initials: 'VS',
  },
  {
    name: 'Meera Nair',
    location: 'Kochi',
    text: 'Wild Horse Media captured our family moments beautifully at our housewarming. The candid shots were amazing and the team was very friendly. Will definitely hire them again!',
    initials: 'MN',
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
