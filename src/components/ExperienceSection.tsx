import { Button } from "@/components/ui/button";

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Experience Excellence in<br />
            <span className="text-brand-red">Commercial Fitouts</span>
          </h2>
        </div>

        {/* 60 Days Journey */}
        <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-lg p-8 md:p-12 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                60 Days Journey<br />
                From Design to Final Handover
              </h3>
              <p className="text-white/90 mb-6">
                Our streamlined process ensures your commercial space is ready in just 60 days, 
                without compromising on quality or attention to detail.
              </p>
              <Button variant="outline" className="bg-white text-brand-red hover:bg-gray-100 border-white">
                EXPLORE NOW
              </Button>
            </div>
            <div className="bg-white/10 rounded-lg p-6 h-48 flex items-center justify-center">
              <div className="text-6xl">📋</div>
            </div>
          </div>
        </div>

        {/* Office Fitouts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Office Fitouts</h3>
            <p className="text-muted-foreground mb-4">
              Transform your workspace into a productive and inspiring environment that reflects your company culture and enhances employee satisfaction.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Space Planning & Design</li>
              <li>• Furniture & Fixtures</li>
              <li>• Electrical & IT Setup</li>
              <li>• Project Management</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Turnkey Retail Fitouts</h3>
            <p className="text-muted-foreground mb-4">
              Create engaging retail spaces that attract customers and drive sales with our comprehensive retail fitout solutions.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Visual Merchandising</li>
              <li>• Custom Display Solutions</li>
              <li>• Lighting Design</li>
              <li>• Brand Integration</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Retail Identity Design</h3>
            <p className="text-muted-foreground mb-4">
              Develop a strong visual identity for your retail space that communicates your brand values and creates memorable customer experiences.
            </p>
            <Button className="bg-brand-red hover:bg-brand-red-hover text-white">
              Get Started
            </Button>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center">
            <div className="text-4xl">🏢</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;