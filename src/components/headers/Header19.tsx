import { Logo, Nav, Button, PlayIcon } from '../ui';

/**
 * Header 19 - Blue SaaS Email App
 * Features: Blue gradient background, mailbox illustration, video play button
 */
export function Header19() {
  return (
    <header className="relative w-full overflow-hidden">
      {/* Top section - Blue gradient */}
      <div className="relative bg-[#2196F3] min-h-[560px]">
        {/* Mailbox illustration area */}
        <div className="absolute right-20 top-40 w-[400px] h-[350px]">
          {/* Mailbox */}
          <div className="absolute right-0 top-0 w-48 h-64">
            {/* Post */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-32 bg-[#0D47A1]" />
            {/* Mailbox body */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-[#1565C0] to-[#0D47A1] rounded-t-lg">
              {/* Flag */}
              <div className="absolute -top-8 right-8 w-2 h-12 bg-[#FF5722]">
                <div className="absolute top-0 left-0 w-4 h-3 bg-[#FF5722]" />
              </div>
              {/* @ Symbol */}
              <div className="absolute top-8 right-8 text-[#1E88E5]/50 text-8xl font-bold">@</div>
            </div>
          </div>

          {/* Flying envelopes */}
          <div className="absolute left-0 top-20 w-16 h-12 bg-white/80 transform -rotate-12 shadow-lg">
            <div className="absolute inset-0 border-b-[24px] border-l-[32px] border-r-[32px] border-transparent border-b-white/60" />
          </div>
          <div className="absolute left-20 top-10 w-12 h-9 bg-white/70 transform rotate-6 shadow-md">
            <div className="absolute inset-0 border-b-[18px] border-l-[24px] border-r-[24px] border-transparent border-b-white/50" />
          </div>
          <div className="absolute left-32 top-24 w-14 h-10 bg-white/75 transform -rotate-6 shadow-lg" />
          <div className="absolute left-48 top-8 w-10 h-8 bg-white/60 transform rotate-12 shadow-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-8">
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Logo variant="light" />

            <Nav variant="light" />

            <Button
              variant="primary"
              size="sm"
              className="bg-[#4CAF50] hover:bg-[#43A047]"
            >
              Buy Now
            </Button>
          </div>

          {/* Hero content */}
          <div className="mt-24 text-center max-w-2xl mx-auto">
            <h1 className="text-[56px] font-bold text-white leading-tight mb-4">
              The Power Email App
            </h1>
            <p className="text-xl text-white/90 mb-12">
              for busy professionals, like you
            </p>

            {/* Play button */}
            <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto hover:scale-105 transition-transform shadow-lg">
              <PlayIcon className="text-[#2196F3] ml-1" size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section - Darker blue */}
      <div className="bg-[#1976D2] py-16">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Built for Heavy Email Users
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            When you are serious about email, Postbox has the tools you need to power through mountains of messages
          </p>
        </div>
      </div>
    </header>
  );
}
