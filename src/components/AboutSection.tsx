import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Calendar, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An 18-year-old freestyle wrestler with 4+ years of training experience, 
            passionate about representing England in international competitions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <Card className="shadow-champion">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Wrestling Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Currently training under Grandmaster Mohsen Kaveh, I've dedicated myself to mastering 
                  advanced wrestling techniques, strength conditioning, and tactical decision-making. 
                  My journey began at DIHIM Wrestling Club where I learned fundamental techniques.
                </p>
                <p>
                  I'm passionate about representing England and pursuing my Olympic dreams. My goal is 
                  to join England's national team and win Olympic Gold in freestyle wrestling, bringing 
                  pride to my fans and adopted country.
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <Heart className="h-5 w-5" />
                  <span className="font-semibold">Dream: Olympic Gold for England</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Tehran, Iran</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Born: April 18, 2007 (18 years old)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+989905867437</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>haresabadiyounes@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>https://haresy.ir</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Persian (Native)</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-accent"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>English (Intermediate)</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i <= 2 ? 'bg-accent' : 'bg-muted'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Gaming</Badge>
                  <Badge variant="outline">Mountain Hiking</Badge>
                  <Badge variant="outline">Wrestling Training</Badge>
                  <Badge variant="outline">Fitness</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;