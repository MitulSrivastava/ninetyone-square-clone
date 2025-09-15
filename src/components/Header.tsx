import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-brand-red text-white px-3 py-2 rounded font-bold text-xl">
              91
            </div>
            <span className="ml-2 text-lg font-semibold text-foreground">
              square<br />feet
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="text-foreground hover:text-brand-red font-medium transition-colors">
              PORTFOLIO
            </a>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-brand-red font-medium transition-colors">
                COMPANY
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-brand-red font-medium transition-colors">
                SERVICES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#resources" className="text-foreground hover:text-brand-red font-medium transition-colors">
              RESOURCES
            </a>
            <a href="#contact" className="text-foreground hover:text-brand-red font-medium transition-colors">
              CONTACT
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" className="bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6">
            Talk To Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;