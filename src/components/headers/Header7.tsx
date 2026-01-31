import { Logo, Nav, Button } from '../ui';

/**
 * Header 7 - Business Isometric Illustration
 * Features: Clean white background, isometric business illustration, cyan CTA
 */
export function Header7() {
  return (
    <header className="relative w-full min-h-[850px] bg-white overflow-hidden">
      {/* Isometric illustration placeholder */}
      <div className="absolute right-0 top-32 w-[650px] h-[550px]">
        <div className="relative w-full h-full">
          {/* Isometric arrows and people illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Blue ascending arrows */}
            <div className="absolute">
              <div className="w-[400px] h-[300px] bg-gradient-to-r from-[#64B5F6] to-[#2196F3] transform -skew-y-12 rounded-lg opacity-90" />
              <div className="absolute top-[-100px] left-20 w-[300px] h-[200px] bg-gradient-to-r from-[#90CAF9] to-[#64B5F6] transform -skew-y-12 rounded-lg opacity-80" />
            </div>
            {/* Charts and graphs overlay */}
            <div className="absolute top-10 right-10 w-32 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <div className="flex items-end gap-2 h-16">
                <div className="w-4 h-8 bg-[#4776E6] rounded-t" />
                <div className="w-4 h-12 bg-[#8E54E9] rounded-t" />
                <div className="w-4 h-6 bg-[#47C5FF] rounded-t" />
                <div className="w-4 h-14 bg-[#4776E6] rounded-t" />
              </div>
            </div>
            {/* Donut chart */}
            <div className="absolute bottom-20 right-40 w-20 h-20 rounded-full border-8 border-[#E65C00] border-t-[#4776E6] border-r-[#8E54E9]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Logo variant="dark" />

          <Nav variant="dark" />

          <Button variant="primary" gradient="cyan" size="md">
            Sing In
          </Button>
        </div>

        {/* Hero content */}
        <div className="mt-32 max-w-xl">
          <h1 className="text-[64px] font-bold text-gray-900 leading-tight mb-6">
            Freelance<br />Web-designer
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
            If you want to deliver a smooth customer experience and look good while doing it, a web designer can help.
          </p>
          <div className="flex items-center gap-6">
            <Button variant="primary" gradient="cyan" size="lg">
              Contact Us
            </Button>
            <span className="text-base text-gray-900 font-medium uppercase tracking-wider cursor-pointer hover:opacity-70 transition-opacity">
              HOW IT WORKS
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
