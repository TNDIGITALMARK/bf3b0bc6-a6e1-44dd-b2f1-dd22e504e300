import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

export default function ContactPage() {
  const serviceAreas = [
    { city: "Hamilton", region: "Central Ontario" },
    { city: "Mississauga", region: "Greater Toronto Area" },
    { city: "Toronto", region: "Greater Toronto Area" },
    { city: "Markham", region: "Greater Toronto Area" },
    { city: "Barrie", region: "Central Ontario" },
    { city: "Oakville", region: "Greater Toronto Area" },
    { city: "North Bay", region: "Northern Ontario" },
    { city: "London", region: "Southwestern Ontario" },
    { city: "Muskoka", region: "Northern Ontario" }
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-white px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Get in Touch</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Request Your Free Quote
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Contact us today for a free, no-obligation quote. We'll respond within 24 hours to discuss your demolition or excavation project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Contact Details */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <a
                      href="tel:4379919026"
                      className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Phone</div>
                        <div className="font-semibold text-lg group-hover:text-secondary transition-colors">
                          (437) 991-9026
                        </div>
                        <div className="text-xs text-muted-foreground">Click to call</div>
                      </div>
                    </a>

                    <a
                      href="mailto:premiumdemolitioncontact@gmail.com"
                      className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Email</div>
                        <div className="font-semibold text-sm group-hover:text-secondary transition-colors break-all">
                          premiumdemolitioncontact@gmail.com
                        </div>
                        <div className="text-xs text-muted-foreground">Click to email</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-3">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Business Hours</div>
                        <div className="font-semibold">Monday - Friday</div>
                        <div className="text-sm text-muted-foreground">7:00 AM - 6:00 PM</div>
                        <div className="font-semibold mt-2">Saturday</div>
                        <div className="text-sm text-muted-foreground">8:00 AM - 4:00 PM</div>
                        <div className="font-semibold mt-2">Sunday</div>
                        <div className="text-sm text-muted-foreground">Emergency Service Only</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">Licensed & Insured</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">Safety Certified Crews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">Free Quotes & Consultations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">24-Hour Response Time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">Professional Equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">Eco-Friendly Disposal</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote Request Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Request a Free Quote</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Map */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <h2 className="text-3xl md:text-4xl font-bold">Service Areas</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  Proudly serving communities across Ontario
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all"
                  >
                    <div className="font-bold text-lg">{area.city}</div>
                    <div className="text-sm text-muted-foreground">{area.region}</div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  Don't see your location? <a href="tel:4379919026" className="text-secondary font-semibold hover:underline">Contact us</a> to discuss service availability in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Demolition Services</h2>
              <p className="text-lg text-white/90 mb-6">
                Need immediate demolition services due to structural damage, fire, or other emergencies? We offer 24/7 emergency response for critical situations.
              </p>
              <a
                href="tel:4379919026"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: (437) 991-9026
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
