// src/components/BookingForm.tsx
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

// --- !!! IMPORTANT: REPLACE THESE PLACEHOLDERS !!! ---
const GOOGLE_FORM_ACTION_URL = 'YOUR_GOOGLE_FORM_ACTION_URL_HERE'; // <-- PASTE YOUR URL ENDING IN /formResponse
const NAME_FIELD_ID = 'entry.YOUR_NAME_FIELD_NUMBER';       // <-- PASTE Name entry.NUMBER HERE
const MOBILE_FIELD_ID = 'entry.YOUR_MOBILE_FIELD_NUMBER';    // <-- PASTE Mobile entry.NUMBER HERE
const EMAIL_FIELD_ID = 'entry.YOUR_EMAIL_FIELD_NUMBER';     // <-- PASTE Email entry.NUMBER HERE
const SERVICE_FIELD_ID = 'entry.YOUR_SERVICE_FIELD_NUMBER';  // <-- PASTE Service entry.NUMBER HERE
const CITY_FIELD_ID = 'entry.YOUR_CITY_FIELD_NUMBER';       // <-- PASTE City entry.NUMBER HERE
const MESSAGE_FIELD_ID = 'entry.YOUR_MESSAGE_FIELD_NUMBER';  // <-- PASTE Message entry.NUMBER HERE
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
    city: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!GOOGLE_FORM_ACTION_URL || GOOGLE_FORM_ACTION_URL === 'YOUR_GOOGLE_FORM_ACTION_URL_HERE') {
        toast({ title: 'Form Error', description: 'Form submission URL is not configured.', variant: 'destructive' });
        return;
    }
    if (!NAME_FIELD_ID || !MOBILE_FIELD_ID || !EMAIL_FIELD_ID || !SERVICE_FIELD_ID || !CITY_FIELD_ID || !MESSAGE_FIELD_ID || NAME_FIELD_ID.includes('YOUR_')) {
        toast({ title: 'Form Error', description: 'Form field IDs are not configured.', variant: 'destructive' });
        return;
    }

    setIsSubmitting(true);

    const googleFormData = new FormData();
    googleFormData.append(NAME_FIELD_ID, formData.name);
    googleFormData.append(MOBILE_FIELD_ID, formData.mobile);
    googleFormData.append(EMAIL_FIELD_ID, formData.email);
    googleFormData.append(SERVICE_FIELD_ID, defaultService); // Use the pre-filled service from props
    googleFormData.append(CITY_FIELD_ID, formData.city);
    googleFormData.append(MESSAGE_FIELD_ID, formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Forms submission
        body: new URLSearchParams(googleFormData as any),
      });

      toast({
        title: 'Inquiry Submitted!',
        description: "Thank you, we'll get back to you soon.",
      });
      // Reset form fields (keeping service pre-filled conceptually)
      setFormData({ name: '', mobile: '', email: '', city: '', message: '' });
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
    // Added slightly transparent background and more padding/shadow
    <form onSubmit={handleSubmit} className="space-y-6 bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-xl border border-border/50">
       <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-foreground">
            Book {defaultService}
        </h3>
      <div>
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          // Adjusted input background for better visibility on image backgrounds
          className="font-poppins bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background"
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
          className="font-poppins pl-10 bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="font-poppins bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background"
        />
      </div>

       {/* Display the pre-selected service */}
       <input type="hidden" name="service" value={defaultService} />
       <p className='text-sm font-poppins text-muted-foreground'>Service Selected: <span className='font-medium text-foreground'>{defaultService}</span></p>


      <div>
        <Select
          value={formData.city}
          onValueChange={(value) => setFormData({ ...formData, city: value })}
        >
          <SelectTrigger className="font-poppins bg-background/80 data-[placeholder]:text-muted-foreground/80 focus:bg-background">
            <SelectValue placeholder="Select Your City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bangalore">Bangalore</SelectItem>
            <SelectItem value="Hyderabad">Hyderabad</SelectItem>
            <SelectItem value="Mysore">Mysore</SelectItem>
            <SelectItem value="Tumkur">Tumkur</SelectItem>
            <SelectItem value="Others">Others</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Textarea
          placeholder="Requirements / Event Date / Message (Optional)" // Added prompt for event date
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="font-poppins min-h-[100px] bg-background/80 placeholder:text-muted-foreground/80 focus:bg-background"
        />
      </div>
      <Button type="submit" className="w-full font-poppins" size="lg" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request Quote'}
      </Button>
    </form>
  );
};

export default BookingForm;