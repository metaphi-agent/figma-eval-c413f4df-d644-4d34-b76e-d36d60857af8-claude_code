import { Logo, Nav, SocialIcons, ArrowRightIcon, SearchIcon } from '../ui';

/**
 * Header 4 - Gradient Typography with Year
 * Features: Gradient background, large outlined "2022" typography, social icons
 */
export function Header4() {
  return (
    <header className="relative w-full min-h-[800px] overflow-hidden" style={{
      background: 'linear-gradient(135deg, #F5F6F0 0%, #E8F5E9 50%, #FFF9C4 100%)'
    }}>
      {/* Large outlined 2022 typography */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4">
        <div className="text-[300px] font-bold leading-none text-transparent" style={{
          WebkitTextStroke: '2px #E65C00',
          fontFamily: 'Roboto, sans-serif',
        }}>
          <div className="-mb-20">20</div>
          <div className="ml-20">22</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Logo variant="dark" />

          <Nav variant="dark" />

          <SearchIcon className="text-gray-700" size={20} />
        </div>

        {/* Hero content - positioned to the right */}
        <div className="mt-32 ml-auto max-w-xl text-right">
          <h1 className="text-[72px] font-bold text-gray-900 leading-tight">
            GRAPHIC
          </h1>
          <h2 className="text-[72px] font-bold leading-tight" style={{
            background: 'linear-gradient(90deg, #E65C00 0%, #F9D423 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            DESIGNE TRENDS
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-6 mb-10">
            If you want to deliver a smooth customer experience and look good while doing it, a web designer can help.
          </p>

          <div className="flex items-center gap-4 justify-end mb-20">
            <button className="w-14 h-14 rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-900/5 transition-colors">
              <ArrowRightIcon size={22} className="text-gray-900" />
            </button>
            <span className="text-base text-gray-900 font-medium">Learn more</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 justify-end mt-32">
            <SocialIcons variant="dark" icons={['linkedin', 'twitter', 'facebook', 'instagram']} />
          </div>
        </div>
      </div>
    </header>
  );
}
