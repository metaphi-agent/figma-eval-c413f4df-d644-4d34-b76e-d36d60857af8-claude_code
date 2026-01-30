import { Menu } from 'lucide-react';

interface MenuIconProps {
  variant?: 'default' | 'white';
  className?: string;
  onClick?: () => void;
}

const MenuIcon = ({ variant = 'default', className = '', onClick }: MenuIconProps) => {
  const iconColor = variant === 'white' ? 'text-white' : 'text-gray-900';

  return (
    <button
      onClick={onClick}
      className={`p-2 hover:bg-gray-100 hover:bg-opacity-10 rounded-lg transition-colors ${iconColor} ${className}`}
      aria-label="Menu"
    >
      <Menu size={24} />
    </button>
  );
};

export default MenuIcon;
