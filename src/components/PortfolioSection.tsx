import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  return (
    <section className="py-16 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take a Glimpse of <span className="text-brand-red">What We Deliver</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Portfolio Item 1 */}
          <div className="bg-dark-card rounded-lg overflow-hidden">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 h-48 flex items-center justify-center">
              <div className="text-4xl">🏢</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-2">Modern Office Space</h3>
              <p className="text-gray-300 text-sm">Contemporary workspace design for tech company</p>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-dark-card rounded-lg overflow-hidden">
            <div className="bg-gradient-to-br from-orange-400 to-red-600 h-48 flex items-center justify-center">
              <div className="text-4xl">🏪</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-2">Retail Showroom</h3>
              <p className="text-gray-300 text-sm">Luxury retail space with premium finishes</p>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-dark-card rounded-lg overflow-hidden">
            <div className="bg-gradient-to-br from-green-400 to-teal-600 h-48 flex items-center justify-center">
              <div className="text-4xl">🏬</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-2">Corporate Headquarters</h3>
              <p className="text-gray-300 text-sm">Executive office design with meeting spaces</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-300 mb-6">
            <span className="text-brand-red font-semibold">Unleash Your Brand's Potential</span> & Transform<br />
            Your Commercial Space
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8">
            View All Projects
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dark-bg">
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;