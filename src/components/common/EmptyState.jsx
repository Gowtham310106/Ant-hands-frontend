// src/components/common/EmptyState.jsx
import { Link } from 'react-router-dom'

const EmptyState = ({ 
  title = "Nothing here yet", 
  message = "Start adding items to see them here",
  showAction = true 
}) => {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-anthands-pink rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-4xl">🎁</span>
      </div>
      <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-slate-600 mb-8 max-w-md mx-auto">
        {message}
      </p>
      {showAction && (
        <Link
          to="/collections/all"
          className="inline-block px-6 py-3 bg-anthands-pink hover:bg-anthands-rose text-slate-900 font-medium rounded-full transition-colors"
        >
          Browse Collections
        </Link>
      )}
    </div>
  )
}

export default EmptyState