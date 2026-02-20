import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ChevronRight, Utensils } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLImageElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const flagBrazilRef = useRef<HTMLDivElement>(null);
  const flagArgentinaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current?.querySelectorAll('.headline-word') || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.8 }
      )
        .fromTo(
          burgerRef.current,
          { scale: 0.9, y: 80, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          [flagBrazilRef.current, flagArgentinaRef.current],
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.15, duration: 0.6 },
          '-=0.6'
        )
        .fromTo(
          subheadRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.3'
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set([headlineRef.current, burgerRef.current, subheadRef.current, ctaRef.current], {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });

      // Exit animations (70% - 100%)
      scrollTl
        .fromTo(
          headlineRef.current,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          burgerRef.current,
          { y: 0, scale: 1, opacity: 1 },
          { y: '22vh', scale: 1.06, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          [subheadRef.current, ctaRef.current],
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.75
        )
        .fromTo(
          [flagBrazilRef.current, flagArgentinaRef.current],
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.8
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToCardapio = () => {
    document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPedido = () => {
    document.getElementById('onde-pedir')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-cobalt"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/stadium-bg.jpg"
          alt="Stadium crowd"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cobalt/60 via-cobalt/40 to-cobalt/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <div ref={headlineRef} className="mb-6">
              <h1 className="font-heading font-black text-white uppercase leading-[0.95] tracking-tight">
                <span className="headline-word block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  O MELHOR DO
                </span>
                <span className="headline-word block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-1">
                  BRASIL E DA
                </span>
                <span className="headline-word block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-brazil-yellow mt-1">
                  ARGENTINA
                </span>
                <span className="headline-word block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-1">
                  NO SEU BURGER
                </span>
              </h1>
            </div>

            <p
              ref={subheadRef}
              className="text-white/90 text-base lg:text-lg max-w-md mb-8 leading-relaxed"
            >
              Hambúrguer artesanal, grelhado na brasa, com ingredientes de verdade
              e o tempero da rivalidade mais gostosa do mundo.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToCardapio}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 py-6 text-base uppercase tracking-wider transition-all hover:scale-105 hover:shadow-lg"
              >
                <Utensils className="w-5 h-5 mr-2" />
                Ver Cardápio
              </Button>
              <Button
                onClick={scrollToPedido}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-full px-8 py-6 text-base uppercase tracking-wider transition-all"
              >
                Fazer Pedido
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Column - Burger */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            <img
              ref={burgerRef}
              src="/images/hero-burger.png"
              alt="Delicious burger"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl animate-float drop-shadow-2xl"
            />

            {/* Decorative Flags */}
            <div
              ref={flagBrazilRef}
              className="absolute top-0 right-0 lg:right-10 animate-sway"
            >
              <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-green-500 via-yellow-400 to-green-600 flex items-center justify-center shadow-xl">
                <span className="text-2xl lg:text-4xl">🇧🇷</span>
              </div>
            </div>
            <div
              ref={flagArgentinaRef}
              className="absolute bottom-10 right-5 lg:right-0 animate-sway"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-sky-400 via-white to-sky-400 flex items-center justify-center shadow-xl">
                <span className="text-2xl lg:text-3xl">🇦🇷</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
