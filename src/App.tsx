import { useState } from 'react';
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Header7,
  Header8,
  Header10,
  Header14,
  Header19,
  Header21,
} from './components/headers';

const headers = [
  { id: 1, name: 'Header 1', component: Header1, style: 'Dark Portfolio', description: 'Person image hero with gradient CTA' },
  { id: 2, name: 'Header 2', component: Header2, style: 'Minimal Illustration', description: 'Clean design with city watercolor' },
  { id: 3, name: 'Header 3', component: Header3, style: 'Bright 3D', description: 'Blue wave with 3D cube illustration' },
  { id: 4, name: 'Header 4', component: Header4, style: 'Gradient Typography', description: 'Large outlined year with gradients' },
  { id: 7, name: 'Header 7', component: Header7, style: 'Business Isometric', description: 'Analytics illustration with cyan CTA' },
  { id: 8, name: 'Header 8', component: Header8, style: 'Dark Automotive', description: 'Full-bleed BMW style hero' },
  { id: 10, name: 'Header 10', component: Header10, style: 'Fintech 3D', description: 'Secure payment illustration' },
  { id: 14, name: 'Header 14', component: Header14, style: 'Dark Lighting', description: 'Pendant lamp with dark theme' },
  { id: 19, name: 'Header 19', component: Header19, style: 'Blue SaaS', description: 'Email app with mailbox illustration' },
  { id: 21, name: 'Header 21', component: Header21, style: 'Nature Shop', description: 'Full-bleed nature with sidebar nav' },
];

export default function App() {
  const [selectedHeader, setSelectedHeader] = useState<number | null>(null);

  if (selectedHeader !== null) {
    const header = headers.find((h) => h.id === selectedHeader);
    if (header) {
      const HeaderComponent = header.component;
      return (
        <div className="relative">
          <button
            onClick={() => setSelectedHeader(null)}
            className="fixed top-4 right-4 z-50 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg shadow-lg hover:bg-white transition-colors font-medium"
          >
            &larr; Back to Gallery
          </button>
          <HeaderComponent />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[#EC008C] to-[#FC6767]" />
              <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#E65C00] to-[#F9D423]" />
              <div className="w-1.5 h-4 rounded-full bg-gradient-to-b from-[#00D2FF] to-[#3A7BD5]" />
            </div>
            <span className="text-xl font-medium">Website Headers Collection</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            101+ Free Website Headers
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A comprehensive collection of beautiful and creative website headers for web designers.
            Ready-made header templates with modern designs, gradients, and illustrations.
          </p>
        </div>
      </div>

      {/* Headers Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Header Showcase</h2>
            <p className="text-gray-600">Click on any header to view it full-size</p>
          </div>
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-gray-600">
            {headers.length} Headers Implemented
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {headers.map((header) => {
            const HeaderComponent = header.component;
            return (
              <div
                key={header.id}
                onClick={() => setSelectedHeader(header.id)}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  {/* Preview thumbnail */}
                  <div className="relative h-[350px] overflow-hidden">
                    <div className="absolute inset-0 transform scale-[0.5] origin-top-left w-[200%] h-[200%]">
                      <HeaderComponent />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-6 py-3 bg-white rounded-lg font-medium text-gray-900 shadow-lg">
                        View Full Size
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 border-t border-gray-100">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {header.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{header.description}</p>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {header.style}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#EC008C] to-[#FC6767]" />
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-[#E65C00] to-[#F9D423]" />
              <div className="w-1 h-3 rounded-full bg-gradient-to-b from-[#00D2FF] to-[#3A7BD5]" />
            </div>
            <span className="font-medium">Website Headers Collection</span>
          </div>
          <p className="text-gray-400 text-sm">
            Based on Figma design by Dmitrii Rogoza. Built with React + Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
