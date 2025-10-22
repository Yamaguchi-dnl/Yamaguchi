import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { FC } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  imageHint: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, imageHint, title, description, tags }) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-0">
        <Image
          src={imageUrl}
          alt={description}
          data-ai-hint={imageHint}
          width={600}
          height={400}
          className="object-cover w-full aspect-video"
        />
      </CardContent>
      <div className="flex flex-col flex-1 p-6">
        <CardHeader className="p-0 mb-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="pt-2">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="p-0 mt-auto flex justify-between items-end">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
           <Button asChild variant="ghost" size="icon">
              <Link href="#">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View Project</span>
              </Link>
            </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
