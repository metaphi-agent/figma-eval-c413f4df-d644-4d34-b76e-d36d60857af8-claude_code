import { ButtonProps } from '@/types';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white shadow-sm hover:shadow-md',
    outline: 'border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900',
    ghost: 'hover:bg-gray-100 text-gray-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
