import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "March 2024 - Present",
      title: "Advanced Freestyle Wrestler",
      organization: "Tofigh Jahanbakht Wrestling Hall",
      coach: "Grandmaster Mohsen Kaveh",
      location: "Tehran",
      current: true,
      achievements: [
        "Advanced freestyle wrestling techniques training",
        "Specialized Strength & Conditioning programs",
        "Recovery techniques and fatigue management",
        "Professional nutritional planning",
        "Tactical wrestling and match strategy"
      ]
    },
    {
      period: "April 2021 - March 2024", 
      title: "Trainee Wrestler",
      organization: "DIHIM Wrestling Club",
      coach: "Coach Morteza Afzali", 
      location: "Tehran",
      current: false,
      achievements: [
        "Basic wrestling techniques and guard positions",
        "Fundamental moves: Yakhm, Doughm, Servogardan",
        "Initial strength training for wrestling",
        "Body-weight exercises and gymnastics foundation",
        "Competition preparation and match experience"
      ]
    }
  ];

  const education = {
    period: "September 2022 - August 2026",
    title: "Vocational High School Diploma",
    school: "Shahid Beheshti Vocational School",
    location: "Tehran",
    grade: "11th Grade",
    focus: "Physical Education",
    description: "Focused on physical training, sports science, and fitness development"
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Athletic History & Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional development journey from foundational training to advanced wrestling techniques
          </p>
        </div>

        {/* Athletic Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Wrestling Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`shadow-champion ${exp.current ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {exp.coach}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {exp.current && (
                        <Badge variant="default" className="gradient-champion text-white">
                          Current Position
                        </Badge>
                      )}
                      <Badge variant="outline">{exp.organization}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Education</h3>
          <Card className="shadow-hero max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl mb-2">{education.title}</CardTitle>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {education.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      {education.grade}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="gradient-medal text-accent-foreground">
                    Current Student
                  </Badge>
                  <Badge variant="outline">{education.school}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Focus: {education.focus}</h4>
                  <p className="text-muted-foreground">{education.description}</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">4.0</div>
                    <div className="text-sm text-muted-foreground">Academic Performance</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">2026</div>
                    <div className="text-sm text-muted-foreground">Expected Graduation</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">PE</div>
                    <div className="text-sm text-muted-foreground">Specialization</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;