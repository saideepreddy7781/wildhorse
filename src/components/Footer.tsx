import { Camera, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

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

          {/* Follow Us */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-poppins text-muted-foreground">
            © {new Date().getFullYear()} Wild Horse Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
