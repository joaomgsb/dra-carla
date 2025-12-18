import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Benefícios', id: 'beneficios' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Depoimentos', id: 'depoimentos' },
    { name: 'Contato', id: 'formulario' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <div 
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            Dra. Carla <span className="text-green-600">Kassiane</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-green-600' : 'text-gray-800 hover:text-green-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className={`inline-flex transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Backdrop (efeito) */}
      <button
        type="button"
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-30 bg-black/30 transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <div className="flex flex-col py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-50 last:border-0 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

