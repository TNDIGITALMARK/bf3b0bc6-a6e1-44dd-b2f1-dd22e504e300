import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Building2, Truck, TreePine, HardHat, Shield, CheckCircle, Phone } from "lucide-react";

export default function Home() {
  const coreServices = [
    {
      icon: HomeIcon,
      title: "Residential Demolition",
      description: "Safe and efficient demolition for homes, garages, and residential structures.",
      features: [
        "Interior demolition and strip-outs",
        "Garage and shed removal",
        "Home addition preparation",
        "Complete house teardowns"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Demolition",
      description: "Professional demolition services for commercial and industrial properties.",
      features: [
        "Office building demolition",
        "Retail space clearing",
        "Warehouse teardowns",
        "Industrial facility removal"
      ]
    },
    {
      icon: Truck,
      title: "Excavation Services",
      description: "Expert excavation and site preparation for construction projects.",
      features: [
        "Foundation excavation",
        "Grading and land leveling",
        "Trenching for utilities",
        "Basement excavation"
      ]
    },
    {
      icon: TreePine,
      title: "Site Clearing",
      description: "Complete site clearing services to prepare your property for development.",
      features: [
        "Vegetation removal",
        "Debris clearing and disposal",
        "Land preparation",
        "Environmental compliance"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Homeowner",
      location: "Oakville",
      quote: "Premium Demolition handled our kitchen renovation demolition perfectly. Professional crew, on-time completion, and meticulous cleanup. Highly recommend!",
      projectType: "Residential Kitchen Demo"
    },
    {
      name: "Sarah Chen",
      role: "Contractor",
      location: "Barrie",
      quote: "We've partnered with Premium Demolition on multiple commercial projects. Their safety standards and reliability are unmatched. True professionals.",
      projectType: "Commercial Partnership"
    },
    {
      name: "David Martinez",
      role: "Property Developer",
      location: "London",
      quote: "Exceptional service for our site clearing project. The team was efficient, safety-focused, and completed everything ahead of schedule.",
      projectType: "Site Development"
    }
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Licensed & Insured • Safety Certified</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Professional Demolition & Excavation Services in Ontario
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Safe, efficient, and reliable demolition services backed by experienced crews and professional equipment. Serving communities across Ontario.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white/30 text-white">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-2 text-white/80">
                <Phone className="w-5 h-5" />
                <a href="tel:4379919026" className="text-xl font-semibold hover:text-secondary transition-colors">
                  (437) 991-9026
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Premium Demolition?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional service, safety-first approach, and proven results across Ontario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-muted-foreground">
                  Fully licensed, insured, and certified. We follow strict safety protocols on every project.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experienced Crews</h3>
                <p className="text-muted-foreground">
                  Professional teams with years of experience in residential and commercial demolition.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliable Equipment</h3>
                <p className="text-muted-foreground">
                  Modern, well-maintained equipment to ensure efficient and safe project completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive demolition and excavation solutions for residential and commercial projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="default">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Ontario Communities</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Professional demolition services across major Ontario markets.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {['Hamilton', 'Mississauga', 'Toronto', 'Markham', 'Barrie', 'Oakville', 'North Bay', 'London', 'Muskoka'].map((city) => (
                <div key={city} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="font-semibold">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by homeowners, contractors, and developers across Ontario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get a free quote today and experience professional demolition services you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90 text-secondary border-white">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
                <a href="tel:4379919026">Call (437) 991-9026</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
