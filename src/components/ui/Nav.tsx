interface NavProps {
  items?: string[];
  variant?: 'light' | 'dark';
  className?: string;
}

export function Nav({
  items = ['About', 'Features', 'Pricing', 'Gallery', 'Team'],
  variant = 'dark',
  className = ''
}: NavProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-700';
  const hoverColor = variant === 'light' ? 'hover:text-white/80' : 'hover:text-gray-900';

  return (
    <nav className={`flex items-center gap-10 ${className}`}>
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className={`text-base font-normal ${textColor} ${hoverColor} transition-colors duration-200`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
