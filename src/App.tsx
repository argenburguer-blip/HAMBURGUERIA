import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/sections/HeroSection';
import { MenuGridSection } from '@/sections/MenuGridSection';
import { StorySection } from '@/sections/StorySection';
import { OrderSection } from '@/sections/OrderSection';
import { ClosingSection } from '@/sections/ClosingSection';

const IFOOD_URL =
  'https://www.ifood.com.br/delivery/saquarema-rj/argenburguer-vilatur/a904738d-556b-4e20-b1b1-b63444e84e07?UTM_Medium=share';

function App() {
  return (
    <div className="relative bg-zinc-950">
      {/* Floating iFood Button */}
      <a
        href={IFOOD_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir no iFood"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-red-600 text-white font-black text-sm uppercase tracking-widest px-7 py-4 rounded-full transition-all hover:bg-red-500 active:scale-95 whitespace-nowrap"
        style={{ boxShadow: '0 6px 30px rgba(220,38,38,0.55)' }}
      >
        🛵 Pedir no iFood
      </a>

      <Navigation />

      <main>
        <HeroSection />
        <MenuGridSection />
        <StorySection />
        <OrderSection />
        <ClosingSection />
      </main>
    </div>
  );
}

export default App;
