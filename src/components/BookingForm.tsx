// src/components/BookingForm.tsx
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from '@/hooks/use-toast';
import { submitServiceBookingForm } from '@/lib/formApi';
import { Package } from '@/lib/servicesData';

interface BookingFormProps {
  defaultService: string; // The service name to pre-fill
  packages?: Package[]; // Optional packages for the service
}

const BookingForm: React.FC<BookingFormProps> = ({ defaultService, packages }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    package: '', // Add package field
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitServiceBookingForm({
        ...formData,
        service: defaultService
      });
      
      if (result.success) {
        toast({
          title: 'Inquiry Submitted!',
          description: "Thank you, we'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: '', mobile: '', email: '', city: '', package: '', message: '' });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error("Error submitting booking form:", error);
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
      {/* Package Selection */}
      {packages && packages.length > 0 && (
        <div>
          <Select
            value={formData.package}
            onValueChange={(value) => setFormData({ ...formData, package: value })}
          >
            <SelectTrigger className="font-poppins bg-background/80 focus:bg-background">
              <SelectValue placeholder="Select Package (Optional)" />
            </SelectTrigger>
            <SelectContent>
              {packages.map((pkg, index) => (
                <SelectItem key={index} value={pkg.name} className="font-poppins">
                  <div className="flex items-center gap-2">
                    <span>{pkg.name}</span>
                    {pkg.price && <span className="text-amber-600 font-semibold">- {pkg.price}</span>}
                    {pkg.popular && <span className="text-xs text-amber-500">⭐</span>}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
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