const IFOOD_URL = 'https://www.ifood.com.br/delivery/saquarema-rj/argenburguer-vilatur/a904738d-556b-4e20-b1b1-b63444e84e07?UTM_Medium=share';

export function Navigation() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <span className="font-heading font-black text-lg sm:text-xl text-white tracking-tight flex-shrink-0">
          ARGEN<span className="text-yellow-400">BURGUER</span>
        </span>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
          <button onClick={() => scrollTo('cardapio')} className="hover:text-white transition-colors">
            Card&aacute;pio
          </button>
          <button onClick={() => scrollTo('historia')} className="hover:text-white transition-colors">
            Hist&oacute;ria
          </button>
          <button onClick={() => scrollTo('info')} className="hover:text-white transition-colors">
            Contato
          </button>
        </nav>

        <a
          href={IFOOD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors flex-shrink-0"
        >
          Pedir no iFood
        </a>
      </div>
    </header>
  );
}
