import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface SocialIconsProps {
  variant?: 'default' | 'white';
  className?: string;
}

const SocialIcons = ({ variant = 'default', className = '' }: SocialIconsProps) => {
  const iconColor = variant === 'white'
    ? 'text-white hover:text-gray-200'
    : 'text-gray-600 hover:text-gray-900';

  const icons = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {icons.map(({ Icon, label }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className={`transition-colors ${iconColor}`}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
