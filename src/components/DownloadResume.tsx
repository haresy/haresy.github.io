import React from "react";
import { Download } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils"
import resumeFile from '@/assets/Younes_haresabadi_Aug2025.pdf'

export interface DownloadResumeProps extends Omit<ButtonProps, 'className'> {
  className?: string;
  label?: string;
  hideIcon?: boolean;
}

const DownloadResume: React.FC<DownloadResumeProps> = ({ className = 'w-full', hideIcon, variant = 'outline', size = 'sm', label = "Download Resume", ...rest }) => {
  return (
      <Button asChild variant={variant} size={size} className={cn("group", className)} {...rest}>
          <a href={resumeFile}>
              {!hideIcon && <Download className="mr-2 h-4 w-4 group-hover:animate-bounce"/>}
              {label}
          </a>
      </Button>
  );
};

export { DownloadResume };
