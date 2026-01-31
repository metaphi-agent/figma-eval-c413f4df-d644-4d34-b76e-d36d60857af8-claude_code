import { Logo, Nav, Button, MenuIcon } from '../ui';

/**
 * Header 8 - Dark Automotive (BMW Style)
 * Features: Full-bleed dark car image, minimal navigation, side labels
 */
export function Header8() {
  return (
    <header className="relative w-full h-[800px] bg-black overflow-hidden">
      {/* Background car image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1440&h=800&fit=crop')`,
          filter: 'brightness(0.4)',
        }}
      />

      {/* Side labels */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-8">
          <span className="text-white/70 text-xs uppercase tracking-widest transform -rotate-90 whitespace-nowrap">
            ESPORTS
          </span>
          <div className="w-3 h-3 rounded-full border-2 border-white" />
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-8">
          <span className="text-white/70 text-xs uppercase tracking-widest transform rotate-90 whitespace-nowrap">
            EVENTS
          </span>
          <div className="w-3 h-3 rounded-full border-2 border-white bg-white/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-16 py-8 h-full flex flex-col">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Logo variant="light" />

          <div className="flex items-center gap-16">
            <nav className="flex items-center gap-16">
              {['ABOUT', 'MODELS', 'DEALER'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/80 text-sm font-medium uppercase tracking-widest hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <MenuIcon className="text-white" size={24} />
          </div>
        </div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-[80px] font-bold text-white leading-none mb-4">
            BMW
          </h1>
          <p className="text-2xl text-white/90 font-light">
            Sheer Driving Pleasure
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex items-end justify-between pb-8">
          {/* Navigation arrows */}
          <div className="flex items-center gap-4">
            <button className="text-white/50 hover:text-white transition-colors text-2xl">
              &larr;
            </button>
          </div>

          {/* Center - Models indicator */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-white/70 text-sm uppercase tracking-widest">MODELS</span>
            <div className="flex items-center gap-4">
              <div className="w-64 h-px bg-white/30" />
              <div className="w-3 h-3 rounded-full border-2 border-white bg-white/50" />
              <div className="w-64 h-px bg-white/30" />
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-4">
            <button className="text-white/50 hover:text-white transition-colors text-2xl">
              &rarr;
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pb-8">
          <Button variant="secondary" size="lg" className="px-12">
            TAKE A TEST DRIVE
          </Button>
        </div>
      </div>
    </header>
  );
}
