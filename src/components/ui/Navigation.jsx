import { Link } from 'react-router-dom'

export default function Navigation({ variant = 'default', className = '' }) {
  const links = ['About', 'Features', 'Pricing', 'Gallery', 'Team']

  const variants = {
    default: 'text-grey-70 hover:text-grey-90',
    white: 'text-white hover:text-grey-20',
    dark: 'text-grey-90 hover:text-blue-600'
  }

  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className={`${variants[variant]} transition-colors duration-150 text-sm font-medium`}
        >
          {link}
        </a>
      ))}
    </nav>
  )
}
