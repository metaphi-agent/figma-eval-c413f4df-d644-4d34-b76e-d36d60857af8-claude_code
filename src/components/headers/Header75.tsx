import Logo from '../ui/Logo';
import Navigation from '../ui/Navigation';
import Button from '../ui/Button';
import { MessageCircle } from 'lucide-react';

const Header75 = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className="bg-gradient-to-br from-blue-500 to-blue-600 text-white min-h-screen relative">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <Logo variant="white" />
        <Navigation items={navItems} variant="white" />
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
          Sing In
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="max-w-screen-2xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            100 000 websites get hacked every single day.<br />
            <span className="text-yellow-300">Are you next?</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-lg">
            Secure your website from malware and hackers using F-Off before it is too late
          </p>
          <Button variant="secondary" size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
            Get started and Secure my website
          </Button>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="relative aspect-square bg-gradient-to-br from-purple-200 to-blue-100 rounded-3xl p-8">
            {/* Laptop illustration */}
            <div className="absolute inset-8">
              <div className="bg-purple-300 rounded-t-lg h-3/4 flex items-center justify-center">
                {/* Browser window */}
                <div className="w-4/5 h-4/5 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-8 bg-yellow-300 rounded w-full flex items-center justify-center text-xs font-bold text-gray-800">
                      *****
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-purple-400 rounded-b-lg h-1/4"></div>
            </div>

            {/* Lock icons */}
            <div className="absolute -top-4 right-16 w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-white text-blue-600 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
        <MessageCircle size={28} />
      </button>
    </header>
  );
};

export default Header75;
