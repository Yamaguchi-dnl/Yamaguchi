import { Button } from '@/components/ui/button';
import ParticlesBackground from '../particles-background';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <ParticlesBackground />
      <div className="z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-semibold tracking-tighter uppercase">
          DANIEL YAMAGUCHI
        </h1>
        <p className="max-w-[700px] mx-auto text-foreground md:text-lg tracking-tight">
          WEB DESIGNER & ESTRATEGISTA DIGITAL
        </p>
      </div>
    </section>
  );
}
