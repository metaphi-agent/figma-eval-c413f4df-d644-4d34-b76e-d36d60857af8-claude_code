import { Logo, Nav, SocialIcons, ArrowRightIcon, SearchIcon } from '../ui';

/**
 * Header 2 - Minimal with City Illustration
 * Features: Clean white background, watercolor illustration, vertical social icons
 */
export function Header2() {
  return (
    <header className="relative w-full min-h-[700px] bg-white overflow-hidden">
      {/* Decorative city illustration */}
      <div
        className="absolute right-0 top-1/4 w-[600px] h-[450px] opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=450&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'sepia(20%) saturate(150%) hue-rotate(180deg) brightness(110%)',
          maskImage: 'linear-gradient(to left, black 60%, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-6">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-8">
            <div className="flex gap-1">
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#EC008C] to-[#FC6767]" />
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-[#E65C00] to-[#F9D423]" />
            </div>
          </div>

          <Nav variant="dark" />

          <SearchIcon className="text-gray-700" size={20} />
        </div>

        {/* Hero content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Vertical social icons */}
          <div className="col-span-1">
            <SocialIcons
              variant="dark"
              icons={['twitter', 'facebook', 'instagram', 'linkedin']}
              direction="vertical"
            />
          </div>

          {/* Main content */}
          <div className="col-span-5 pt-12">
            <h1 className="text-[96px] font-bold text-gray-900 leading-none mb-8">
              Moscow
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sem enim tellus vel molestie donec quis. Est maecenas ultrices magna nibh mi habitasse elementum nisi.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-gray-900 hover:opacity-70 transition-opacity">
              <span className="text-base">More</span>
              <span className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center">
                <ArrowRightIcon size={18} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
