import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
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

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Photography Inquiry - ${formData.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nService: ${formData.service}\nCity: ${formData.city}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:teamwildhorse@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: 'Opening email client...',
      description: 'Your inquiry will be sent to teamwildhorse@gmail.com',
    });

    setFormData({ // Reset form after submission attempt
      name: '',
      mobile: '',
      email: '',
      service: '',
      city: '',
      message: '',
    });
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
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)]">
            {/* --- CUSTOM REACT FORM --- */}
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
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="font-poppins">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="wedding">Wedding</SelectItem>
                     <SelectItem value="prewedding">Pre-wedding</SelectItem>
                     <SelectItem value="maternity">Maternity & Baby showers</SelectItem>
                     <SelectItem value="product">Product / E-Commerce photography</SelectItem>
                     <SelectItem value="babyphotoshoot">Baby photoshoots</SelectItem>
                     <SelectItem value="modelphotoshoot">Model photoshoots</SelectItem>
                     <SelectItem value="familyphotoshoot">Family photoshoots</SelectItem>
                     <SelectItem value="housewarming">Housewarming</SelectItem>
                     <SelectItem value="namingceremony">Naming ceremony</SelectItem>
                     <SelectItem value="albumdesign">Album designs and printing</SelectItem>
                     <SelectItem value="corporate">Corporate photography</SelectItem>
                     <SelectItem value="rental">Camera Rentals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select
                  value={formData.city}
                  onValueChange={(value) => setFormData({ ...formData, city: value })}
                >
                  <SelectTrigger className="font-poppins">
                    <SelectValue placeholder="Select Your City" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="bangalore">Bangalore</SelectItem>
                     <SelectItem value="mysore">Mysore</SelectItem>
                     <SelectItem value="tumkur">Tumkur</SelectItem>
                     <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Your Message (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-poppins min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full font-poppins" size="lg">
                Submit Inquiry
              </Button>
            </form>
             {/* --- END CUSTOM REACT FORM --- */}
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