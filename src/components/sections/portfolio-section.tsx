import { projectImages } from '@/lib/placeholder-images';
import ProjectCard from '@/components/project-card';

const projects = [
  {
    title: "Plataforma de E-commerce",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
  },
  {
    title: "App de Gestão de Tarefas",
    tags: ['React', 'Firebase', 'Material UI'],
  },
  {
    title: "Blog Pessoal",
    tags: ['Gatsby', 'GraphQL', 'Contentful'],
  }
];

export default function PortfolioSection() {
  const portfolioProjects = projectImages.map((image, index) => ({
    ...image,
    ...projects[index % projects.length] // Cycle through project details
  }));

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meu Portfólio</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed tracking-tight">
            Confira alguns dos projetos em que trabalhei recentemente.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}
