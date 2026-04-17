const IFOOD_URL = 'https://www.ifood.com.br/delivery/saquarema-rj/argenburguer-vilatur/a904738d-556b-4e20-b1b1-b63444e84e07?UTM_Medium=share';
const WA_URL = 'https://wa.me/5522998725280';
const INSTAGRAM_URL = 'https://www.instagram.com/argenburguervilatur?igsh=cjR0cnNnbHdnMTIx';

export function ClosingSection() {
  return (
    <footer className="bg-zinc-900 pb-28">
      <div className="relative bg-red-600 py-16 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/stadium-bg.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-red-200 font-bold text-sm uppercase tracking-widest mb-3">
            Bateu aquela fome?
          </p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase leading-tight mb-4">
            FICOU COM<br />VONTADE?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Fa&ccedil;a seu pedido agora pelo iFood.
          </p>
          <a
            href={IFOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-black text-base uppercase tracking-wider px-10 py-5 rounded-full transition-all hover:bg-red-50 active:scale-95 shadow-2xl"
          >
            Pedir no iFood agora
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-heading font-black text-xl text-white">
              ARGEN<span className="text-yellow-400">BURGUER</span>
            </span>
            <p className="text-zinc-500 text-sm mt-1">
              Av. Beira Mar, 2447 &mdash; Local 3 &middot; Vilatur, Saquarema &mdash; RJ
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-pink-600 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-colors">
              Instagram
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-green-600 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-colors">
              WhatsApp
            </a>
            <a href={IFOOD_URL} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-red-600 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-colors">
              iFood
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6 text-center">
          <p className="text-zinc-600 text-xs">
            &copy; 2026 ArgenBurguer Vilatur &middot; Brasil e Argentina unidos pelo sabor
          </p>
        </div>
      </div>
    </footer>
  );
}
