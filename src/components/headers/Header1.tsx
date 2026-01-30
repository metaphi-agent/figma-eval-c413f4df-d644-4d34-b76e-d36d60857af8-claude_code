import Logo from '../ui/Logo';
import Navigation from '../ui/Navigation';
import Button from '../ui/Button';
import SocialIcons from '../ui/SocialIcons';

const Header1 = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className="relative bg-gray-800 text-white min-h-screen">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Bar */}
        <div className="flex justify-end items-center gap-4 px-8 py-4">
          <SocialIcons variant="white" />
          <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-gray-900">
            Contact
          </Button>
        </div>

        {/* Main Navigation */}
        <nav className="flex justify-between items-center px-8 py-6">
          <Logo variant="white" />
          <Navigation items={navItems} variant="white" />
        </nav>

        {/* Hero Content */}
        <div className="max-w-screen-xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Dmitrii Rogoza
            </h1>
            <h2 className="text-3xl font-bold mb-6">
              Professional Web Design
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Hi! My name is Dmitrii Rogoza and I'm an expert in web design and branding. I can help you make your website more attractive
            </p>
            <Button size="lg">LET'S DO IT</Button>
          </div>

          {/* Image Placeholder */}
          <div className="hidden lg:block">
            <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
