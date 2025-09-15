import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-brand-red py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to get started with your next project?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's transform your space into something extraordinary. Get in touch with our experts today.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100 border-white font-semibold px-8"
          >
            Talk To Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;