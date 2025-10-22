import { projectImages } from '@/lib/placeholder-images';
import ProjectCard from '@/components/project-card';
import { Button } from '../ui/button';
import Link from 'next/link';

const projects = [
  {
    title: "Projeto Alpha",
    description: "Uma plataforma de e-commerce inovadora com design moderno e experiência de usuário perfeita.",
    tags: ['E-commerce', 'Next.js', 'Stripe'],
  },
  {
    title: "Projeto Beta",
    description: "Uma aplicação colaborativa de gestão de tarefas para aumentar a produtividade da equipe.",
    tags: ['SaaS', 'TypeScript', 'Firebase'],
  },
  {
    title: "Projeto Gamma",
    description: "Uma plataforma de blog e conteúdo pessoal construída com um CMS headless para performance rápida.",
    tags: ['Blog', 'React', 'GraphQL'],
  },
   {
    title: "Projeto Delta",
    description: "Soluções completas para lojas virtuais, desde o layout até a integração com sistemas de pagamento.",
    tags: ['Shopify', 'Liquid', 'CI/CD'],
  }
];

export default function PortfolioSection() {
  const portfolioProjects = projectImages.slice(0, 4).map((image, index) => ({
    ...image,
    ...projects[index % projects.length]
  }));

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl uppercase">Portfólio</h2>
          <Button asChild variant="link" className="hidden sm:inline-flex">
            <Link href="#">VER TODOS OS PROJETOS</Link>
          </Button>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              imageHint={project.imageHint}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
         <div className="mt-12 text-center sm:hidden">
            <Button asChild variant="link">
                <Link href="#">VER TODOS OS PROJETOS</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
