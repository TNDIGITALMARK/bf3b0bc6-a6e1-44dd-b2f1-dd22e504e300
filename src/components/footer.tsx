import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, CheckCircle } from 'lucide-react';

export function Footer() {
  const serviceAreas = [
    'Hamilton', 'Mississauga', 'Toronto', 'Markham',
    'Barrie', 'Oakville', 'North Bay', 'London', 'Muskoka'
  ];

  const services = [
    'Residential Demolition',
    'Commercial Demolition',
    'Site Clearing',
    'Excavation Services',
    'Concrete Removal',
    'Asbestos Removal'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center font-bold text-2xl">
                PD
              </div>
              <div>
                <div className="font-bold text-lg">Premium Demolition</div>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Professional demolition and excavation services across Ontario. Safe, efficient, and reliable.
            </p>
            <div className="flex items-center gap-2 text-secondary mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">Safety Certified</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-white/80">Serving Ontario</span>
            </div>
            <ul className="space-y-1">
              {serviceAreas.map((area) => (
                <li key={area} className="text-white/80 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:4379919026"
                className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors group"
              >
                <div className="w-10 h-10 bg-secondary/10 group-hover:bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-white/60">Call Us</div>
                  <div className="font-semibold">(437) 991-9026</div>
                </div>
              </a>

              <a
                href="mailto:premiumdemolitioncontact@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors group"
              >
                <div className="w-10 h-10 bg-secondary/10 group-hover:bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-white/60">Email Us</div>
                  <div className="font-semibold text-sm break-all">
                    premiumdemolitioncontact@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Premium Demolition. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="text-white/60 hover:text-secondary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-secondary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
