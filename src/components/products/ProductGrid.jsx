// src/components/products/ProductGrid.jsx - Optimized for mobile
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

const ProductGrid = ({ products, title, description }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-anthands-pink rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">📦</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">No products found</h3>
        <p className="text-slate-600">Try adjusting your filters or browse other collections</p>
      </div>
    )
  }

  return (
    <div>
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
          )}
          {description && (
            <p className="text-slate-600">{description}</p>
          )}
        </div>
      )}

      {/* Optimized Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: Math.min(index * 0.05, 0.5), // Stagger animation but cap delay
              ease: "easeOut" 
            }}
            className="h-full"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid