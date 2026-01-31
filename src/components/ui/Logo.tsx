interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo icon - three gradient bars */}
      <div className="flex gap-1">
        <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#EC008C] to-[#FC6767]" />
        <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#E65C00] to-[#F9D423]" />
        <div className="w-1 h-4 rounded-full bg-gradient-to-b from-[#00D2FF] to-[#3A7BD5]" />
      </div>
      {/* Logo text */}
      <span className={`text-lg font-medium ${textColor}`}>
        <span className="font-bold">Site</span>Logo
      </span>
    </div>
  );
}
