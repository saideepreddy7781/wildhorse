import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
// Removed Select imports

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
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '', // User types the service
    city: '',    // User types the city
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormData = new FormData();
    googleFormData.append(NAME_FIELD_ID, formData.name);
    googleFormData.append(MOBILE_FIELD_ID, formData.mobile);
    googleFormData.append(EMAIL_FIELD_ID, formData.email);
    googleFormData.append(SERVICE_FIELD_ID, formData.service || 'General Inquiry');
    googleFormData.append(CITY_FIELD_ID, formData.city);
    googleFormData.append(MESSAGE_FIELD_ID, formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(googleFormData as any),
      });
      toast({
        title: 'Inquiry Submitted!',
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: '', mobile: '', email: '', service: '', city: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: 'Submission Failed',
        description: 'Something went wrong. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* ... Section Title ... */}
         <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Book Wild Horse Media Photography
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            Get in touch with us for your photography needs
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="font-poppins" />
              </div>
              {/* Mobile */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required className="font-poppins pl-10" />
              </div>
              {/* Email */}
              <div>
                <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="font-poppins" />
              </div>
              {/* Service (Input instead of Select) */}
              <div>
                <Input type="text" placeholder="Service Needed (e.g., Wedding, Rental)" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} required className="font-poppins" />
              </div>
              {/* City (Input instead of Select) */}
              <div>
                <Input type="text" placeholder="Your City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required className="font-poppins" />
              </div>
              {/* Message */}
              <div>
                <Textarea placeholder="Your Message (Optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="font-poppins min-h-[100px]" />
              </div>
              {/* Submit Button */}
              <Button type="submit" className="w-full font-poppins" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            {/* ... Contact Info Blocks ... */}
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