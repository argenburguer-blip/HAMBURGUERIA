import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const deliveryApps = [
  {
    name: 'iFood',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v.5c.5-.5 1.17-.83 1.9-.83 1.66 0 3.1 1.34 3.1 3.5V17z"/>
      </svg>
    ),
    color: 'bg-red-500 hover:bg-red-600',
    link: '#',
  },
  {
    name: 'Uber Eats',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
    color: 'bg-gray-900 hover:bg-black',
    link: '#',
  },
  {
    name: 'WhatsApp',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: 'bg-green-500 hover:bg-green-600',
    link: 'https://wa.me/5491133280998',
  },
];

export function OrderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );

      // Apps animation
      const appIcons = appsRef.current?.querySelectorAll('.app-icon');
      if (appIcons) {
        gsap.fromTo(
          appIcons,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: appsRef.current,
              start: 'top 80%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }

      // Map animation
      gsap.fromTo(
        mapRef.current,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 85%',
            end: 'top 65%',
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
      id="onde-pedir"
      className="relative w-full py-20 lg:py-28 bg-off-white"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="mb-10">
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-cobalt uppercase tracking-tight">
            ONDE PEDIR
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Peça pelo app favorito ou chama no Whats.
          </p>
        </div>

        {/* Delivery Apps */}
        <div ref={appsRef} className="flex flex-wrap gap-4 mb-10">
          {deliveryApps.map((app) => (
            <a
              key={app.name}
              href={app.link}
              className={`app-icon w-16 h-16 lg:w-20 lg:h-20 rounded-full ${app.color} text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}
              title={app.name}
            >
              {app.icon}
            </a>
          ))}
        </div>

        {/* Map Card */}
        <div
          ref={mapRef}
          className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-card"
        >
          {/* Static Map Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-cobalt/20 to-cobalt/40">
            <img
              src="/images/stadium-bg.jpg"
              alt="Location map"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Map Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl max-w-sm text-center">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-cobalt mb-2">
                Estamos em Vilatur
              </h3>
              <p className="text-gray-600 mb-4">Saquarema — RJ</p>
              <a
                href="tel:+5491133280998"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +54 9 11 3328-0998
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
