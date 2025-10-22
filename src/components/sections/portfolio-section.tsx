import { projectImages } from '@/lib/placeholder-images';
import ProjectCard from '@/components/project-card';
import { Button } from '../ui/button';
import Link from 'next/link';

const projects = [
  {
    title: "Projeto Alpha",
    category: "E-commerce",
    slug: 'projeto-alpha',
  },
  {
    title: "Projeto Beta",
    category: "SaaS",
    slug: 'projeto-beta',
  },
  {
    title: "Projeto Gamma",
    category: "Blog",
    slug: 'projeto-gamma',
  },
   {
    title: "Projeto Delta",
    category: "Shopify",
    slug: 'projeto-delta',
  },
  {
    title: "Projeto Epsilon",
    category: "Branding",
    slug: 'projeto-epsilon',
  },
  {
    title: "Projeto Zeta",
    category: "Mobile App",
    slug: 'projeto-zeta',
  }
];

export default function PortfolioSection() {
  const portfolioProjects = projectImages.slice(0, 6).map((image, index) => ({
    ...image,
    ...projects[index % projects.length]
  }));

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl uppercase text-black">Portfólio</h2>
          <Button asChild variant="link" className="hidden sm:inline-flex text-black">
            <Link href="#">VER TODOS OS PROJETOS</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              imageHint={project.imageHint}
              title={project.title}
              category={project.category}
              slug={project.slug}
            />
          ))}
        </div>
         <div className="mt-12 text-center sm:hidden">
            <Button asChild variant="link" className="text-black">
                <Link href="#">VER TODOS OS PROJETOS</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
