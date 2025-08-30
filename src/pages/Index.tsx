import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>
        
        {/* Experience Section */}
        <section id="experience">
          <ExperienceSection />
        </section>
        
        {/* Achievements Section */}
        <section id="achievements">
          <AchievementsSection />
        </section>
        
        {/* Media Section */}
        <section id="media">
          <MediaSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
