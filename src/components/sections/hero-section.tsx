import ParticlesBackground from '../particles-background';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden group">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 shadow-[0_0_20px_theme(colors.black/20%)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
          <span>WEB DESIGNER & ESTRATEGISTA DIGITAL</span>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-semibold tracking-tighter uppercase">
          DANIEL YAMAGUCHI
        </h1>
      </div>
    </section>
  );
}
