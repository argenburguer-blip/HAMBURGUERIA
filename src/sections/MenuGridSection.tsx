import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'El Pibe de Oro',
    description: 'Blend 180g, provolone, chimichurri, maionese de alho no pão brioche.',
    image: '/images/burger-pibe.jpg',
    badge: '🇦🇷',
  },
  {
    id: 2,
    name: 'O Rei Pelé',
    description: 'Blend 180g, cheddar, bacon, cebola caramelizada no pão australiano.',
    image: '/images/burger-rei.jpg',
    badge: '🇧🇷',
  },
  {
    id: 3,
    name: 'Hermanos Unidos',
    description: 'Blend 200g, queijo prato, molho campanha, farofa de bacon no pão de batata.',
    image: '/images/burger-hermanos.jpg',
    badge: '🤝',
  },
  {
    id: 4,
    name: 'Combo Superclássico',
    description: 'Burger (à escolha) + batata frita + refri.',
    image: '/images/combo-superclassico.jpg',
    badge: '⭐',
  },
  {
    id: 5,
    name: 'Batata Frita do Messi',
    description: 'Com páprica e maionese da casa.',
    image: '/images/batata-messi.jpg',
    badge: '🍟',
  },
  {
    id: 6,
    name: 'Anéis de Cebola',
    description: 'Crocantes, com molho barbecue.',
    image: '/images/aneis-cebola.jpg',
    badge: '🧅',
  },
];

export function MenuGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { x: '-8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: '10vh', rotate: -2, scale: 0.96, opacity: 0 },
          {
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
            delay: index * 0.08,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cardapio"
      className="relative w-full py-20 lg:py-28 bg-off-white"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="mb-12">
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-cobalt uppercase tracking-tight">
            ESCOLHA SEU TIME
          </h2>
          <p className="text-gray-600 text-lg mt-3 max-w-xl">
            Cada burger é uma homenagem. Todos são grelhados na brasa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-lg">
                    {item.badge}
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-cobalt mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
