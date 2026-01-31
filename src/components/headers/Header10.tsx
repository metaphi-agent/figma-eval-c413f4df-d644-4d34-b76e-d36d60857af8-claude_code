import { Logo, Nav, Button } from '../ui';

/**
 * Header 10 - Fintech 3D Illustration
 * Features: Clean white background, 3D fintech illustration, gradient CTA
 */
export function Header10() {
  return (
    <header className="relative w-full min-h-[850px] bg-white overflow-hidden">
      {/* 3D Fintech illustration placeholder */}
      <div className="absolute right-0 top-32 w-[600px] h-[500px]">
        <div className="relative w-full h-full">
          {/* Credit card */}
          <div className="absolute top-0 right-20 w-48 h-28 bg-gradient-to-br from-[#FFD54F] to-[#FFA000] rounded-lg transform -rotate-12 shadow-xl">
            <div className="absolute top-4 left-4 w-8 h-6 rounded bg-[#FF5722] opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 space-y-1">
              <div className="w-full h-2 bg-white/30 rounded" />
              <div className="w-2/3 h-2 bg-white/30 rounded" />
            </div>
          </div>

          {/* Smartphone */}
          <div className="absolute top-20 left-20 w-40 h-64 bg-gradient-to-br from-[#1565C0] to-[#0D47A1] rounded-2xl shadow-xl transform rotate-12">
            <div className="absolute inset-2 bg-[#1976D2] rounded-xl">
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">$</span>
              </div>
              <div className="absolute bottom-8 left-4 right-4 space-y-2">
                <div className="w-full h-3 bg-white/20 rounded" />
                <div className="w-2/3 h-3 bg-white/20 rounded" />
              </div>
            </div>
          </div>

          {/* Wallet */}
          <div className="absolute bottom-10 right-10 w-36 h-28 bg-gradient-to-br from-[#F4511E] to-[#E64A19] rounded-xl shadow-xl">
            <div className="absolute top-2 right-4 w-20 h-16 bg-gradient-to-r from-[#43A047] to-[#388E3C] rounded transform translate-x-2 -translate-y-2" />
            <div className="absolute top-6 right-8 w-16 h-12 bg-gradient-to-r from-[#4CAF50] to-[#43A047] rounded transform translate-x-2 -translate-y-2" />
          </div>

          {/* Dotted connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            <line x1="200" y1="150" x2="350" y2="80" stroke="#47C5FF" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="200" y1="250" x2="400" y2="350" stroke="#47C5FF" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Logo variant="dark" />

          <Nav variant="dark" items={['About', 'Features', 'Pricing', 'Gallery', 'Team']} />

          <div className="flex items-center gap-4">
            <span className="text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
              Sing In
            </span>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100">
              Register
            </Button>
          </div>
        </div>

        {/* Hero content */}
        <div className="mt-32 max-w-xl">
          <span className="text-[#E65C00] font-bold uppercase tracking-wider text-sm mb-4 block">
            PROTECT YOUR DATA
          </span>
          <h1 className="text-[64px] font-bold text-gray-900 leading-tight mb-6">
            Secure<br />Communicaton
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis dolor ac lobortis iaculis nam.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="w-80 bg-gradient-to-r from-[#47C5FF] to-[#4776E6]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
