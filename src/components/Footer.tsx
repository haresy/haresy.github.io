import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Heart, Mail, Phone, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="gradient-medal w-12 h-12 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Younes Haresabadi</h3>
                <Badge variant="outline">Freestyle Wrestling Champion</Badge>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Iranian freestyle wrestler seeking opportunities with professional wrestling clubs in England. 
              Dedicated to representing England in international competitions and achieving Olympic success.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-secondary" />
              <span>Proudly pursuing Olympic dreams for England</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About Me" },
                { href: "#skills", label: "Wrestling Skills" },
                { href: "#achievements", label: "Championships" },
                { href: "#media", label: "Videos & Photos" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">haresabadiyounes@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+989905867437</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">https://haresy.ir</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Tehran, Iran</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Younes Haresabadi. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Professional Freestyle Wrestler | Tehran, Iran
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Download Resume
              </Button>
              <Button 
                variant="champion" 
                size="sm"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;