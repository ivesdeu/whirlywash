import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

// Logo: stored in public/images/Logo.png, loaded via URL; ?v=2 bypasses cache after logo update
const LOGO_URL = '/images/Logo.png?v=2';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={LOGO_URL} alt="Whirly Wash" className="h-24 w-auto" width={280} height={96} decoding="async" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#1F3C88] font-medium py-2 px-3 rounded-md hover:bg-[#1F3C88]/10 hover:underline underline-offset-4 decoration-2 transition-colors transition-shadow"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose')}
              className="text-gray-700 hover:text-[#1F3C88] font-medium py-2 px-3 rounded-md hover:bg-[#1F3C88]/10 hover:underline underline-offset-4 decoration-2 transition-colors transition-shadow"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-[#1F3C88] font-medium py-2 px-3 rounded-md hover:bg-[#1F3C88]/10 hover:underline underline-offset-4 decoration-2 transition-colors transition-shadow"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('service-area')}
              className="text-gray-700 hover:text-[#1F3C88] font-medium py-2 px-3 rounded-md hover:bg-[#1F3C88]/10 hover:underline underline-offset-4 decoration-2 transition-colors transition-shadow"
            >
              Service Area
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18474694068" className="flex items-center gap-2 text-[#1F3C88]">
              <Phone className="w-5 h-5" />
              <span>(847) 469-4068</span>
            </a>
            <Button 
              onClick={() => scrollToSection('estimate')}
              className="bg-[#1F3C88] hover:bg-[#152a5e] text-white rounded-full px-6"
            >Get&nbsp;&nbsp;Estimate</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1F3C88]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1F3C88]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-[#1F3C88] font-medium py-3 px-3 rounded-md hover:bg-[#1F3C88]/10 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-choose')}
                className="text-left text-gray-700 hover:text-[#1F3C88] font-medium py-3 px-3 rounded-md hover:bg-[#1F3C88]/10 transition-colors"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-[#1F3C88] font-medium py-3 px-3 rounded-md hover:bg-[#1F3C88]/10 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('service-area')}
                className="text-left text-gray-700 hover:text-[#1F3C88] font-medium py-3 px-3 rounded-md hover:bg-[#1F3C88]/10 transition-colors"
              >
                Service Area
              </button>
              <a href="tel:+18474694068" className="flex items-center gap-2 text-[#1F3C88]">
                <Phone className="w-5 h-5" />
                <span>(847) 469-4068</span>
              </a>
              <Button 
                onClick={() => scrollToSection('estimate')}
                className="bg-[#1F3C88] hover:bg-[#152a5e] text-white rounded-full w-full"
              >
                Get Free Estimate
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}