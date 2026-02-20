import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column animation
      gsap.fromTo(
        leftColRef.current,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );

      // Right column animation
      gsap.fromTo(
        rightColRef.current,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightColRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );

      // Footer animation
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            end: 'top 70%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="relative w-full py-16 lg:py-24 bg-cobalt"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            {/* Left Column - Contact Info */}
            <div ref={leftColRef}>
              <h3 className="font-heading font-black text-3xl lg:text-4xl text-white uppercase tracking-tight mb-8">
                CONTATO
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:+5491133280998"
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+54 9 11 3328-0998</span>
                </a>

                <a
                  href="mailto:argenburguer@gmail.com"
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">argenburguer@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Vilatur, Saquarema — RJ</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:scale-110"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 transition-all hover:scale-110"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Column - Social */}
            <div ref={rightColRef}>
              <h3 className="font-heading font-black text-3xl lg:text-4xl text-white uppercase tracking-tight mb-8">
                SOCIAL
              </h3>

              <p className="text-white/80 text-lg mb-6">
                Segue a gente e marca seu amigo rival.
              </p>

              {/* Stadium thumbnail */}
              <div className="relative rounded-2xl overflow-hidden h-48 lg:h-56">
                <img
                  src="/images/stadium-bg.jpg"
                  alt="Stadium crowd"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cobalt/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">
                    #ArgenBurguerVilatur
                  </p>
                  <p className="text-white/70 text-sm">
                    A rivalidade mais gostosa do Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Line */}
          <div
            ref={footerRef}
            className="border-t border-white/20 pt-8 text-center"
          >
            <p className="text-white/60 text-sm">
              © 2026 ArgenBurguer Vilatur — Feito com rivalidade e muito tempero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
