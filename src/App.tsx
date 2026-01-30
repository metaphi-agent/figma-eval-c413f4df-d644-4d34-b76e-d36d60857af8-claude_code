import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderGallery from './components/HeaderGallery';
import HomePage from './pages/HomePage';

function App() {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const prevButton = document.querySelector('[data-nav="previous"]') as HTMLButtonElement;
        prevButton?.click();
      } else if (e.key === 'ArrowRight') {
        const nextButton = document.querySelector('[data-nav="next"]') as HTMLButtonElement;
        nextButton?.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<HeaderGallery />} />
    </Routes>
  );
}

export default App;
