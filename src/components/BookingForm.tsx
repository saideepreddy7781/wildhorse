// src/components/BookingForm.tsx
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
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

interface BookingFormProps {
  defaultService: string; // The service name to pre-fill
}

const BookingForm: React.FC<BookingFormProps> = ({ defaultService }) => {
  const { toast } = useToast();
  const [formKey, setFormKey] = useState(Date.now()); // Key to reset the form

  const handleSubmit = () => {
    // Show toast and reset the form after a short delay to allow submission
    setTimeout(() => {
      toast({
        title: 'Inquiry Submitted!',
        description: "Thank you, we'll get back to you soon.",
      });
      setFormKey(Date.now()); // Change key to force re-render and clear form
    }, 500);
  };

  return (
    <>
      <form
        key={formKey}
        action={GOOGLE_FORM_ACTION_URL}
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-6 bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-xl border border-border/50"
      >
        <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-foreground">
          Book {defaultService}
        </h3>
        {/* Name */}
        <div>
          <Input name={NAME_FIELD_ID} type="text" placeholder="Your Name" required className="font-poppins bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
        </div>
        {/* Mobile */}
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input name={MOBILE_FIELD_ID} type="tel" placeholder="Mobile Number" required className="font-poppins pl-10 bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
        </div>
        {/* Email */}
        <div>
          <Input name={EMAIL_FIELD_ID} type="email" placeholder="Email" required className="font-poppins bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
        </div>
        {/* Service is hidden */}
        <input type="hidden" name={SERVICE_FIELD_ID} value={defaultService} />
        <p className="text-sm font-poppins text-muted-foreground">Service Selected: <span className="font-medium text-foreground">{defaultService}</span></p>
        {/* City */}
        <div>
          <Input name={CITY_FIELD_ID} type="text" placeholder="Your City" required className="font-poppins bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
        </div>
        {/* Message */}
        <div>
          <Textarea name={MESSAGE_FIELD_ID} placeholder="Requirements / Event Date / Message (Optional)" className="font-poppins min-h-[100px] bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background" />
        </div>
        {/* Submit Button */}
        <Button type="submit" className="w-full font-poppins" size="lg">
          Request Quote
        </Button>
      </form>
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
    </>
  );
};