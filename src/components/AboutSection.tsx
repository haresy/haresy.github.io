import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Calendar, Heart, Globe } from "lucide-react";
import { Youtube, Linkedin } from "lucide-react";
import XSocial from "@/svgs/x_social.svg";
import InstagramSocial from "@/svgs/instagram_social.svg";

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
          <div className="space-y-6">
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

            <Card className="shadow-champion">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                <div className="space-y-3">
                  <a target='_blank' href="https://x.com/haresywrestler" className="flex items-center gap-3">
                    <img src={XSocial} alt="" className="h-4 w-5" />
                    <span>@HaresYWrestler</span>
                  </a>
                  <a target='_blank' href="https://www.youtube.com/@haresy.wrestler" className="flex items-center gap-3">
                    <Youtube className="h-5 w-5 text-red-600" />
                    <span>YT/HaresY.Wrestler</span>
                  </a>
                  <a target='_blank' href="https://www.linkedin.com/in/haresy" className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span>in/HaresY</span>
                  </a>
                  <a target='_blank' href="https://www.instagram.com/y.haresabadi_57" className="flex items-center gap-3">
                    <img src={InstagramSocial} alt='' className="h-5 w-5" />
                    <span>@Haresy</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

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
