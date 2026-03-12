import AnimateOnScroll from "../animate-on-scroll";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden group">
      <div className="relative z-10 flex flex-col items-center mb-16">
        <AnimateOnScroll>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-semibold tracking-tighter uppercase">
            DANIEL YAMAGUCHI
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <p className="mt-8 text-lg text-white/80">
            DESIGNER GRÁFICO & ESTRATEGISTA DIGITAL
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
