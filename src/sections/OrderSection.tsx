const IFOOD_URL = 'https://www.ifood.com.br/delivery/saquarema-rj/argenburguer-vilatur/a904738d-556b-4e20-b1b1-b63444e84e07?UTM_Medium=share';
const WA_URL = 'https://wa.me/5522998725280';
const INSTAGRAM_URL = 'https://www.instagram.com/argenburguervilatur?igsh=cjR0cnNnbHdnMTIx';

export function OrderSection() {
  return (
    <section id="info" className="bg-zinc-950 py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2">
            Informa&ccedil;&otilde;es
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
            ONDE E QUANDO
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="text-2xl font-black text-yellow-400 mb-3">Horario</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Ter&ccedil;a &mdash; Quinta</span>
                <span className="text-white font-bold">11h &agrave;s 23h</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-zinc-400">Sexta &mdash; Domingo</span>
                <span className="text-white font-bold">11h &agrave; meia-noite</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="text-2xl font-black text-yellow-400 mb-3">Endere&ccedil;o</div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Avenida Beira Mar, 2447 &mdash; Local 3<br />
              Vilatur, Saquarema &mdash; RJ
            </p>
            <a
              href="https://maps.google.com/?q=Avenida+Beira+Mar+2447+Vilatur+Saquarema+RJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-yellow-400 text-xs font-bold uppercase tracking-wider hover:text-yellow-300 transition-colors"
            >
              Ver no Google Maps
            </a>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
            <div className="text-2xl font-black text-yellow-400 mb-3">Contato</div>
            <div className="space-y-3">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                <span className="font-bold text-green-400 w-6">WA</span>
                <span>+55 22 99872-5280</span>
              </a>
              <a href="mailto:argenburguer@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                <span className="font-bold text-zinc-400 w-6">@</span>
                <span>argenburguer@gmail.com</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                <span className="font-bold text-pink-400 w-6">IG</span>
                <span>@argenburguervilatur</span>
              </a>
              <a href={IFOOD_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                <span className="font-bold text-red-400 w-6">IF</span>
                <span>Argenburguer no iFood</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 active:scale-95 text-white font-black text-base uppercase tracking-wider px-10 py-5 rounded-full transition-all shadow-xl"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
