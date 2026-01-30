import Logo from '../ui/Logo';
import Navigation from '../ui/Navigation';
import { ArrowRight } from 'lucide-react';
import SocialIcons from '../ui/SocialIcons';

const Header2 = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <Logo />
        <Navigation items={navItems} />
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="max-w-screen-2xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-7xl font-bold mb-6">Moscow</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sem integer tellus molestie donec quis. Est maecenas ultrices magna nibh mi habitasse elementum nisl.
          </p>
          <button className="flex items-center gap-2 text-gray-900 font-medium hover:gap-4 transition-all">
            More
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Social Icons */}
          <div className="mt-16 flex flex-col gap-4">
            <SocialIcons />
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-lg">
            {/* Placeholder for cityscape illustration */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
