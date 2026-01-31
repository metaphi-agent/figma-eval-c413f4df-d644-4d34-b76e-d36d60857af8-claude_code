import { useParams, Link } from 'react-router-dom'
import { headerConfigs } from '../headerConfigs'
import HeroHeader from '../components/blocks/HeroHeader'
import MinimalHeader from '../components/blocks/MinimalHeader'
import CenteredHeader from '../components/blocks/CenteredHeader'

export default function HeaderPage() {
  const { id } = useParams()
  const headerId = parseInt(id)
  const config = headerConfigs[headerId]

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grey-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-grey-90">Header Not Found</h1>
          <p className="text-grey-60">Header #{id} doesn't exist</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    )
  }

  const renderHeader = () => {
    switch (config.type) {
      case 'hero':
        return <HeroHeader {...config.props} />
      case 'minimal':
        return <MinimalHeader {...config.props} />
      case 'centered':
        return <CenteredHeader {...config.props} />
      default:
        return <HeroHeader {...config.props} />
    }
  }

  return (
    <div className="relative">
      {/* Navigation to other headers */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {headerId > 1 && (
          <Link
            to={`/header-${headerId - 1}`}
            className="px-4 py-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-grey-90 font-medium"
          >
            ← Prev
          </Link>
        )}
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-white font-medium"
        >
          Gallery
        </Link>
        {headerId < 100 && (
          <Link
            to={`/header-${headerId + 1}`}
            className="px-4 py-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-grey-90 font-medium"
          >
            Next →
          </Link>
        )}
      </div>

      {/* Header Number Badge */}
      <div className="fixed bottom-4 left-4 z-50 px-4 py-2 bg-grey-90 rounded-lg shadow-lg text-white font-bold">
        #{headerId}
      </div>

      {/* Render the header */}
      {renderHeader()}
    </div>
  )
}
