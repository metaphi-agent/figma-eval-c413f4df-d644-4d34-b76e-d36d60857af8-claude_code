import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MenuIcon from '../ui/MenuIcon';

const Header8 = () => {
  return (
    <header className="relative bg-black text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 relative z-20">
        <MenuIcon variant="white" />
        <Logo variant="white" />
        <div className="flex items-center gap-8">
          <a href="#about" className="font-medium hover:text-gray-300 transition-colors">ABOUT</a>
          <a href="#models" className="font-medium hover:text-gray-300 transition-colors">MODELS</a>
          <a href="#dealer" className="font-medium hover:text-gray-300 transition-colors">DEALER</a>
          <MenuIcon variant="white" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Side Navigation */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm -rotate-90 whitespace-nowrap mb-8">ESPORTS</span>
            <div className="h-24 w-px bg-white"></div>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm rotate-90 whitespace-nowrap mb-8">EVENTS</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-8">
          <h1 className="text-8xl font-bold mb-4 tracking-wider">BMW</h1>
          <p className="text-3xl mb-12 font-light">Sheer Driving Pleasure</p>

          {/* Car Silhouette Placeholder */}
          <div className="w-full max-w-5xl h-64 bg-gradient-to-b from-gray-800 to-black mb-12"></div>

          <div className="flex items-center gap-12 mb-8">
            <button className="w-3 h-3 rounded-full bg-white"></button>
            <div className="flex items-center gap-4">
              <div className="h-px w-32 bg-white"></div>
              <span className="font-medium">MODELS</span>
              <div className="h-px w-32 bg-white"></div>
            </div>
            <button className="w-3 h-3 rounded-full border-2 border-white"></button>
          </div>

          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
            TAKE A TEST DRIVE
          </Button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center px-8 py-6">
          <button className="text-2xl hover:text-gray-300">←</button>
          <div className="flex gap-4">
            <button className="w-3 h-3 rounded-full bg-white"></button>
            <button className="w-3 h-3 rounded-full border border-white"></button>
            <button className="w-3 h-3 rounded-full border border-white"></button>
          </div>
          <button className="text-2xl hover:text-gray-300">→</button>
        </div>
      </div>
    </header>
  );
};

export default Header8;
