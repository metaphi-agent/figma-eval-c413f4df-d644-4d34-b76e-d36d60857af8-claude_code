import { NavItem } from '@/types';

interface NavigationProps {
  items: NavItem[];
  variant?: 'default' | 'white';
  className?: string;
}

const Navigation = ({ items, variant = 'default', className = '' }: NavigationProps) => {
  const linkColor = variant === 'white'
    ? 'text-white hover:text-gray-200'
    : 'text-gray-700 hover:text-gray-900';

  return (
    <nav className={className}>
      <ul className="flex items-center gap-8">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`font-medium transition-colors ${linkColor}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
