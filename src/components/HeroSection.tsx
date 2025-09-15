import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-office-background.jpg";

const HeroSection = () => {
  const clientLogos = [
    "WARD",
    "VLCC",
    "flightsmojo",
    "Table Space",
    "TOMMY HILFIGER",
    "Godrej"
  ];

  return (
    <section 
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <p className="text-sm font-semibold tracking-wider mb-4 text-gray-300">
            TURNING SPACES INTO SUCCESS
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Your Turnkey Partner For<br />
            <span className="text-brand-red">Commercial Fit-Outs</span>
          </h1>
        </div>
      </div>

      {/* Client Logos Banner */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-brand-red py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8 flex-1">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="text-white font-semibold text-lg whitespace-nowrap">
                    {logo}
                  </div>
                ))}
              </div>
              <Button 
                variant="outline" 
                className="ml-8 bg-white text-brand-red border-white hover:bg-gray-100 font-semibold"
              >
                View All Clients
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;