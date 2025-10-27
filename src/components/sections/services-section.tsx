import ServiceCard from '@/components/service-card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from '../animate-on-scroll';
import { serviceImages } from '@/lib/placeholder-images';

const services = [
  {
    title: "Web Design & Desenvolvimento",
    description: "Criação de interfaces digitais e desenvolvimento de aplicações web de alta performance com IA.",
    tags: ['UI/UX', 'Figma', 'Next.js', 'React'],
    slug: 'web-design-development',
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
  },
  {
    title: "Social Media",
    description: "Gerenciamento de redes sociais, criação de conteúdo e campanhas para aumentar o alcance e engajamento.",
    tags: ['Instagram', 'Facebook', 'Canva'],
    slug: 'social-media',
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
        <AnimateOnScroll animationClassName="animate-fade-in-down">
          <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl uppercase">Serviços</h2>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="#">VER TODOS OS SERVIÇOS <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </AnimateOnScroll>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {portfolioServices.map((service, index) => {
            return (
              <div key={service.id}>
                <AnimateOnScroll 
                  animationClassName="animate-fade-in-up"
                  className={`[--animation-delay:${200 * (index % 2)}ms]`}
                >
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
          <AnimateOnScroll animationClassName="animate-fade-in-up">
            <Button asChild variant="link">
                <Link href="#">VER TODOS OS SERVIÇOS <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
