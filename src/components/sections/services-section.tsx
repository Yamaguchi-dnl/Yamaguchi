import ServiceCard from '@/components/service-card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from '../animate-on-scroll';
import { serviceImages } from '@/lib/placeholder-images';

const services = [
  {
    title: "Identidade Visual & UI Design",
    description: "Criação de logotipos, paletas de cores e interfaces digitais que transmitem a essência da sua marca.",
    tags: ['Branding', 'Logotipo', 'UI/UX', 'Figma'],
    slug: 'visual-identity',
  },
  {
    title: "Estratégia Digital",
    description: "Planejamento e execução de estratégias de presença online para impulsionar o engajamento e resultados.",
    tags: ['Marketing', 'Posicionamento', 'Conteúdo'],
    slug: 'digital-strategy',
  },
   {
    title: "Social Media Design",
    description: "Criação de posts, stories e assets visuais estratégicos para redes sociais de alto impacto.",
    tags: ['Instagram', 'Conteúdo Visual', 'Engajamento'],
    slug: 'social-media',
  },
  {
    title: "Direção de Arte",
    description: "Coordenação estética e visual para campanhas e projetos de design de alto padrão.",
    tags: ['Conceito', 'Composição', 'Criatividade'],
    slug: 'art-direction',
  }
];

export default function ServicesSection() {
  const portfolioServices = serviceImages.slice(0, 4).map((image, index) => ({
    ...image,
    ...services[index % services.length]
  }));

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl uppercase">Serviços</h2>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="#">VER TODOS OS SERVIÇOS <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </AnimateOnScroll>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {portfolioServices.map((service) => {
            return (
              <div key={service.id}>
                <AnimateOnScroll>
                  <ServiceCard
                    imageUrl={service.imageUrl}
                    imageHint={service.imageHint}
                    title={service.title}
                    description={service.description}
                    tags={service.tags}
                    slug={service.slug}
                  />
                </AnimateOnScroll>
              </div>
            );
          })}
        </div>
         <div className="mt-12 text-center sm:hidden">
          <AnimateOnScroll>
            <Button asChild variant="link">
                <Link href="#">VER TODOS OS SERVIÇOS <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
