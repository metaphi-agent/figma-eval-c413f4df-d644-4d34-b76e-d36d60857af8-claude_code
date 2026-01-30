import Logo from '../ui/Logo';
import Navigation from '../ui/Navigation';
import Button from '../ui/Button';
import MenuIcon from '../ui/MenuIcon';

const Header34 = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Wave */}
      <div className="absolute top-0 right-0 w-full h-64">
        <svg viewBox="0 0 1440 320" className="absolute top-0 right-0 w-full h-full">
          <path
            fill="#6366f1"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 text-white">
        <Logo variant="white" />
        <Navigation items={navItems} variant="white" />
        <MenuIcon variant="white" />
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Circle Graphic */}
        <div className="flex items-center justify-center">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 shadow-2xl flex items-center justify-center">
              <div className="text-white text-center px-8">
                <h2 className="text-5xl font-bold leading-tight">
                  Live A Well<br />Designed<br />Life
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <div className="h-1 w-12 bg-blue-600 mb-6"></div>
          <p className="text-2xl text-gray-900 mb-8 max-w-lg leading-relaxed">
            Hello! We are an innovation design studio that works with mission-driven organizations to solve big problems through beautifully designed solutions.
          </p>
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            LET'S WORK TOGETHER
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header34;
