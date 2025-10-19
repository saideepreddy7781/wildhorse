// src/components/BookingForm.tsx
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
// Removed Select imports

// --- Google Form Details (Copied) ---
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc42uRVxbUP0zs41vNcNUcKw0dC9NSW2NJuI-0VgCxrmGZQ6w/formResponse';
const NAME_FIELD_ID = 'entry.1889392158';
const MOBILE_FIELD_ID = 'entry.169121633';
const EMAIL_FIELD_ID = 'entry.1119777017';
const SERVICE_FIELD_ID = 'entry.1507775531';
const CITY_FIELD_ID = 'entry.101705663';
const MESSAGE_FIELD_ID = 'entry.1011311059';
// --- End Google Form details ---

interface BookingFormProps {
  defaultService: string; // The service name to pre-fill
}

const BookingForm: React.FC<BookingFormProps> = ({ defaultService }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '', // User types the city
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
    googleFormData.append(SERVICE_FIELD_ID, defaultService); // Use pre-filled service
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
        description: "Thank you, we'll get back to you soon.",
      });
      setFormData({ name: '', mobile: '', email: '', city: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-xl border border-border/50">
       <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-foreground">
            Book {defaultService}
        </h3>
      {/* Name */}
      <div>
        <Input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="font-poppins bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
      </div>
      {/* Mobile */}
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required className="font-poppins pl-10 bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
      </div>
      {/* Email */}
      <div>
        <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="font-poppins bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
      </div>
      {/* Service is hidden */}
       <input type="hidden" name="service" value={defaultService} />
       <p className='text-sm font-poppins text-muted-foreground'>Service Selected: <span className='font-medium text-foreground'>{defaultService}</span></p>
      {/* City (Input instead of Select) */}
      <div>
         <Input type="text" placeholder="Your City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required className="font-poppins bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
      </div>
      {/* Message */}
      <div>
        <Textarea placeholder="Requirements / Event Date / Message (Optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="font-poppins min-h-[100px] bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
      </div>
      {/* Submit Button */}
      <Button type="submit" className="w-full font-poppins" size="lg" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request Quote'}
      </Button>
    </form>
  );
};
export default BookingForm;