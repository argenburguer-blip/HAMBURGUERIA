import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function MenuHeaderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const silhouetteRef = useRef<HTMLDivElement>(null);

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
          titleRef.current,
          { y: '60vh', scale: 0.85, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          underlineRef.current,
          { scaleX: 0 },
          { scaleX: 1, ease: 'none' },
          0.12
        )
        .fromTo(
          captionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.18
        )
        .fromTo(
          silhouetteRef.current,
          { scale: 1.2, opacity: 0 },
          { scale: 1.4, opacity: 0.08, ease: 'none' },
          0
        );

      // Exit (70% - 100%)
      scrollTl
        .fromTo(
          titleRef.current,
          { y: 0, opacity: 1 },
          { y: '-35vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          underlineRef.current,
          { x: 0, opacity: 1 },
          { x: '-10vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          captionRef.current,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.75
        )
        .fromTo(
          silhouetteRef.current,
          { scale: 1.4, opacity: 0.08 },
          { scale: 1.6, opacity: 0.18, ease: 'power2.in' },
          0.7
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-cobalt flex items-center justify-center"
    >
      {/* Burger Silhouette Background */}
      <div
        ref={silhouetteRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-[50vw] font-heading font-black text-white/5 select-none">
          🍔
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2
          ref={titleRef}
          className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white uppercase tracking-tight"
        >
          CARDÁPIO
        </h2>
        <div
          ref={underlineRef}
          className="w-48 lg:w-72 h-3 bg-green-500 mx-auto mt-6 rounded-full origin-center"
        />
        <p
          ref={captionRef}
          className="text-white/80 text-lg lg:text-xl mt-8 font-medium"
        >
          Escolha seu time. Ou leva os dois.
        </p>
      </div>
    </section>
  );
}
