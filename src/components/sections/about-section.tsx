import Image from 'next/image';
import { Badge } from '../ui/badge';
import AnimateOnScroll from '../animate-on-scroll';
import { aboutImage } from '@/lib/placeholder-images';

const skills = [
  'UI/UX Design',
  'Web Design',
  'Branding',
  'Desenvolvimento Web',
  'Next.js',
  'Figma',
  'Photoshop',
  'Estrategia Digital',
];

const experiences = [
  {
    role: 'Freelancer',
    company: 'Auto-empregado',
    period: 'Atualmente',
  },
  {
    role: 'Web Designer Sênior',
    company: 'Creative Minds Studio',
    period: '2021-2023',
  },
  {
    role: 'UI/UX Designer',
    company: 'InnovateTech Solutions',
    period: '2019-2021',
  },
];

export default function AboutSection() {
  if (!aboutImage) {
    return null;
  }
  
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Coluna de Texto */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <AnimateOnScroll animationClassName="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter uppercase">Sobre Mim</h2>
              <p className="mt-4 text-muted-foreground md:text-lg tracking-tight">
                Sou Daniel Yamaguchi, um apaixonado Web Designer e Estrategista Digital. Minha especialidade é criar identidades visuais e experiências digitais que não apenas cativam e inspiram, mas também combinam criatividade com estratégia para elevar marcas a um novo patamar.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animationClassName="animate-fade-in-up" className="[--animation-delay:200ms]">
                <hr className="border-t border-border/40" />
            </AnimateOnScroll>
            
            <AnimateOnScroll animationClassName="animate-fade-in-up" className="[--animation-delay:300ms]">
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClassName="animate-fade-in-up" className="[--animation-delay:400ms]">
                 <hr className="border-t border-border/40" />
            </AnimateOnScroll>
            
            <AnimateOnScroll animationClassName="animate-fade-in-up" className="[--animation-delay:500ms]">
              <div className="space-y-6">
                {experiences.map(exp => (
                  <div key={exp.company} className="grid grid-cols-3 gap-4 items-start text-sm">
                    <p className="font-medium">{exp.role}</p>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-muted-foreground text-right">{exp.period}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Coluna da Imagem */}
          <div className="lg:col-span-2 w-full">
            <AnimateOnScroll animationClassName="animate-fade-in-up" className="[--animation-delay:200ms]">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={800}
                className="object-cover w-full h-auto rounded-lg shadow-lg"
              />
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
