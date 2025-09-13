import React, {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Camera} from "lucide-react";
import {Modal} from "@/components/Modal";
import {cn} from "@/lib/utils";

export interface MediaGalleryViewProps {
  photo: {
      title: string;
      description: string;
      thumbnail: string;
  };
}

const MediaGalleryView: React.FC<MediaGalleryViewProps> = ({ photo }) => {
    const [open, set] = useState(false);

  return (
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white"
              onClick={() => set(true)}
          >
              <Camera className="mr-2 h-4 w-4" />
              View
          </Button>
          <Modal title={photo.title} open={open} onOpenChange={set}>
              <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className={cn("w-full h-125 object-cover object-top")}
              />
          </Modal>
      </div>
  );
};

export { MediaGalleryView };
