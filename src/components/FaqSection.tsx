import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What photography services does Wild Horse Media offer?",
    answer: "Wild Horse Media offers comprehensive, end-to-end photography and videography services right here in Bengaluru and across South India. From capturing the delicate first moments of a Newborn Photoshoot to celebrating a century of life at a 100th Birthday Shoot, we cover every milestone. We are a team of experienced Professional Photographers dedicated to serving our clients for many successful years."
  },
  {
    question: "Why should I choose Wild Horse Media for my event?",
    answer: (
      <div className="space-y-4">
        <p>We know you have many choices, but Wild Horse Media is not just another photography service—we are a passion project. We are a team of passionate, visionary individuals who traded our corporate careers for this creative dream.</p>
        <h4 className="font-semibold text-foreground pt-2">Why hire us?</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Proven Trust:</strong> We have already served over 5,000 satisfied clients across the state.</li>
          <li><strong>Commitment to Excellence:</strong> We constantly invest in advanced equipment and gears and prioritize the quality of the final output.</li>
          <li><strong>Efficiency:</strong> We focus on reducing the turnaround time for your deliverables so you can relive your memories sooner.</li>
          <li><strong>Security:</strong> Your precious memories are safe with us, backed up using secure cloud storage.</li>
          <li><strong>Dedicated Support:</strong> We offer dedicated customer support to listen to your needs, and we promise never to settle until the album in your hands brings a genuine smile to your face!</li>
        </ul>
      </div>
    )
  },
  {
    question: "How can I be sure Wild Horse Media are the best photographers for me?",
    answer: (
        <div className="space-y-4">
            <p>Choosing the right visual storyteller is crucial. We encourage you to spend some time evaluating us based on these key factors we've always prioritized:</p>
            <ul className="list-disc pl-5 space-y-3">
                <li><strong>Industry Experience:</strong> Complex events like Wedding and Pre-Wedding Shoots require more than just a camera; they demand industry expertise. While creativity from new freelancers is valuable, professional photography needs experience to handle tricky scenarios in Candid Photography, Videography, and Marriage Photography. The Wild Horse Media Team has been active and successful in the industry for years, guaranteeing a professional approach.</li>
                <li><strong>Compelling Portfolio:</strong> Reviewing our portfolio is the best way to judge the caliber of our work. We invite you to see our detailed wedding photography albums and cinematography works to truly appreciate the consistency and quality beyond just a few selective demo images.</li>
                <li><strong>Authentic Reviews and Ratings:</strong> Look through our client testimonials. While reviews can be misleading today, a genuine client experience shines through. Wild Horse Media has consistently maintained a high rating (e.g., a 4.8 Rating) given by our esteemed clients who trust us with their biggest days.</li>
                <li><strong>Value and Budget:</strong> You can certainly find cheap photography, but always remember: you can’t get the best things for cheap. We believe in matching value with price. At Wild Horse Media, we provide customized photography packages designed to meet your specific requirements without compromising on the final result.</li>
                <li><strong>Timely Deliverables:</strong> Waiting forever for your memories is frustrating. We understand that deliverables and their delivery time are key. At Wild Horse Media, we pride ourselves on a highly efficient workflow, ensuring you receive your Photos, Videos, and Album in a timely manner.</li>
            </ul>
        </div>
    )
  },
  {
    question: "Do you have a physical Photo Studio in Bengaluru?",
    answer: "Yes, we do! Our professional Photo Studio is located in kumarswamy layout, Bengaluru. We offer a full range of Digital Photo Studio services, including professional indoor shoots, portrait sessions, high-quality photo printing, and custom frame making."
  }
];

const topSearches = [
    "Photographers Near me", "Professional Photographer Near me",
    "Photographers in Bangalore", "Hire Photographer in Bangalore",
    "Baby Photoshoot in Bangalore", "Videographers Near Me",
    "Maternity Photoshoot in Bangalore", "Photography Near me",
    "Freelance Photographer in Bangalore", "Photoshoot Near me",
    "Prewedding Photoshoot in Bangalore", "Prewedding Photoshoot",
    "Wedding Photographers in Bangalore", "Candid Photographers in Bangalore",
    "Wedding Photography in south india", "Bangalore Photographers",
    "Photographer for Birthday Party", "Photo Studio Near Me Bangalore"
];


const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            On Wild Horse Media Photography Services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-foreground">
                Top Searches Related to Best Photographers in South India
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-2 max-w-4xl mx-auto text-left font-poppins text-muted-foreground">
                {topSearches.map((term, index) => (
                    <p key={index} className=" ">
                        {term.trim()}
                    </p>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;