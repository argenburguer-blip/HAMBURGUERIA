const IFOOD_URL =
  'https://www.ifood.com.br/delivery/saquarema-rj/argenburguer-vilatur/a904738d-556b-4e20-b1b1-b63444e84e07?UTM_Medium=share';

interface MenuItem {
  id: number;
  name: string;
  flag: string;
  description: string;
  image: string;
  highlight?: boolean;
}

const burgers: MenuItem[] = [
  {
    id: 1,
    name: 'O Messi',
    flag: 'AR',
    description: 'Medalhao de carne · alface · tomate · ovo · queijo prato.',
    image: '/images/burger-pibe.jpg',
  },
  {
    id: 2,
    name: 'O Rei Pele',
    flag: 'BR',
    description: 'Medalhao de carne · queijo cheddar · bacon · cebola caramelizada.',
    image: '/images/burger-rei.jpg',
  },
  {
    id: 3,
    name: 'Argenburguer Premium',
    flag: 'STAR',
    description:
      'Medalhao de carne · provolone grelhado · rucula · cebola caramelizada · ovo · chimichurri.',
    image: '/images/premium.jpg',
    highlight: true,
  },
  {
    id: 4,
    name: 'Sanduiche Chori Louco',
    flag: 'HOT',
    description:
      'Chourico · provolone grelhado · alface · tomate · chimichurri · molho crioulo.',
    image: '/images/chori-louco.jpg',
  },
  {
    id: 5,
    name: 'Bandeja Salchi Power',
    flag: 'FRY',
    description: 'Batata frita · linguica · queijo cheddar · bacon.',
    image: '/images/salchi-power.jpg',
  },
  {
    id: 6,
    name: 'Kids Surpresa',
    flag: 'GIFT',
    description:
      'Medalhao de carne · presumido · queijo prato · batata doce frita · suco + brinquedo especial!',
    image: '/images/kids-surpresa.jpg',
  },
];

const sides = [
  {
    id: 7,
    name: 'Batatas Fritas — Pequena',
    description: '300 gramas de batatas fritas crocantes.',
    image: '/images/batata-messi.jpg',
  },
  {
    id: 8,
    name: 'Batatas Fritas — Grande',
    description: '500 gramas de batatas fritas crocantes.',
    image: '/images/batata-messi.jpg',
  },
];

const flagLabel: Record<string, string> = {
  AR: 'Argentina',
  BR: 'Brasil',
  STAR: 'Destaque',
  HOT: 'Especial',
  FRY: 'Combo',
  GIFT: 'Kids',
};

function ProductCard({ item }: { item: MenuItem }) {
  return (
    <div
      className={`relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg flex flex-col ${
        item.highlight ? 'ring-2 ring-yellow-400' : ''
      }`}
    >
      {item.highlight && (
        <div className="absolute top-3 left-3 z-10 bg-yellow-400 text-zinc-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
          Mais Pedido
        </div>
      )}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-zinc-800">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
        <div className="absolute bottom-3 right-3 bg-zinc-900/80 text-white text-xs font-bold px-2 py-1 rounded-full">
          {flagLabel[item.flag]}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-heading font-black text-lg text-white uppercase leading-tight">
          {item.name}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1">{item.description}</p>
        <a
          href={IFOOD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 w-full text-center bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-sm uppercase tracking-wider py-3 rounded-xl transition-all"
        >
          Pedir no iFood
        </a>
      </div>
    </div>
  );
}

function SideCard({ item }: { item: (typeof sides)[0] }) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg flex flex-col sm:flex-row items-stretch">
      <div className="w-full sm:w-36 h-40 sm:h-auto overflow-hidden bg-zinc-800 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col justify-between gap-3 flex-1">
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Acompanhamento</p>
          <h3 className="font-heading font-black text-base text-white uppercase leading-tight">
            {item.name}
          </h3>
          <p className="text-zinc-400 text-sm mt-1">{item.description}</p>
        </div>
        <a
          href={IFOOD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-sm uppercase tracking-wider py-3 rounded-xl transition-all"
        >
          Pedir no iFood
        </a>
      </div>
    </div>
  );
}

export function MenuGridSection() {
  return (
    <section id="cardapio" className="bg-zinc-950 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2">
            Nossos destaques
          </p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase">
            NOSSO CARDAPIO
          </h2>
          <p className="text-zinc-400 mt-3 text-base max-w-md mx-auto">
            Tudo grelhado na hora. Clique em qualquer item e peca pelo iFood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {burgers.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-heading font-black text-xl text-white uppercase mb-4 text-center">
            Mais Opcoes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sides.map((item) => (
              <SideCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={IFOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-base uppercase tracking-wider px-10 py-5 rounded-full transition-all shadow-2xl"
            style={{ boxShadow: '0 6px 30px rgba(220,38,38,0.5)' }}
          >
            Ver cardapio completo no iFood
          </a>
        </div>
      </div>
    </section>
  );
}
