import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Image, FileText, Youtube, Camera } from "lucide-react";
import { DownloadResume } from "@/components/DownloadResume.tsx";

const MediaSection = () => {
  // Placeholder data for YouTube videos
  const videos = [
    {
      title: "Championship Match Highlights 2024",
      description: "Key moments from National Tournament bronze medal match",
      thumbnail: "https://via.placeholder.com/400x225/3b82f6/ffffff?text=Wrestling+Highlights",
      embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    },
    {
      title: "Training Session with Grandmaster Mohsen Kaveh",
      description: "Advanced techniques training at Tofigh Jahanbakht Wrestling Hall",
      thumbnail: "https://via.placeholder.com/400x225/ef4444/ffffff?text=Training+Session",
      embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    },
    {
      title: "Tehran City Championship 2023 - Final Match",
      description: "Gold medal winning performance in freestyle wrestling",
      thumbnail: "https://via.placeholder.com/400x225/f59e0b/ffffff?text=Championship+Final",
      embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    }
  ];

  const photos = [
    {
      title: "Medal Ceremony 2024",
      description: "Bronze medal ceremony at National Tournament",
      thumbnail: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Medal+Ceremony"
    },
    {
      title: "Training at DIHIM Club",
      description: "Early training days with Coach Morteza Afzali",
      thumbnail: "https://via.placeholder.com/300x200/06b6d4/ffffff?text=Training+Club"
    },
    {
      title: "Team Iran Colors",
      description: "Representing Iran in national competitions",
      thumbnail: "https://via.placeholder.com/300x200/10b981/ffffff?text=Team+Iran"
    },
    {
      title: "Championship Trophy Collection",
      description: "Awards from Tehran city and provincial championships",
      thumbnail: "https://via.placeholder.com/300x200/f97316/ffffff?text=Trophy+Collection"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Wrestling Media & Downloads</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch my wrestling highlights, download my complete resume, and view championship photos on my website
          </p>
        </div>

        {/* Resume Download Section */}
        <div className="mb-16">
          <Card className="max-w-2xl mx-auto shadow-hero">
            <CardHeader className="text-center">
              <div className="gradient-medal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle>Complete Wrestling Resume</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Download my comprehensive wrestling resume including all achievements,
                training history, and professional references.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DownloadResume label="Download PDF Resume" variant="champion" size="lg" />
                <Button variant="outline" size="lg">
                  <FileText className="mr-2 h-5 w-5" />
                  View Online Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Highlights Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Wrestling Highlights</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="shadow-champion hover:shadow-medal transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button variant="champion" size="lg">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Now
                    </Button>
                  </div>
                  <Badge className="absolute top-2 left-2 bg-red-600 text-white">
                    <Youtube className="mr-1 h-4 w-4" />
                    YouTube
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Wrestling Photos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {photos.map((photo, index) => (
              <Card key={index} className="shadow-champion hover:shadow-medal transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={photo.thumbnail}
                    alt={photo.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
                      <Camera className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <h4 className="font-semibold text-sm mb-1">{photo.title}</h4>
                  <p className="text-xs text-muted-foreground">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              <Image className="mr-2 h-5 w-5" />
              View Full Photo Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
