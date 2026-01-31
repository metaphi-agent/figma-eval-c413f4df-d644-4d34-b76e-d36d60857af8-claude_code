export default function Logo({ variant = 'default', className = '' }) {
  const variants = {
    default: 'text-grey-90',
    white: 'text-white',
    minimal: ''
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
        <rect x="0" y="0" width="6" height="24" fill="#EC4899" rx="1"/>
        <rect x="9" y="0" width="6" height="24" fill="#F97316" rx="1"/>
        <rect x="18" y="0" width="6" height="24" fill="#3B82F6" rx="1"/>
      </svg>
      {variant !== 'minimal' && (
        <span className={`text-xl font-semibold ${variants[variant]}`}>
          SiteLogo
        </span>
      )}
    </div>
  )
}
