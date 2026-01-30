import { useState } from 'react';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import Header1 from './headers/Header1';
import Header2 from './headers/Header2';
import Header8 from './headers/Header8';
import Header14 from './headers/Header14';
import Header34 from './headers/Header34';
import Header43 from './headers/Header43';
import Header67 from './headers/Header67';
import Header75 from './headers/Header75';

const headerComponents = [
  { id: 1, name: 'Portfolio Hero', component: Header1, category: 'portfolio' },
  { id: 2, name: 'Minimal City', component: Header2, category: 'minimal' },
  { id: 8, name: 'Automotive Showcase', component: Header8, category: 'hero' },
  { id: 14, name: 'Product Launch', component: Header14, category: 'hero' },
  { id: 34, name: 'Design Studio', component: Header34, category: 'creative' },
  { id: 43, name: 'Corporate', component: Header43, category: 'corporate' },
  { id: 67, name: 'App Download', component: Header67, category: 'app' },
  { id: 75, name: 'Security SaaS', component: Header75, category: 'app' },
];

const HeaderGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(true);

  const currentHeader = headerComponents[currentIndex];
  const HeaderComponent = currentHeader.component;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % headerComponents.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + headerComponents.length) % headerComponents.length);
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Header Preview */}
      <div className="relative">
        <HeaderComponent />
      </div>

      {/* Gallery Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-screen-2xl mx-auto px-8 py-6">
          {/* Info Toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
                <Layers size={20} />
                <span className="text-sm font-medium">
                  {showInfo ? 'Hide' : 'Show'} Info
                </span>
              </button>

              {showInfo && (
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <div>
                    <span className="text-gray-500">Header:</span>{' '}
                    <span className="text-white font-medium">{currentHeader.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Category:</span>{' '}
                    <span className="text-white font-medium capitalize">{currentHeader.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">ID:</span>{' '}
                    <span className="text-white font-medium">#{currentHeader.id}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="text-sm text-gray-400">
              {currentIndex + 1} / {headerComponents.length}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Thumbnail Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-2xl px-4">
              {headerComponents.map((header, index) => (
                <button
                  key={header.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 text-white scale-110'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {header.id}
                </button>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg text-xs text-gray-400 border border-gray-700">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
};

export default HeaderGallery;
