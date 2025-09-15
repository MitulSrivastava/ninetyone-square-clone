import { Button } from "@/components/ui/button";

const WhatMakesUsDifferent = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 h-80">
              <div className="text-center h-full flex items-center justify-center">
                <div className="text-6xl">👨‍💼</div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded text-sm font-semibold">
              DESIGN
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              What makes us different?
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do. We focus on creating spaces that are not just aesthetically pleasing but also functional and purposeful.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our expertise in commercial interior design, coupled with our deep understanding of business needs, enables us to deliver projects that truly reflect your brand identity and enhance productivity.
            </p>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-red">2019</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-red">100+ Clients</div>
                <div className="text-sm text-muted-foreground">Served</div>
              </div>
            </div>

            <Button className="mt-8 bg-brand-red hover:bg-brand-red-hover text-white px-8">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;