import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  gradient?: 'purple' | 'blue' | 'orange' | 'cyan' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const gradientClasses = {
  purple: 'bg-gradient-to-r from-[#4776E6] to-[#8E54E9]',
  blue: 'bg-gradient-to-r from-[#00D2FF] to-[#3A7BD5]',
  orange: 'bg-gradient-to-r from-[#E65C00] to-[#F9D423]',
  cyan: 'bg-gradient-to-r from-[#47C5FF] to-[#4776E6]',
  teal: 'bg-gradient-to-r from-[#00C6FF] to-[#0072FF]',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export function Button({
  children,
  variant = 'primary',
  gradient = 'purple',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 cursor-pointer';

  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = `${gradientClasses[gradient]} text-white hover:opacity-90 shadow-md hover:shadow-lg`;
      break;
    case 'secondary':
      variantClasses = 'bg-white text-gray-900 hover:bg-gray-50 shadow-md';
      break;
    case 'outline':
      variantClasses = 'bg-transparent border-2 border-current hover:bg-white/10';
      break;
    case 'ghost':
      variantClasses = 'bg-transparent hover:bg-white/10';
      break;
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
