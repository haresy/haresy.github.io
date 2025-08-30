import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Trophy, Mail, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Achievements" },
    { href: "#media", label: "Media" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-sm shadow-champion' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="gradient-medal w-10 h-10 rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Younes Haresabadi</h1>
              <Badge variant="outline" className="text-xs">Freestyle Wrestler</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <Button variant="champion" size="sm" onClick={() => scrollToSection('#contact')}>
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button variant="champion" size="sm" className="w-full" onClick={() => scrollToSection('#contact')}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;