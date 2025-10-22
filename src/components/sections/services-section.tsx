import { projectImages } from '@/lib/placeholder-images';
import ServiceCard from '@/components/service-card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Web Design",
    description: "Criação de interfaces digitais modernas, intuitivas e responsivas, focadas na experiência do usuário.",
    tags: ['UI/UX', 'Figma', 'React'],
    slug: 'web-design',
  },
  {
    title: "Desenvolvimento Web",
    description: "Desenvolvimento de sites e aplicações web de alta performance com as tecnologias mais recentes.",
    tags: ['Next.js', 'TypeScript', 'Node.js'],
    slug: 'web-development',
  },
  {
    title: "Estrategista Digital",
    description: "Planejamento e execução de estratégias digitais para impulsionar o crescimento e o engajamento da marca.",
    tags: ['SEO', 'Marketing de Conteúdo', 'Analytics'],
    slug: 'digital-strategy',
  },
   {
    title: "E-commerce",
    description: "Soluções completas para lojas virtuais, desde o layout até a integração com sistemas de pagamento.",
    tags: ['Shopify', 'WooCommerce', 'Stripe'],
    slug: 'e-commerce',
  }
];

export default function ServicesSection() {
  const portfolioServices = projectImages.slice(0, 4).map((image, index) => ({
    ...image,
    ...services[index % services.length]
  }));

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl uppercase">Serviços</h2>
          <Button asChild variant="link" className="hidden sm:inline-flex">
            <Link href="#">VER TODOS OS SERVIÇOS <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {portfolioServices.map((service) => (
            <ServiceCard
              key={service.id}
              imageUrl={service.imageUrl}
              imageHint={service.imageHint}
              title={service.title}
              description={service.description}
              tags={service.tags}
              slug={service.slug}
            />
          ))}
        </div>
         <div className="mt-12 text-center sm:hidden">
            <Button asChild variant="link">
                <Link href="#">VER TODOS OS SERVIÇOS <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
