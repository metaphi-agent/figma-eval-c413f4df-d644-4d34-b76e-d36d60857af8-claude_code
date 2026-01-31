export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-grey-10 text-grey-90 hover:bg-grey-20',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700',
    gradientOrange: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700',
    yellow: 'bg-yellow-400 text-grey-90 hover:bg-yellow-500',
    orange: 'bg-orange-500 text-white hover:bg-orange-600',
    ghost: 'text-grey-70 hover:bg-grey-10'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg font-medium transition-colors duration-150
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
