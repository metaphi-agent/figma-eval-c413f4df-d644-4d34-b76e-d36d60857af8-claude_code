import Logo from '../ui/Logo'
import Navigation from '../ui/Navigation'
import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'

export default function MinimalHeader({
  backgroundColor = '#ffffff',
  logoVariant = 'default',
  navVariant = 'default',
  title,
  subtitle,
  description,
  buttonText,
  buttonVariant = 'outline',
  showSocials = false,
  socialPosition = 'left',
  imageUrl,
  imageAlt = 'Header image',
  waveTop = false
}) {
  return (
    <header
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor }}
    >
      {/* Optional Wave Design */}
      {waveTop && (
        <div className="absolute top-0 right-0 w-full h-32 bg-blue-600 transform skew-y-3 origin-top-right"></div>
      )}

      {/* Navigation Bar */}
      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <Logo variant={logoVariant} />
          <Navigation variant={navVariant} className="hidden md:flex" />
          <div className="flex items-center gap-4">
            {buttonText && (
              <Button variant={buttonVariant} size="sm">
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 flex-1 flex items-center relative z-10">
        {showSocials && socialPosition === 'left' && (
          <div className="hidden lg:block absolute left-6 top-1/2 transform -translate-y-1/2">
            <SocialIcons variant={navVariant} orientation="vertical" />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6">
            {subtitle && <p className="text-orange-500 text-sm font-semibold uppercase tracking-wide">{subtitle}</p>}
            {title && <h1 className="text-5xl md:text-7xl font-bold text-grey-90 leading-tight">{title}</h1>}
            {description && <p className="text-lg text-grey-60 max-w-lg">{description}</p>}
            {buttonText && (
              <div className="flex items-center gap-4">
                <Button variant={buttonVariant} size="md">
                  {buttonText}
                </Button>
                <button className="w-12 h-12 rounded-full border-2 border-grey-90 flex items-center justify-center hover:bg-grey-10 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
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
