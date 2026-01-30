import { HeaderProps } from '../types';

export const headers: HeaderProps[] = [
  { id: 1, name: 'Header 1', category: 'portfolio', theme: 'dark', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 2, name: 'Header 2', category: 'minimal', theme: 'light', layout: 'left-aligned', hasHero: true, hasCTA: true, hasImage: true },
  { id: 3, name: 'Header 3', category: 'minimal', theme: 'light', layout: 'centered', hasHero: false, hasCTA: false, hasImage: false },
  { id: 4, name: 'Header 4', category: 'minimal', theme: 'light', layout: 'centered', hasHero: false, hasCTA: false, hasImage: false },
  { id: 5, name: 'Header 5', category: 'hero', theme: 'light', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 6, name: 'Header 6', category: 'hero', theme: 'dark', layout: 'full-width', hasHero: true, hasCTA: true, hasImage: true },
  { id: 7, name: 'Header 7', category: 'minimal', theme: 'light', layout: 'centered', hasHero: false, hasCTA: false, hasImage: false },
  { id: 8, name: 'Header 8', category: 'hero', theme: 'dark', layout: 'full-width', hasHero: true, hasCTA: true, hasImage: true },
  { id: 9, name: 'Header 9', category: 'hero', theme: 'light', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 10, name: 'Header 10', category: 'hero', theme: 'light', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 11, name: 'Header 11', category: 'hero', theme: 'light', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 12, name: 'Header 12', category: 'hero', theme: 'light', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 13, name: 'Header 13', category: 'hero', theme: 'light', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 14, name: 'Header 14', category: 'hero', theme: 'dark', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 15, name: 'Header 15', category: 'hero', theme: 'light', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 16, name: 'Header 16', category: 'minimal', theme: 'light', layout: 'centered', hasHero: false, hasCTA: false, hasImage: false },
  { id: 17, name: 'Header 17', category: 'hero', theme: 'light', layout: 'split', hasHero: true, hasCTA: true, hasImage: true },
  { id: 18, name: 'Header 18', category: 'minimal', theme: 'light', layout: 'centered', hasHero: false, hasCTA: false, hasImage: false },
  { id: 19, name: 'Header 19', category: 'minimal', theme: 'light', layout: 'centered', hasHero: false, hasCTA: false, hasImage: false },
  { id: 20, name: 'Header 20', category: 'hero', theme: 'dark', layout: 'full-width', hasHero: true, hasCTA: true, hasImage: true },
];

export const getAllCategories = (): string[] => {
  return Array.from(new Set(headers.map(h => h.category))).sort();
};

export const getHeadersByCategory = (category: string): HeaderProps[] => {
  return headers.filter(h => h.category === category);
};
