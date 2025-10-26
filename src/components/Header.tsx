import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import enlureLogo from "@/assets/enlure-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={enlureLogo} alt="Enlure" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`${
                isScrolled ? "text-primary" : "text-white"
              } hover:text-primary transition-colors duration-300 font-medium`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`${
                isScrolled ? "text-primary" : "text-white"
              } hover:text-primary transition-colors duration-300 font-medium`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("consultoria")}
              className={`${
                isScrolled ? "text-primary" : "text-white"
              } hover:text-primary transition-colors duration-300 font-medium`}
            >
              Consultoria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`${
                isScrolled ? "text-primary" : "text-white"
              } hover:text-primary transition-colors duration-300 font-medium`}
            >
              Contato
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold transition-all duration-300"
            >
              Solicitar contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-primary" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left px-4"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left px-4"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("consultoria")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left px-4"
              >
                Consultoria
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left px-4"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold"
                >
                  Solicitar contato
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
