import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../components/ui/Logo'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const totalHeaders = 100

  const headers = Array.from({ length: totalHeaders }, (_, i) => i + 1)

  const filteredHeaders = headers.filter(id =>
    id.toString().includes(searchQuery)
  )

  return (
    <div className="min-h-screen bg-grey-5">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo />
              <div>
                <h1 className="text-2xl font-bold text-grey-90">Website Headers Collection</h1>
                <p className="text-sm text-grey-60">101+ Free Headers for Web Design</p>
              </div>
            </div>
            <a
              href="https://www.figma.com/design/Xp265ZvpH5p8xlI33C0bLQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View in Figma
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Search and Filter */}
        <div className="mb-12 max-w-2xl">
          <input
            type="text"
            placeholder="Search headers by number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border-2 border-grey-20 focus:border-blue-600 outline-none text-lg transition-colors"
          />
          <p className="mt-2 text-grey-60 text-sm">
            Showing {filteredHeaders.length} of {totalHeaders} headers
          </p>
        </div>

        {/* Headers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredHeaders.map((id) => (
            <Link
              key={id}
              to={`/header-${id}`}
              className="group relative aspect-video bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-grey-10 hover:border-blue-600"
            >
              {/* Preview Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity"></div>

              {/* Header Number */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-grey-90 text-white rounded-lg font-bold text-sm">
                #{id}
              </div>

              {/* View Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="px-6 py-3 bg-white rounded-lg shadow-lg font-medium text-grey-90">
                  View Header →
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold">Header {id}</h3>
                <p className="text-grey-10 text-sm">Click to view design</p>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredHeaders.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-grey-60">No headers found</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-grey-20 mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-grey-60">
          <p>101+ Free Website Headers for Web Design v1.2</p>
          <p className="text-sm mt-2">
            Beautiful and creative website headers for web designers. Ready-made header templates for your projects.
          </p>
          <p className="text-xs mt-4">
            * Pictures are used as an example. All rights to them belong to their copyright holders.
          </p>
        </div>
      </footer>
    </div>
  )
}
