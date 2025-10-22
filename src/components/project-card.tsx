import Image from 'next/image';
import type { FC } from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  imageUrl: string;
  imageHint: string;
  title: string;
  category: string;
  slug: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, imageHint, title, category, slug }) => {
  return (
    <Link href={`/portfolio/${slug}`} className="group relative block overflow-hidden break-inside-avoid mb-8">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={imageHint}
          width={600}
          height={400}
          className="object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-white/70">{category}</p>
        </div>
    </Link>
  );
};

export default ProjectCard;
