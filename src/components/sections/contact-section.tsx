import ContactForm from '@/components/contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Entre em Contato</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed tracking-tight">
            Tem alguma pergunta ou quer trabalhar junto? Preencha o formulário abaixo.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
