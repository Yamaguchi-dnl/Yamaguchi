import Image from 'next/image';
import { aboutImage } from '@/lib/placeholder-images';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mim</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg tracking-tight">
              Sou um desenvolvedor apaixonado por criar experiências digitais bonitas e funcionais. Com experiência em tecnologias front-end e back-end, estou sempre em busca de novos desafios e oportunidades para aprender e crescer.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-lg tracking-tight">
              Quando não estou codificando, gosto de explorar novas tecnologias, contribuir para projetos de código aberto e tomar um bom café.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={400}
                height={400}
                className="rounded-full object-cover w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-4 border-primary/50"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
