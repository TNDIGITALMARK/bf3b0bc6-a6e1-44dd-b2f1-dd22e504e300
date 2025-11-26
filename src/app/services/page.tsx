import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Truck, TreePine, Hammer, Shield, AlertTriangle, Trash2, Mountain, Factory } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Interior Demolition",
      description: "Professional interior demolition for residential renovations and remodeling projects.",
      features: [
        "Kitchen and bathroom demolition",
        "Wall and partition removal",
        "Flooring and ceiling strip-out",
        "Careful preservation of structural elements",
        "Complete debris removal and cleanup"
      ]
    },
    {
      icon: Hammer,
      title: "Exterior Structure Removal",
      description: "Safe demolition of exterior structures including garages, sheds, and additions.",
      features: [
        "Garage and carport demolition",
        "Shed and outbuilding removal",
        "Deck and patio demolition",
        "Fence removal",
        "Foundation and footings removal"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Building Teardown",
      description: "Complete commercial building demolition with minimal disruption to surrounding properties.",
      features: [
        "Office building demolition",
        "Retail space clearing",
        "Warehouse and industrial facilities",
        "Strip mall demolition",
        "Multi-story building takedown"
      ]
    },
    {
      icon: Factory,
      title: "Industrial Demolition",
      description: "Specialized demolition services for industrial facilities and manufacturing plants.",
      features: [
        "Factory and plant demolition",
        "Equipment removal and disposal",
        "Structural steel dismantling",
        "Heavy machinery removal",
        "Environmental compliance"
      ]
    },
    {
      icon: Truck,
      title: "Site Excavation & Grading",
      description: "Professional excavation and land grading for construction preparation.",
      features: [
        "Foundation excavation",
        "Land leveling and grading",
        "Drainage solutions",
        "Trenching for utilities",
        "Backfilling and compaction"
      ]
    },
    {
      icon: Mountain,
      title: "Concrete Removal & Disposal",
      description: "Efficient removal and eco-friendly disposal of concrete structures and surfaces.",
      features: [
        "Driveway and sidewalk removal",
        "Foundation breaking and removal",
        "Concrete slab demolition",
        "Retaining wall removal",
        "Recycling and disposal"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Asbestos Safe Removal",
      description: "Certified asbestos removal services following strict safety protocols.",
      features: [
        "Asbestos inspection and testing",
        "Safe removal and containment",
        "Certified disposal procedures",
        "Air quality monitoring",
        "Full regulatory compliance"
      ]
    },
    {
      icon: TreePine,
      title: "Land Clearing Services",
      description: "Complete site clearing to prepare land for development or construction.",
      features: [
        "Vegetation and tree removal",
        "Brush clearing",
        "Stump grinding and removal",
        "Debris hauling",
        "Environmental protection measures"
      ]
    },
    {
      icon: Trash2,
      title: "Debris Removal & Disposal",
      description: "Professional cleanup and disposal services for demolition projects.",
      features: [
        "Construction debris removal",
        "Sorting and recycling",
        "Hazardous material disposal",
        "Final site cleanup",
        "Eco-friendly disposal practices"
      ]
    }
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
                <span className="text-sm font-semibold">Professional Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Comprehensive Demolition & Excavation Services
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From residential renovations to large-scale commercial projects, we provide safe, efficient demolition and site preparation services across Ontario.
              </p>

              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional demolition solutions tailored to your project needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Compliance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety & Compliance</h2>
                <p className="text-lg text-muted-foreground">
                  Your safety is our top priority. Every project follows strict safety protocols.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                      <p className="text-muted-foreground">
                        Fully licensed demolition contractors with comprehensive liability insurance to protect your property and our workers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Safety Certified</h3>
                      <p className="text-muted-foreground">
                        Our crews are trained in the latest safety protocols and use industry-leading safety equipment on every job site.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TreePine className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Environmental Responsibility</h3>
                      <p className="text-muted-foreground">
                        We follow eco-friendly disposal practices, recycling materials whenever possible to minimize environmental impact.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Hammer className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Professional Equipment</h3>
                      <p className="text-muted-foreground">
                        Modern, well-maintained equipment ensures efficient project completion while maintaining the highest safety standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for a free consultation and quote for your demolition project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90 text-secondary border-white">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10 text-white">
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
