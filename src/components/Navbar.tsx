import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import Button from "../components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Lumos Creatives
            </span>
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Contáctanos
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-4">
                <Mail className="mr-2 h-4 w-4" />
                Contáctanos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;