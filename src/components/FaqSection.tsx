import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "What photography services does Wild Horse Media offer?",
      answer:
        "Wild Horse Media offers comprehensive, end-to-end photography and videography services in Bengaluru and across South India. We cover every milestone, from Newborn Photoshoots to 100th Birthday Shoots. We are a team of experienced Professional Photographers dedicated to serving our clients for many successful years.",
    },
    {
      question: "Why should I choose Wild Horse Media for my event?",
      answer:
        "We are a team of passionate, visionary individuals who traded our corporate careers for this creative dream. We offer proven trust with over 5,000 satisfied clients, a commitment to excellence with advanced equipment, efficient turnaround times for deliverables, secure cloud storage for your memories, and dedicated support to ensure you're happy with the final result.",
    },
    {
      question: "How can I be sure Wild Horse Media are the best photographers for me?",
      answer:
        "We encourage you to evaluate us based on key factors: our years of industry experience, our compelling and consistent portfolio, authentic client reviews and high ratings, and our commitment to providing value with customized packages that match your budget and requirements without compromising quality.",
    },
    {
      question: "Do you have a physical Photo Studio in Bengaluru?",
      answer:
        "Yes, we do! Our professional Photo Studio is located in Kumarswamy Layout, Bengaluru. We offer a full range of Digital Photo Studio services, including professional indoor shoots, portrait sessions, high-quality photo printing, and custom frame making.",
    },
  ];
  
  const FaqSection = () => {
    return (
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg font-poppins text-muted-foreground">
              On Wild Horse Media Photography Services
            </p>
          </div>
  
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 text-center">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-foreground">
                  Top Searches Related to Best Photographers
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-muted-foreground font-poppins text-sm md:text-base">
                  <p>Photographers Near me</p>
                  <p>Professional Photographer Near me</p>
                  <p>Photographers in Bangalore</p>
                  <p>Hire Photographer in Bangalore</p>
                  <p>Baby Photoshoot in Bangalore</p>
                  <p>Videographers Near Me</p>
                  <p>Maternity Photoshoot in Bangalore</p>
                  <p>Photography Near me</p>
                  <p>Freelance Photographer in Bangalore</p>
                  <p>Photoshoot Near me</p>
                  <p>Prewedding Photoshoot in Bangalore</p>
                  <p>Prewedding Photoshoot</p>
                  <p>Wedding Photographers in Bangalore</p>
                  <p>Candid Photographers in Bangalore</p>
                  <p>Wedding Photography in south india</p>
                  <p>Bangalore Photographers</p>
                  <p>Photographer for Birthday Party</p>
                  <p>Photo Studio Near Me Bangalore</p>
              </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default FaqSection;
  