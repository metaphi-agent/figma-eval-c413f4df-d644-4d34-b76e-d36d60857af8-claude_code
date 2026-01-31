import { SocialIcons, MenuIcon, ShoppingBagIcon } from '../ui';

/**
 * Header 21 - Nature Shop
 * Features: Full-bleed nature image, large typography overlay, sidebar nav
 */
export function Header21() {
  return (
    <header className="relative w-full h-[700px] overflow-hidden">
      {/* Background nature image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1440&h=700&fit=crop')`,
        }}
      />

      {/* Large typography overlay */}
      <div className="absolute inset-0 flex items-start justify-center pt-12 pointer-events-none">
        <h1 className="text-[180px] font-black text-white leading-none tracking-wider uppercase"
          style={{
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
          }}>
          YOUR SHOP
        </h1>
      </div>

      {/* Sidebar navigation */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-black/10 backdrop-blur-sm flex flex-col items-center py-8">
        <MenuIcon className="text-white mb-auto" size={24} />

        {/* Rotated logo */}
        <div className="transform -rotate-90 whitespace-nowrap text-white/80 text-sm tracking-widest mb-auto mt-8">
          <span className="font-bold">Site</span>Logo
        </div>

        {/* Social icons vertical */}
        <SocialIcons
          variant="light"
          icons={['facebook', 'twitter', 'linkedin']}
          direction="vertical"
          className="mt-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-8 h-full flex flex-col">
        {/* Top navigation */}
        <div className="flex items-center justify-between pl-16">
          {/* Empty space for sidebar */}
          <div />

          {/* Logo centered */}
          <div className="flex gap-1 absolute left-1/2 -translate-x-1/2 top-6">
            <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#EC008C] to-[#FC6767]" />
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-[#E65C00] to-[#F9D423]" />
            <div className="w-1 h-3 rounded-full bg-gradient-to-b from-[#00D2FF] to-[#3A7BD5]" />
          </div>

          {/* Shopping bag */}
          <button className="w-14 h-14 rounded-xl border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
            <ShoppingBagIcon className="text-white" size={24} />
          </button>
        </div>

        {/* Description text - bottom left */}
        <div className="mt-auto pl-20 pb-8 max-w-md">
          <p className="text-white/90 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sagittis malesuada dictum vulputate lorem lectus nisl pulvinar. Ultrices nibh tortor commodo est sapien. Orci, elementum vel urna bibendum. Habitasse massa varius aliquet erat consectetur ante quis cum est. In aliquam in purus sit in neque dui.
          </p>
        </div>
      </div>
    </header>
  );
}
