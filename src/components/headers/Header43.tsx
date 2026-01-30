import Logo from '../ui/Logo';
import Navigation from '../ui/Navigation';
import Button from '../ui/Button';

const Header43 = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-center">
          <Navigation items={navItems} />
          <Logo />
          <Button>Register</Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-screen-2xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            Drive by Data, Guided<br />by Compassion
          </h1>
          <div className="w-24 h-1 bg-blue-600 mb-6"></div>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            You don't have to be a digital marketing pro to know how important a website is to modern business.
          </p>
          <Button size="lg">Get started</Button>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-50 rounded-lg flex items-center justify-center">
            {/* Isometric illustration placeholder */}
            <div className="text-center text-gray-400">
              <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200" fill="none">
                <rect x="50" y="80" width="100" height="80" fill="#3b82f6" opacity="0.2"/>
                <circle cx="100" cy="60" r="30" fill="#60a5fa" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header43;
