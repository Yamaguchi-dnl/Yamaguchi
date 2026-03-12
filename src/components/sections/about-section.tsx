import { Badge } from '../ui/badge';
import AnimateOnScroll from '../animate-on-scroll';

const skills = [
  'Design Gráfico',
  'Identidade Visual',
  'Branding',
  'UI/UX Design',
  'Estratégia Digital',
  'Social Media',
  'Figma',
  'Photoshop',
];

const experiences = [
  {
    role: 'Designer Gráfico Freelancer',
    company: 'Freelance',
    period: 'Jul 2025 - o momento',
  },
  {
    role: 'Designer Gráfico & Estrategista Digital',
    company: 'First MKT WEB',
    period: 'Out 2023 - Ago 2025',
  },
];

export default function AboutSection() {
  
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1">
          
          {/* Coluna de Texto */}
          <div className="flex flex-col gap-8">
            <AnimateOnScroll>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter uppercase">Sobre Mim</h2>
              <p className="mt-4 text-muted-foreground tracking-tight">
                Sou Daniel Yamaguchi, Designer Gráfico e Estrategista Digital. Minha paixão é transformar ideias em realidade visual, combinando criatividade com estratégia focada em resultados. Sou especialista em criar identidades de marca marcantes e experiências digitais que encantam, comunicam e impulsionam o crescimento de cada negócio.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
                <hr className="border-t border-border/40" />
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
                 <hr className="border-t border-border/40" />
            </AnimateOnScroll>
            
            <AnimateOnScroll>
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
        </div>
      </div>
    </section>
  );
}
