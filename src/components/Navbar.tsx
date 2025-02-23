
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-primary">
          NeighBorrow
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#browse" className="text-gray-600 hover:text-primary transition-colors">
            Browse
          </a>
          <a href="#share" className="text-gray-600 hover:text-primary transition-colors">
            Share
          </a>
          <Link to="/events" className="text-gray-600 hover:text-primary transition-colors">
            Events
          </Link>
          <Link to="/signin">
            <Button variant="default">Sign In</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px]">
            <div className="flex flex-col space-y-4 mt-8">
              <a href="#browse" className="text-lg text-gray-600 hover:text-primary transition-colors">
                Browse
              </a>
              <a href="#share" className="text-lg text-gray-600 hover:text-primary transition-colors">
                Share
              </a>
              <Link to="/events" className="text-lg text-gray-600 hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/signin">
                <Button className="w-full">Sign In</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
