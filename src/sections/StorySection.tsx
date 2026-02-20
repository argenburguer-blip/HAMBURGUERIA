import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Entrance (0% - 30%)
      scrollTl
        .fromTo(
          photosRef.current,
          { x: '-60vw', rotate: -6, scale: 0.9, opacity: 0 },
          { x: 0, rotate: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          headingRef.current,
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.08
        )
        .fromTo(
          bodyRef.current?.querySelectorAll('.story-line') || [],
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.03, ease: 'none' },
          0.14
        )
        .fromTo(
          ctaRef.current,
          { y: 18, scale: 0.96, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, ease: 'none' },
          0.2
        );

      // Exit (70% - 100%)
      scrollTl
        .fromTo(
          photosRef.current,
          { y: 0, opacity: 1 },
          { y: '18vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          [headingRef.current, bodyRef.current, ctaRef.current],
          { x: 0, opacity: 1 },
          { x: '10vw', opacity: 0, ease: 'power2.in' },
          0.7
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="historia"
      className="relative w-full h-screen overflow-hidden bg-off-white"
    >
      <div className="relative z-10 w-full h-full flex items-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photos */}
          <div ref={photosRef} className="flex justify-center">
            <div className="relative flex items-center justify-center gap-4">
              {/* Argentina Brother */}
              <div className="relative group">
                <div className="w-40 h-52 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-400 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/images/irmao-argentina.jpg"
                    alt="Irmão argentino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-sky-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  🇦🇷
                </div>
              </div>

              {/* Brazil Brother */}
              <div className="relative group">
                <div className="w-40 h-52 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-green-500 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/images/irmao-brasil.jpg"
                    alt="Irmão brasileiro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  🇧🇷
                </div>
              </div>

              {/* Connection line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-sky-400 to-green-500 rounded-full z-10" />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2
              ref={headingRef}
              className="font-heading font-black text-4xl lg:text-5xl xl:text-6xl text-cobalt uppercase tracking-tight"
            >
              NOSSA HISTÓRIA
            </h2>

            <div ref={bodyRef} className="space-y-4">
              <p className="story-line text-gray-700 text-base lg:text-lg leading-relaxed">
                Dois irmãos, uma paixão: criar o melhor burger artesanal de
                Saquarema com o sabor da rivalidade saudável.
              </p>
              <p className="story-line text-gray-700 text-base lg:text-lg leading-relaxed">
                Um vive e respira futebol brasileiro. O outro, argentino de raiz.
                Na churrasqueira, essa paixão vira receita.
              </p>
              <p className="story-line text-gray-700 text-base lg:text-lg leading-relaxed">
                Aqui a disputa é só no campo. No prato, todo mundo ganha.
              </p>
            </div>

            <div ref={ctaRef}>
              <Button
                size="lg"
                className="bg-cobalt hover:bg-cobalt-light text-white font-bold rounded-full px-8 py-6 text-base uppercase tracking-wider transition-all hover:scale-105"
              >
                <ChefHat className="w-5 h-5 mr-2" />
                Conheça a Cozinha
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
