import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, User, Target, Flag } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact & References</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join your wrestling team and represent England in international competitions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <Card className="shadow-champion">
            <CardHeader>
              <div className="gradient-medal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-center">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">+989905867437</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">haresabadiyounes@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-sm text-muted-foreground">https://haresy.ir</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">Tehran, Iran</p>
                  <Badge variant="outline" className="mt-1">Willing to Relocate to UK</Badge>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="champion" className="w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Professional Reference */}
          <Card className="shadow-champion">
            <CardHeader>
              <div className="gradient-medal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-center">Professional Reference</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary">Grandmaster Mohsen Kaveh</h3>
                <p className="text-muted-foreground">Senior Wrestling Coach</p>
                <Badge variant="secondary" className="mt-2">Tofigh Jahanbakht Wrestling Hall</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+989121084651</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Tehran, Iran</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground text-center italic">
                  "Younes is one of the most dedicated and talented young wrestlers I've coached. 
                  His technical skills and mental strength make him ready for international competition."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Wrestling Goals */}
          <Card className="shadow-hero">
            <CardHeader>
              <div className="gradient-champion w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-center">Career Goals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Flag className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Represent England</p>
                    <p className="text-sm text-muted-foreground">
                      Join England's national wrestling team and compete internationally
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Olympic Champion</p>
                    <p className="text-sm text-muted-foreground">
                      Win Olympic Gold Medal in freestyle wrestling
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Professional Development</p>
                    <p className="text-sm text-muted-foreground">
                      Train with world-class coaches and athletes in England
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-center">
                <Badge variant="default" className="gradient-hero text-white px-4 py-2">
                  Ready for New Challenges
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto shadow-hero">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Join Your Team</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm seeking opportunities with professional wrestling clubs in England. 
                With my proven championship record and dedication to excellence, 
                I'm ready to represent England and achieve Olympic success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="champion" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact for Tryouts
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;