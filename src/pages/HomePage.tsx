import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap, Github } from 'lucide-react';
import Logo from '../components/ui/Logo';
import Button from '../components/ui/Button';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Palette,
      title: '101+ Header Designs',
      description: 'Beautiful, diverse header templates covering all major design patterns',
    },
    {
      icon: Code,
      title: 'Production Ready',
      description: 'Clean React + TypeScript code with modern best practices',
    },
    {
      icon: Zap,
      title: 'Fully Customizable',
      description: 'Easy to modify and adapt to your specific project needs',
    },
  ];

  const categories = [
    { name: 'Portfolio', count: 12, color: 'bg-purple-500' },
    { name: 'Minimal', count: 18, color: 'bg-blue-500' },
    { name: 'Hero', count: 24, color: 'bg-green-500' },
    { name: 'E-commerce', count: 15, color: 'bg-orange-500' },
    { name: 'Corporate', count: 14, color: 'bg-indigo-500' },
    { name: 'Creative', count: 13, color: 'bg-pink-500' },
    { name: 'App', count: 5, color: 'bg-teal-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto px-8 py-6 flex justify-between items-center">
          <Logo variant="white" />
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <Button onClick={() => navigate('/gallery')}>
              View Gallery
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-screen-2xl mx-auto px-8 py-24 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium border border-blue-500/30">
          101+ Website Headers Collection
        </div>

        <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
          Beautiful Website<br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Headers Collection
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          A comprehensive collection of production-ready React header components.
          Perfect for designers and developers looking for inspiration and ready-to-use code.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <Button size="lg" onClick={() => navigate('/gallery')}>
            Explore Headers
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900"
          >
            View on GitHub
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-24">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">101+</div>
            <div className="text-gray-400">Header Designs</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">7</div>
            <div className="text-gray-400">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Customizable</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-screen-2xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose This Collection?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => navigate('/gallery')}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all text-center group"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform`}></div>
              <div className="text-white font-semibold mb-1">{category.name}</div>
              <div className="text-gray-400 text-sm">{category.count} headers</div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our collection and find the perfect header for your next project
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => navigate('/gallery')}
          >
            View Full Gallery
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto px-8 py-12 text-center">
          <p className="text-gray-400 mb-4">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm">
            Based on the Figma design: 101+ Free Website Headers for web design v1.2
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
