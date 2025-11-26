import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectShowcase } from "@/components/project-showcase";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Kitchen Demolition",
      location: "Mississauga, ON",
      category: "Residential Interior Demolition",
      duration: "2 Days",
      squareFootage: "400 sq ft",
      description: "Complete kitchen demolition including cabinets, countertops, flooring, and drywall removal for a full renovation project. Careful preservation of plumbing and electrical infrastructure.",
      tags: ["Residential", "Interior", "Kitchen Renovation"]
    },
    {
      title: "Office Building Teardown",
      location: "Toronto, ON",
      category: "Commercial Demolition",
      duration: "3 Weeks",
      squareFootage: "12,000 sq ft",
      description: "Full demolition of a 3-story office building including structural steel removal, concrete breaking, and complete site clearing for new development.",
      tags: ["Commercial", "Multi-Story", "Urban Project"]
    },
    {
      title: "Residential Addition Prep",
      location: "Hamilton, ON",
      category: "Excavation & Site Preparation",
      duration: "1 Week",
      squareFootage: "800 sq ft",
      description: "Foundation excavation and site preparation for a two-story home addition. Included grading, trenching for utilities, and backfilling.",
      tags: ["Residential", "Excavation", "Foundation Work"]
    },
    {
      title: "Commercial Site Clearing",
      location: "Markham, ON",
      category: "Land Clearing & Excavation",
      duration: "2 Weeks",
      squareFootage: "3 Acres",
      description: "Complete land clearing for commercial development including vegetation removal, tree clearing, stump grinding, and land grading.",
      tags: ["Commercial", "Land Clearing", "Development"]
    },
    {
      title: "Garage & Shed Removal",
      location: "Oakville, ON",
      category: "Residential Exterior Demolition",
      duration: "3 Days",
      squareFootage: "600 sq ft",
      description: "Demolition and removal of detached garage and storage shed including concrete foundation removal and complete site cleanup.",
      tags: ["Residential", "Exterior", "Concrete Removal"]
    },
    {
      title: "Warehouse Demolition",
      location: "Barrie, ON",
      category: "Industrial Demolition",
      duration: "4 Weeks",
      squareFootage: "25,000 sq ft",
      description: "Industrial warehouse demolition with structural steel dismantling, concrete floor removal, and hazardous material abatement.",
      tags: ["Industrial", "Large Scale", "Steel Structures"]
    },
    {
      title: "Basement Excavation",
      location: "North Bay, ON",
      category: "Residential Excavation",
      duration: "5 Days",
      squareFootage: "1,200 sq ft",
      description: "Complete basement excavation for new home construction including rock removal, foundation prep, and grading work.",
      tags: ["Residential", "Excavation", "New Construction"]
    },
    {
      title: "Retail Strip Mall Demo",
      location: "London, ON",
      category: "Commercial Demolition",
      duration: "6 Weeks",
      squareFootage: "18,000 sq ft",
      description: "Phased demolition of retail strip mall with selective demolition to preserve adjacent structures and minimize business disruption.",
      tags: ["Commercial", "Retail", "Phased Demolition"]
    },
    {
      title: "Cottage Teardown",
      location: "Muskoka, ON",
      category: "Residential Demolition",
      duration: "1 Week",
      squareFootage: "1,800 sq ft",
      description: "Complete cottage demolition in sensitive lakefront area with environmental protection measures and debris removal via water access.",
      tags: ["Residential", "Environmental Care", "Waterfront"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Homeowner",
      location: "Mississauga",
      quote: "The team was incredibly professional during our kitchen demo. They protected the rest of our home and cleaned up thoroughly every day. Couldn't ask for better service!",
      projectType: "Kitchen Demolition"
    },
    {
      name: "Robert Kim",
      role: "Commercial Developer",
      location: "Toronto",
      quote: "Premium Demolition handled our complex office building teardown with precision. Their project management and safety protocols were exemplary. Highly recommend for commercial projects.",
      projectType: "Office Building Teardown"
    },
    {
      name: "Amanda Foster",
      role: "General Contractor",
      location: "Hamilton",
      quote: "We work with Premium Demolition on all our excavation projects. Their crews are reliable, efficient, and always deliver quality results on schedule.",
      projectType: "Site Preparation"
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
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Proven Results</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Our Project Portfolio
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Explore our completed projects showcasing professional demolition and excavation work across Ontario. From residential renovations to large-scale commercial developments.
              </p>

              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Completed Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quality demolition and excavation services delivered across Ontario communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectShowcase key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              <div>
                <div className="text-5xl font-black text-secondary mb-2">500+</div>
                <div className="text-lg text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-black text-secondary mb-2">15+</div>
                <div className="text-lg text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-black text-secondary mb-2">100%</div>
                <div className="text-lg text-white/80">Safety Record</div>
              </div>
              <div>
                <div className="text-5xl font-black text-secondary mb-2">9</div>
                <div className="text-lg text-white/80">Service Areas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from satisfied clients across Ontario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Types We Handle</h2>
                <p className="text-lg text-muted-foreground">
                  Experienced in every type of demolition and excavation project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Residential Projects</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Kitchen and bathroom demolition</li>
                    <li>• Garage and shed removal</li>
                    <li>• Home addition preparation</li>
                    <li>• Basement excavation</li>
                    <li>• Complete house teardowns</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Commercial Projects</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Office building demolition</li>
                    <li>• Retail space clearing</li>
                    <li>• Warehouse teardowns</li>
                    <li>• Strip mall demolition</li>
                    <li>• Industrial facilities</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Excavation Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Foundation excavation</li>
                    <li>• Site grading and leveling</li>
                    <li>• Trenching for utilities</li>
                    <li>• Land clearing</li>
                    <li>• Drainage solutions</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Specialized Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Asbestos removal (certified)</li>
                    <li>• Concrete removal and disposal</li>
                    <li>• Environmental protection</li>
                    <li>• Hazardous material handling</li>
                    <li>• Selective demolition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Project Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of satisfied clients across Ontario. Get your free quote now.
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
