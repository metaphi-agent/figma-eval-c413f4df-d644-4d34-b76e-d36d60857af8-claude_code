import Logo from '../ui/Logo'
import Navigation from '../ui/Navigation'
import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'

export default function HeroHeader({
  backgroundColor = '#6b7280',
  logoVariant = 'white',
  navVariant = 'white',
  title,
  subtitle,
  description,
  buttonText = 'Contact',
  buttonVariant = 'primary',
  showSocials = false,
  imageUrl,
  imageAlt = 'Hero image'
}) {
  return (
    <header
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor }}
    >
      {/* Navigation Bar */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Logo variant={logoVariant} />
          <Navigation variant={navVariant} className="hidden md:flex" />
          <div className="flex items-center gap-4">
            {showSocials && <SocialIcons variant={navVariant} />}
            <Button variant={buttonVariant} size="sm">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 flex-1 flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-6">
            {title && <h1 className="text-5xl md:text-6xl font-bold leading-tight">{title}</h1>}
            {subtitle && <h2 className="text-2xl md:text-3xl font-bold">{subtitle}</h2>}
            {description && <p className="text-lg text-grey-10 max-w-lg">{description}</p>}
            {buttonText && (
              <div>
                <Button variant={buttonVariant} size="lg">
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
          {imageUrl && (
            <div className="hidden md:block">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
