import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Brain, Zap, Shield } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Target className="h-6 w-6" />,
      skills: [
        "Single Leg Takedown",
        "Double Leg Takedown", 
        "Fireman's Carry",
        "Arm Drag",
        "Granby Roll",
        "Bridge"
      ]
    },
    {
      title: "Tactical Skills", 
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "Wrestling Psychology",
        "Mental Strategy",
        "Match Tactics",
        "Counter-Attack Timing",
        "Opponent Analysis"
      ]
    },
    {
      title: "Physical Skills",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        "Explosive Speed",
        "Wrestling Endurance", 
        "Strength Conditioning",
        "Flexibility Training",
        "Power Development"
      ]
    },
    {
      title: "Defensive Skills",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        "Guard Techniques",
        "Sprawl Defense",
        "Wrestling Recovery",
        "Headlock Defense",
        "Escape Techniques"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Wrestling Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set developed through 4+ years of intensive training 
            and competition experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-champion hover:shadow-medal transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="gradient-medal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="w-full justify-center py-2 hover:bg-accent/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-hero">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Training Philosophy</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Technical Mastery</h4>
                  <p className="text-sm text-muted-foreground">
                    Focus on perfecting fundamental and advanced wrestling techniques through 
                    repetitive drills and live practice sessions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Mental Preparation</h4>
                  <p className="text-sm text-muted-foreground">
                    Developing tactical awareness and psychological resilience for 
                    high-pressure competition environments.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Physical Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive strength and conditioning programs specifically designed 
                    for freestyle wrestling performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;