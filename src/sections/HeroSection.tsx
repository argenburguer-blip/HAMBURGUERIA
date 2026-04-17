const IFOOD_URL = 'https://www.ifood.com.br/delivery/saquarema-rj/argenburguer-vilatur/a904738d-556b-4e20-b1b1-b63444e84e07?UTM_Medium=share';
const WA_URL = 'https://wa.me/5522998725280';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-28">
      <div className="absolute inset-0">
        <img src="/images/stadium-bg.jpg" alt="Argenburguer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-zinc-950/78" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <div className="inline-block bg-yellow-400 text-zinc-950 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Vilatur &middot; Saquarema &middot; RJ
        </div>

        <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-white uppercase leading-none mb-3">
          ARGEN<br />
          <span className="text-yellow-400">BURGUER</span>
        </h1>

        <p className="text-white/80 text-lg sm:text-xl mb-10 font-medium">
          Sabores irresist&iacute;veis com pedido r&aacute;pido pelo iFood
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={IFOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-base uppercase tracking-wider px-10 py-5 rounded-full transition-all"
            style={{ boxShadow: '0 6px 30px rgba(220,38,38,0.5)' }}
          >
            Pedir no iFood
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-500 active:scale-95 text-white font-bold text-base uppercase tracking-wider px-10 py-5 rounded-full transition-all"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm text-center">
        <div>Ver card&aacute;pio</div>
        <div className="text-xl animate-bounce">&#8595;</div>
      </div>
    </section>
  );
}
