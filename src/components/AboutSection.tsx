import { Button } from './ui/button';

const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center text-foreground">
            About Wild Horse Media
          </h2>

          <div className="space-y-6 font-poppins text-foreground/80 text-lg leading-relaxed">
            <p>
              Welcome to Wild Horse Media! We are one of the Top Rated Photographers providing
              exceptional photography and videography services. We are also one of the leading
              Wedding Photography and Cinematography Service Providers.
            </p>

            <p>
              We cover all special events such as Weddings, Engagements, Baby Shower, Pre-wedding
              Shoots, House warming Ceremonies and more. Along with Outdoor Photography Services, we
              also offer Photo Studio Services such as Photo Restoration, Album Designing and
              Printing, and more.
            </p>

            <p>
              We have a Professional Photography and Cinematography team here at Wild Horse Media
              and we give our 100% to add joy to your event. Our goal is not only to capture the
              moment, but also to narrate the story of emotions. We pour ourselves into every
              photography project we are a part of and we devote ourselves to create unique candid
              photos that capture your story.
            </p>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-playfair font-bold mb-6 text-foreground">
              Hire Best Photographers
            </h3>
            <p className="font-poppins text-muted-foreground mb-6">
              Top Rated photographers, videographers, candid photographers
            </p>
            <Button onClick={scrollToContact} size="lg" className="font-poppins">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
