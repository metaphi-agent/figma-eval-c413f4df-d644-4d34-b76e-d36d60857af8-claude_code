export interface HeaderProps {
  id: number;
  name: string;
  category: HeaderCategory;
  theme: 'light' | 'dark';
  layout: HeaderLayout;
  hasHero?: boolean;
  hasCTA?: boolean;
  hasImage?: boolean;
}

export type HeaderCategory =
  | 'minimal'
  | 'hero'
  | 'split-screen'
  | 'portfolio'
  | 'corporate'
  | 'e-commerce'
  | 'creative'
  | 'app';

export type HeaderLayout =
  | 'centered'
  | 'left-aligned'
  | 'split'
  | 'full-width'
  | 'asymmetric';

export interface NavItem {
  label: string;
  href: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}
