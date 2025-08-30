import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Calendar } from "lucide-react";
import medalsCollection from "@/assets/medals-collection.jpg";
import img2022TehranCityChampionship from "@/assets/2022_1st-Place_Tehran-City-Championship.jpg";
import img2022TehranLeagueDivision1 from "@/assets/2022_1st-Place_Tehran-League-Division-1.jpg";
import img2023TehranProvinceChampionship from "@/assets/2023_3rd-Place_Tehran-Province-Championship.jpg";
import img2023TehranCityChampionship from "@/assets/2023_1st-Place_Tehran-City-Championship.jpg";
import img2024NationalTournament from "@/assets/2024_3rd-Place_National-Tournament.jpg";

const AchievementsSection = () => {
  const achievements = [
    {
      year: "2022",
      title: "1st Place - Tehran City Championship",
      location: "Tehran",
      medal: "Gold",
      image: img2022TehranCityChampionship
    },
    {
      year: "2022",
      title: "1st Place - Tehran League Division 1",
      location: "Tehran",
      medal: "Gold",
      image: img2022TehranLeagueDivision1
    },
    {
      year: "2023",
      title: "3rd Place - Tehran Province Championship",
      location: "Tehran",
      medal: "Bronze",
      image: img2023TehranProvinceChampionship
    },
    {
      year: "2023",
      title: "1st Place - Tehran City Championship",
      location: "Tehran",
      medal: "Gold",
      image: img2023TehranCityChampionship
    },
    {
      year: "2024",
      title: "3rd Place - National Tournament",
      location: "Tehran",
      medal: "Bronze",
      image: img2024NationalTournament
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Championships & Awards</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven track record of excellence in freestyle wrestling competitions
            across Tehran and national level tournaments
          </p>
        </div>

        {/* Medal Collection Hero */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-hero">
            <div className="relative h-64 md:h-80">
              <img
                src={medalsCollection}
                alt="Medal Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-3xl font-bold mb-2">5 Major Championships</h3>
                  <p className="text-xl">2022 - 2024</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-champion hover:shadow-medal transition-all duration-300">
              <div className="grid md:grid-cols-4 gap-6 p-6">

                {/* Certificate Image */}
                <div className="md:col-span-1">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={achievement.image}
                      alt={`${achievement.title} Certificate`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant={achievement.medal === "Gold" ? "default" : "secondary"}
                        className={`${achievement.medal === "Gold" ? "gradient-medal" : "bg-orange-500"} text-white`}
                      >
                        {achievement.medal}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Achievement Details */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="gradient-champion w-12 h-12 rounded-full flex items-center justify-center">
                      {achievement.medal === "Gold" ? (
                        <Trophy className="h-6 w-6 text-white" />
                      ) : (
                        <Medal className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {achievement.year}
                      </Badge>
                      <h3 className="text-xl font-bold text-primary">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-accent">{achievement.medal} Medal Winner</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center shadow-champion">
            <CardContent className="p-8">
              <div className="gradient-medal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">3</h3>
              <p className="text-muted-foreground">Gold Medals</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-champion">
            <CardContent className="p-8">
              <div className="gradient-medal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Medal className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">2</h3>
              <p className="text-muted-foreground">Bronze Medals</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-champion">
            <CardContent className="p-8">
              <div className="gradient-medal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">100%</h3>
              <p className="text-muted-foreground">Podium Finish Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
