import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="w-full h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center text-center px-4">
      <div className="space-y-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase">
          <span className="block">Daniel Vieira</span>
          <span className="block text-primary/80">Yamag7uchi</span>
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Desenvolvedor Full-Stack & Criador de Soluções Digitais
        </p>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
            <a href="#portfolio">Ver Trabalhos</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#contact">Entrar em Contato</a>
        </Button>
      </div>
    </section>
  );
}
