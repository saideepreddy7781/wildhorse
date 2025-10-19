import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

// --- Google Form Details ---
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc42uRVxbUP0zs41vNcNUcKw0dC9NSW2NJuI-0VgCxrmGZQ6w/formResponse';
const NAME_FIELD_ID = 'entry.1889392158';
const MOBILE_FIELD_ID = 'entry.169121633';
const EMAIL_FIELD_ID = 'entry.1119777017';
const SERVICE_FIELD_ID = 'entry.1507775531';
const CITY_FIELD_ID = 'entry.101705663';
const MESSAGE_FIELD_ID = 'entry.1011311059';
// --- End Google Form details ---

const ContactSection = () => {
  const { toast } = useToast();
  const [formKey, setFormKey] = useState(Date.now());

  const handleSubmit = () => {
    setTimeout(() => {
      toast({
        title: 'Inquiry Submitted!',
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormKey(Date.now()); // This will reset the form by re-rendering it
    }, 500);
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
            <form
              key={formKey}
              action={GOOGLE_FORM_ACTION_URL}
              method="POST"
              target="hidden_iframe_contact"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-foreground">
                Send an Inquiry
              </h3>
              <div>
                <Input name={NAME_FIELD_ID} type="text" placeholder="Your Name" required className="font-poppins" />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input name={MOBILE_FIELD_ID} type="tel" placeholder="Mobile Number" required className="font-poppins pl-10" />
              </div>
              <div>
                <Input name={EMAIL_FIELD_ID} type="email" placeholder="Email" required className="font-poppins" />
              </div>
              <div>
                <Input name={SERVICE_FIELD_ID} type="text" placeholder="Service Needed (e.g., Wedding, Rental)" required className="font-poppins" />
              </div>
              <div>
                <Input name={CITY_FIELD_ID} type="text" placeholder="Your City" required className="font-poppins" />
              </div>
              <div>
                <Textarea name={MESSAGE_FIELD_ID} placeholder="Your Message (Optional)" className="font-poppins min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full font-poppins" size="lg">
                Submit Inquiry
              </Button>
            </form>
            <iframe name="hidden_iframe_contact" id="hidden_iframe_contact" style={{ display: 'none' }}></iframe>
          </div>
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Call Us</h3>
                  <p className="font-poppins text-muted-foreground">+91 97409 44666</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <Mail className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Email Us</h3>
                  <p className="font-poppins text-muted-foreground">teamwildhorse@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="font-poppins text-muted-foreground">
                    3901, 13th main kumaraswamy layout, 2nd stage, Bangalore - 560048
                  </p>
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