import Logo from '../ui/Logo';
import Navigation from '../ui/Navigation';
import Button from '../ui/Button';
import MenuIcon from '../ui/MenuIcon';

const Header14 = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-8">
          <MenuIcon variant="white" />
          <Logo variant="white" />
        </div>
        <Navigation items={navItems} variant="white" />
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-14 h-8 bg-white/20 rounded-full peer peer-checked:bg-white/30 transition-colors">
            <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-6"></div>
          </div>
        </label>
      </nav>

      {/* Hero Content */}
      <div className="max-w-screen-2xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Illustration */}
        <div className="flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Lamp illustration placeholder */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white rounded-full">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-64 bg-white"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[120px] border-r-[120px] border-t-[200px] border-l-transparent border-r-transparent border-t-white/20"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Latest<br />in Lighting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas elit amet, odio id sit eget.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
            Check All Collections
          </Button>

          {/* Progress Indicator */}
          <div className="flex items-center gap-4 mt-16">
            <span className="text-2xl font-bold">01</span>
            <div className="flex-1 h-px bg-white/30">
              <div className="h-full w-1/4 bg-white"></div>
            </div>
            <span className="text-2xl font-bold text-gray-500">04</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header14;
