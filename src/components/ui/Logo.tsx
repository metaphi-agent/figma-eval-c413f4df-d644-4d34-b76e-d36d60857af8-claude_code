interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  const colorClass = variant === 'white' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex gap-0.5">
        <div className="w-1 h-6 bg-red-500 rounded-full"></div>
        <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
      </div>
      <span className={`text-xl font-bold ${colorClass}`}>SiteLogo</span>
    </div>
  );
};

export default Logo;
