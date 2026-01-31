import { Logo, Nav, MenuIcon, ToggleIcon } from '../ui';

/**
 * Header 14 - Dark Lighting Theme
 * Features: Dark background, pendant lamp illustration, toggle switch
 */
export function Header14() {
  return (
    <header className="relative w-full min-h-[800px] bg-[#1A1A1A] overflow-hidden">
      {/* Pendant lamp illustration */}
      <div className="absolute left-1/3 -translate-x-1/2 top-0 flex flex-col items-center">
        {/* Wire */}
        <div className="w-px h-32 bg-white/40" />
        {/* Lamp fixture */}
        <div className="relative">
          {/* Lamp top */}
          <div className="w-12 h-8 bg-white/90 rounded-t-lg mx-auto" />
          {/* Lamp shade */}
          <div className="w-40 h-24 bg-white/90 rounded-b-[50%] relative">
            {/* Light cone */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[160px] border-r-[160px] border-t-[400px] border-l-transparent border-r-transparent border-t-white/10" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <MenuIcon className="text-white" size={24} />
            <Logo variant="light" />
          </div>

          <Nav variant="light" />

          <ToggleIcon checked={false} />
        </div>

        {/* Hero content - positioned to the right */}
        <div className="mt-48 ml-auto max-w-xl">
          <h1 className="text-[72px] font-bold text-white leading-tight mb-6">
            <span className="font-light italic">Latest</span><br />
            in Lighting
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas elit amet, odio id sit eget.
          </p>
          <button className="px-10 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Check All Collections
          </button>

          {/* Pagination indicator */}
          <div className="mt-48 flex items-center gap-4">
            <span className="text-white/60 text-sm">01</span>
            <div className="flex-1 h-px bg-white/20 relative">
              <div className="absolute left-0 top-0 w-1/4 h-full bg-white" />
            </div>
            <span className="text-white/60 text-sm">04</span>
          </div>
        </div>
      </div>
    </header>
  );
}
