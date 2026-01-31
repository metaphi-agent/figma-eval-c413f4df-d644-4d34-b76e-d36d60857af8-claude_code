import { Logo, Nav, Button, ArrowRightIcon } from '../ui';

/**
 * Header 3 - Bright Blue with 3D Cubes
 * Features: Curved blue header wave, 3D cube illustration, yellow CTA
 */
export function Header3() {
  return (
    <header className="relative w-full min-h-[850px] bg-white overflow-hidden">
      {/* Blue curved header */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 250" fill="none" className="w-full">
          <path
            d="M0 0H1440V150C1200 250 800 200 500 200C200 200 0 150 0 150V0Z"
            fill="#2196F3"
          />
        </svg>
      </div>

      {/* 3D Cube illustration placeholder */}
      <div className="absolute right-20 top-40 w-[500px] h-[500px]">
        <div className="relative w-full h-full">
          {/* Main cube cluster */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Blue cubes */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#47C5FF] to-[#2196F3] transform rotate-45 shadow-lg" />
              <div className="absolute -top-16 -left-12 w-16 h-16 bg-gradient-to-br from-[#64B5F6] to-[#42A5F5] transform rotate-45 shadow-lg" />
              <div className="absolute -top-8 left-24 w-12 h-12 bg-gradient-to-br from-[#90CAF9] to-[#64B5F6] transform rotate-45 shadow-lg" />
              {/* Yellow cubes */}
              <div className="absolute top-8 -left-20 w-14 h-14 bg-gradient-to-br from-[#FFD54F] to-[#FFC107] transform rotate-45 shadow-lg" />
              <div className="absolute -top-20 left-8 w-10 h-10 bg-gradient-to-br from-[#FFECB3] to-[#FFD54F] transform rotate-45 shadow-lg" />
              {/* Purple cubes */}
              <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-[#CE93D8] to-[#AB47BC] transform rotate-45 shadow-lg" />
              <div className="absolute top-32 -left-8 w-8 h-8 bg-gradient-to-br from-[#E1BEE7] to-[#CE93D8] transform rotate-45 shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Logo variant="dark" />

          <Nav variant="light" className="[&_a]:text-white" />

          <Button variant="outline" className="text-[#E65C00] border-[#E65C00] hover:bg-[#E65C00]/10">
            Sing In
          </Button>
        </div>

        {/* Hero content */}
        <div className="mt-32 max-w-xl">
          <h1 className="text-[64px] font-bold text-gray-900 leading-tight mb-6">
            Freelance<br />Web-designer
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
            You don't have to be a digital marketing pro to know how important a website is to modern business. As both a digital interface for delivering products and services and a vehicle for generating leads, your website needs to look good. If you want to deliver a smooth customer experience and look good while doing it, a web designer can help.
          </p>
          <div className="flex items-center gap-6">
            <Button variant="primary" gradient="orange" size="lg">
              More
            </Button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ArrowRightIcon size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
