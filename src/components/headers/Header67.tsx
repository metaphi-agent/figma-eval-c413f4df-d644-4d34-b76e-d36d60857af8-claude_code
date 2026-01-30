import Logo from '../ui/Logo';
import Button from '../ui/Button';

const Header67 = () => {
  return (
    <header className="bg-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <Logo />
        <div className="text-gray-400 text-sm">support@figma.com</div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-8">
        <h1 className="text-7xl font-bold mb-4">Figma Desktop app 2022</h1>
        <p className="text-2xl text-gray-500 italic mb-12">Free and complete figma suite</p>

        <Button size="lg" className="mb-4">Download</Button>
        <p className="text-sm text-gray-400">299MB / Jan 11 2022</p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl">
          {/* Card 1 - Colors */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 aspect-square flex items-center justify-center">
            <div className="grid grid-cols-2 gap-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
              <div className="w-16 h-16 rounded-full bg-purple-500"></div>
              <div className="w-16 h-16 rounded-full bg-blue-400"></div>
              <div className="w-16 h-16 rounded-full bg-green-500" style={{ gridColumn: 'span 2' }}></div>
            </div>
          </div>

          {/* Card 2 - Typography */}
          <div className="bg-gradient-to-br from-red-300 to-orange-200 rounded-lg p-8 aspect-square flex flex-col justify-center gap-4">
            <div className="bg-white rounded px-4 py-2 text-center font-bold">Verdana</div>
            <div className="bg-white rounded px-4 py-2 text-center border-2 border-black border-dashed">Whyte</div>
            <div className="bg-white rounded px-4 py-2 text-center text-sm">Wingdings</div>
            <div className="bg-white rounded px-4 py-2 text-center text-xs">Work Sans</div>
          </div>

          {/* Card 3 - Design */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-black rounded-lg p-6 aspect-square flex items-center justify-center">
            <div className="bg-white/90 w-full h-full rounded flex items-center justify-center">
              <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                <path d="M30 30 Q 30 50, 50 50 T 70 70" stroke="#a855f7" strokeWidth="4" fill="none"/>
                <path d="M25 25 L 45 45 M 55 55 L 75 75" stroke="#000" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Card 4 - Components */}
          <div className="bg-yellow-400 border-4 border-black rounded-lg p-6 aspect-square flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-blue-600 rounded-lg border-2 border-black"></div>
              <div className="w-12 h-12 bg-green-500" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
            </div>
            <div className="bg-white border-2 border-blue-600 rounded-lg p-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <div className="mt-2 h-8 bg-blue-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header67;
