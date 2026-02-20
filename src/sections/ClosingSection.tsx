import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ClosingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stampRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Entrance (0% - 30%)
      scrollTl
        .fromTo(
          stampRef.current,
          { scale: 1.25, y: '40vh', opacity: 0 },
          { scale: 1, y: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          sublineRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.15
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.2
        );

      // Exit (70% - 100%)
      scrollTl
        .fromTo(
          stampRef.current,
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 1.06, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          [sublineRef.current, ctaRef.current],
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.75
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cobalt/70 via-cobalt/50 to-cobalt/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        <h2
          ref={stampRef}
          className="font-heading font-black text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] text-brazil-yellow uppercase tracking-tight text-center"
          style={{
            WebkitTextStroke: '3px #0B0F1C',
            textShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          VILATUR
        </h2>

        <p
          ref={sublineRef}
          className="text-white/90 text-xl lg:text-2xl mt-6 font-medium tracking-wide"
        >
          Saquarema — RJ
        </p>

        <button
          ref={ctaRef}
          onClick={scrollToTop}
          className="mt-12 flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <span className="text-sm uppercase tracking-wider">Voltar ao topo</span>
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
