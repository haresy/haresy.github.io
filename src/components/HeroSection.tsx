import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Play, Medal, Target } from "lucide-react";
import wrestlerHero from "@/assets/wrestler-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with wrestling theme */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-accent/30 animate-pulse">
        <Medal size={40} />
      </div>
      <div className="absolute bottom-20 right-10 text-accent/30 animate-pulse delay-1000">
        <Target size={35} />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 fade-in-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-semibold">
                🏆 Champion Freestyle Wrestler
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Younes
                <span className="block gradient-champion bg-clip-text text-transparent">
                  Haresabadi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                Iranian Freestyle Wrestling Champion seeking opportunities with professional wrestling clubs in England
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="champion" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Play className="mr-2 h-5 w-5" />
                Watch Highlights
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-white/80 text-sm">Championships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">18</div>
                <div className="text-white/80 text-sm">Years Old</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center fade-in-up delay-300">
            <div className="relative">
              <div className="absolute -inset-4 gradient-medal rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img
                src={wrestlerHero}
                alt="Younes Haresabadi - Freestyle Wrestler"
                className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-hero border-4 border-white/20"
              />
              {/* Medal overlay */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="gradient-medal w-16 h-16 rounded-full flex items-center justify-center shadow-medal">
                  <Medal className="text-accent-foreground" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;