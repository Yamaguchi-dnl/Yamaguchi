import ContactForm from '@/components/contact-form';
import AnimateOnScroll from '../animate-on-scroll';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimateOnScroll animationClassName="animate-fade-in-down">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Entre em Contato</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg tracking-tight">
              Tem alguma pergunta ou quer trabalhar junto? Preencha o formulário abaixo.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animationClassName="animate-fade-in-up" className="[--animation-delay:200ms]">
          <div className="mx-auto w-full max-w-md">
            <ContactForm />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
