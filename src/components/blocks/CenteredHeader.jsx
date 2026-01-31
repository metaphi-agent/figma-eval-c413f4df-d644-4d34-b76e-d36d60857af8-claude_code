import Logo from '../ui/Logo'
import Navigation from '../ui/Navigation'
import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'

export default function CenteredHeader({
  backgroundImage,
  backgroundColor = '#f3f4f6',
  overlay = false,
  logoVariant = 'white',
  title,
  subtitle,
  description,
  buttonText,
  buttonVariant = 'gradient',
  showSocials = false,
  searchBar = false
}) {
  return (
    <header
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-40"></div>}

      {/* Social Icons - Left Side */}
      {showSocials && (
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
          <SocialIcons variant={logoVariant} orientation="vertical" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Logo - Top Left or Top Center */}
        <div className="container mx-auto px-6 py-6">
          <Logo variant={logoVariant} />
        </div>

        {/* Centered Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6 px-6 max-w-4xl">
            {title && (
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-xl md:text-2xl text-blue-300">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-lg text-grey-10 max-w-2xl mx-auto">
                {description}
              </p>
            )}

            {/* Social Icons Below Title */}
            {showSocials && (
              <div className="flex justify-center">
                <SocialIcons variant={logoVariant} />
              </div>
            )}

            {/* Search Bar */}
            {searchBar && (
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center bg-white rounded-full overflow-hidden shadow-xl">
                  <input
                    type="text"
                    placeholder="Search the Music Bed and find the perfect song"
                    className="flex-1 px-6 py-4 text-grey-90 outline-none"
                  />
                  <Button variant="orange" className="rounded-full m-1">
                    SEARCH
                  </Button>
                </div>
              </div>
            )}

            {/* CTA Button */}
            {buttonText && !searchBar && (
              <div>
                <Button variant={buttonVariant} size="lg">
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pb-8 flex justify-center">
          <button className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
