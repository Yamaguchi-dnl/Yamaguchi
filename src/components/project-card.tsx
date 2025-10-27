import Image from 'next/image';
import type { FC } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  imageHint: string;
  title: string;
  category: string;
  slug: string;
  url: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, imageHint, title, slug, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden break-inside-avoid mb-8">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={imageHint}
          width={600}
          height={400}
          className="object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <Button variant="secondary" className="w-full justify-between bg-white/30 backdrop-blur-sm text-white hover:bg-white/40">
            VER SITE
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
    </a>
  );
};

export default ProjectCard;
