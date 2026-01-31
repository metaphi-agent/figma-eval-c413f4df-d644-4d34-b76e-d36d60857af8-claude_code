import { Logo, Nav, Button, SocialIcons } from '../ui';

/**
 * Header 1 - Dark Portfolio Style
 * Features: Dark hero with person image, gradient CTA button
 */
export function Header1() {
  return (
    <header className="relative w-full h-[700px] overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1440&h=700&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-8 h-full flex flex-col">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Logo variant="light" />

          <div className="flex items-center gap-16">
            <Nav variant="light" />
            <span className="text-white font-bold text-base cursor-pointer hover:opacity-80 transition-opacity">
              Contact
            </span>
          </div>

          <SocialIcons variant="light" icons={['facebook', 'instagram', 'medium']} />
        </div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <h1 className="text-[72px] leading-tight font-light text-white mb-2">
            Dmitrii Rogoza
          </h1>
          <h2 className="text-[52px] font-bold text-white mb-8">
            Professional Web Design
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-md">
            Hi! My name ia Dmitrii Rogoza and i'm an expert in web design and branding. I can help you make your website more attractive
          </p>
          <Button variant="primary" gradient="purple" size="lg" className="w-fit uppercase tracking-wider">
            LET'S DO IT
          </Button>
        </div>
      </div>
    </header>
  );
}
