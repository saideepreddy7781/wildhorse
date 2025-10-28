import { Camera, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-playfair font-bold text-foreground">
                Wild Horse Media
              </h3>
            </div>
            <p className="font-poppins text-muted-foreground">
              Professional Photography & Videography Services capturing your precious moments with
              creativity and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 font-poppins text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Follow Us */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-foreground">Contact & Follow</h4>
            <div className="space-y-3 mb-4">
              <p className="font-poppins text-muted-foreground text-sm">
                <strong>Phone:</strong> +91 97409 44666
              </p>
              <p className="font-poppins text-muted-foreground text-sm">
                <strong>Email:</strong> <a href="mailto:teamwildhorse@gmail.com" className="hover:text-primary transition-colors">teamwildhorse@gmail.com</a>
              </p>
              <p className="font-poppins text-muted-foreground text-sm">
                <strong>Address:</strong><br />
                3901, 13th main kumaraswamy layout,<br />
                2nd stage, Bangalore - 560048
              </p>
              <p className="font-poppins text-muted-foreground text-sm">
                <strong>Service Areas:</strong><br />
                Serving Bangalore, Hyderabad, & Top Cities
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/wildhorsemedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.7449538905785!2d77.55535231508394!3d12.902568090898983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzA5LjIiTiA3N8KwMzMnMjcuMiJF!5e0!3m2!1sen!2sin!4v1698396742000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Wild Horse Media Location"
            />
          </div>
          <p className="font-poppins text-muted-foreground text-center">
            © {new Date().getFullYear()} Wild Horse Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
