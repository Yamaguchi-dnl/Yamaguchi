
export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden group">
      <div className="relative z-10 flex flex-col items-center mb-16">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-semibold tracking-tighter uppercase animate-fade-in-down">
          DANIEL YAMAGUCHI
        </h1>
        <p className="mt-8 text-base text-white/80 animate-fade-in-up [animation-delay:200ms]">
          WEB DESIGNER & ESTRATEGISTA DIGITAL
        </p>
      </div>
    </section>
  );
}
