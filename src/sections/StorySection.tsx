const IFOOD_URL = 'https://www.ifood.com.br/delivery/saquarema-rj/argenburguer-vilatur/a904738d-556b-4e20-b1b1-b63444e84e07?UTM_Medium=share';

export function StorySection() {
  return (
    <section id="historia" className="bg-zinc-900 py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div>
          <div>
            <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2">
              Nossa hist&oacute;ria
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mb-5 leading-tight">
              BRASIL E ARGENTINA<br />UNIDOS PELO SABOR
            </h2>
            <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
              <p>Duas pessoas, uma paix&atilde;o: criar o melhor hambúrguer artesanal de Saquarema, com um sabor &uacute;nico.</p>
              <p>Escolheram Vilatur para realizar seu projeto e contaram com o apoio de todos.</p>
              <p className="text-white font-medium">Em resumo, Brasil e Argentina unidos pelo bom gosto.</p>
            </div>
            <div className="mt-8">
              <a
                href={IFOOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-xl"
              >
                Pedir no iFood
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
