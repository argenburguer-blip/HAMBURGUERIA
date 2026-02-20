import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cobalt/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-xl lg:text-2xl text-white tracking-tight">
              ARGEN<span className="text-brazil-yellow">BURGUER</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('historia')}
              className="text-white/90 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors"
            >
              História
            </button>
            <button
              onClick={() => scrollToSection('cardapio')}
              className="text-white/90 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white/90 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors"
            >
              Contato
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('onde-pedir')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-6 py-2 text-sm uppercase tracking-wider transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Pedir Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cobalt/98 backdrop-blur-lg transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('historia')}
            className="text-white font-heading font-bold text-2xl uppercase tracking-wider"
          >
            História
          </button>
          <button
            onClick={() => scrollToSection('cardapio')}
            className="text-white font-heading font-bold text-2xl uppercase tracking-wider"
          >
            Cardápio
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-white font-heading font-bold text-2xl uppercase tracking-wider"
          >
            Contato
          </button>
          <Button
            onClick={() => scrollToSection('onde-pedir')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 py-3 text-lg uppercase tracking-wider mt-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Pedir Agora
          </Button>
        </div>
      </div>
    </>
  );
}
