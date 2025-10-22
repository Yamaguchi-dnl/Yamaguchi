import ParticlesBackground from '../particles-background';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <ParticlesBackground />
      <div className="z-10 flex flex-col items-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_20px_theme(colors.white/5%)] backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-white"></span>
          <span>Crafting Unique Brand Identities</span>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-semibold tracking-tighter uppercase">
          DANIEL YAMAGUCHI
        </h1>
        <p className="max-w-[700px] mx-auto text-foreground md:text-lg tracking-tight mt-2">
          WEB DESIGNER & ESTRATEGISTA DIGITAL
        </p>
      </div>
    </section>
  );
}
