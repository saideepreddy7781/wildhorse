import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Google Form Details
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc42uRVxbUP0zs41vNcNUcKw0dC9NSW2NJuI-0VgCxrmGZQ6w/formResponse';
const NAME_FIELD_ID = 'entry.1889392158';
const MOBILE_FIELD_ID = 'entry.169121633';
const EMAIL_FIELD_ID = 'entry.1119777017';
const SERVICE_FIELD_ID = 'entry.1507775531';
const CITY_FIELD_ID = 'entry.101705663';
const MESSAGE_FIELD_ID = 'entry.1011311059';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', service: '', city: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormSubmitted(false);

    const form = formRef.current;
    if (form) {
      const data = new FormData(form);
      fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(data as any),
      })
        .then(() => {
          toast({
            title: 'Inquiry Submitted!',
            description: "Thank you for reaching out. We'll get back to you soon.",
          });
          form.reset();
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          toast({
            title: 'Submission Failed',
            description: 'Something went wrong. Please try again or contact us directly.',
            variant: 'destructive',
          });
        })
        .finally(() => {
          setIsSubmitting(false);
          setFormSubmitted(true); // Signal that submission process is complete
        });
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Book Wild Horse Media Photography
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            Get in touch with us for your photography needs
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)]">
            <form ref={formRef} onSubmit={handleSubmit} target="hidden_iframe" className="space-y-6">
              <Input type="text" name={NAME_FIELD_ID} placeholder="Your Name" required className="font-poppins" />
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="tel" name={MOBILE_FIELD_ID} placeholder="Mobile Number" required className="font-poppins pl-10" />
              </div>
              <Input type="email" name={EMAIL_FIELD_ID} placeholder="Email" required className="font-poppins" />
              <Input type="text" name={SERVICE_FIELD_ID} placeholder="Service Needed (e.g., Wedding, Rental)" required className="font-poppins" />
              <Input type="text" name={CITY_FIELD_ID} placeholder="Your City" required className="font-poppins" />
              <Textarea name={MESSAGE_FIELD_ID} placeholder="Your Message (Optional)" className="font-poppins min-h-[100px]" />
              <Button type="submit" className="w-full font-poppins" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </form>
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
          </div>
          <div className="space-y-8">
             <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Call Us</h3>
                  <p className="font-poppins text-muted-foreground">+91 97409 44666</p>
                </div>
              </div>
            </div>
             <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)]">
               <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-full"><Mail className="h-6 w-6 text-secondary-foreground" /></div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Email Us</h3>
                  <p className="font-poppins text-muted-foreground">teamwildhorse@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)]">
               <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500/10 rounded-full"><Instagram className="h-6 w-6 text-pink-500" /></div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Instagram</h3>
                   <a href="https://www.instagram.com/wildhorsemedia/" target="_blank" rel="noopener noreferrer" className="font-poppins text-muted-foreground hover:text-primary transition-colors">@wildhorsemedia</a>
                </div>
              </div>
            </div>
             <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)]">
               <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-full"><MapPin className="h-6 w-6 text-accent-foreground" /></div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="font-poppins text-muted-foreground">3901, 13th main kumaraswamy layout, 2nd stage, Bangalore - 560048</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;

