import Image from 'next/image';
import type { FC } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface ServiceCardProps {
  imageUrl: string;
  imageHint: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ imageUrl, imageHint, title, description, tags, slug }) => {
  return (
    <Card className="overflow-hidden">
       <Link href={`/services/${slug}`} className="group block overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={imageHint}
          width={600}
          height={400}
          className="object-cover w-full aspect-video transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </Link>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
