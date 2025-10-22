// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/formApi';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        toast({
          title: 'Inquiry Submitted!',
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: '', mobile: '', email: '', service: '', city: '', message: '' });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
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
    <section id="contact" className="py-16 md:py-9 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">

        {/* --- Added Intro Text Section (Inspired by Phometo PDF) --- */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
                 Wild Horse Media - Best Photographers
             </h2>
             <p className="text-lg font-poppins text-muted-foreground mb-6">
                 If you are searching for the Best Photographers, You are on the perfect page! We Team Wild Horse Media are a one-stop solution for all your photography needs. We offer professional photography services such as Wedding Photography, Cinematography, Couple shoots, Album designing, and printing, etc.
             </p>
             {/* Note: The submit button is now part of the form below */}
         </div>


        {/* Grid for Form and Contact Info */}
        {/* Changed main title above the grid */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
             Get in Touch
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            Use the form below or contact us directly
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start"> {/* Added items-start for alignment */}
          {/* Form Card */}
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-foreground">
              Send an Inquiry {/* Changed title */}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-poppins"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  className="font-poppins pl-10"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-poppins"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Service Needed (e.g., Wedding, Rental)"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                  className="font-poppins"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="font-poppins"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-poppins min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full font-poppins" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} {/* Changed Button Text */}
              </Button>
            </form>
          </div>
          {/* Contact Info Side */}
          <div className="space-y-8 pt-6 md:pt-0"> {/* Optional padding top for better alignment */}
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
                <div className="p-3 bg-pink-500/10 rounded-full"><Instagram className="h-6 w-6 text-pink-500" /></div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Instagram</h3>
                   <a href="https://www.instagram.com/wildhorsemedia/" target="_blank" rel="noopener noreferrer" className="font-poppins text-muted-foreground hover:text-primary transition-colors">@wildhorsemedia</a>
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
                <div className="p-3 bg-accent/20 rounded-full"><MapPin className="h-6 w-6 text-secondary-foreground" /></div>
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