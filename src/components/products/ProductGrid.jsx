// src/components/products/ProductGrid.jsx - Updated with dark theme
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'
import { FiPackage, FiFilter } from 'react-icons/fi'

const ProductGrid = ({ products, title, description, emptyMessage }) => {
  if (!products || products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 md:py-16"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border-2 border-yellow-400/30">
          <FiPackage className="text-3xl md:text-4xl text-yellow-400" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-2 md:mb-3">
          {emptyMessage || 'No products found'}
        </h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Try adjusting your filters or browse other collections
        </p>
        
        {/* Decorative elements */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-yellow-400/50 rounded-full"></div>
            <span>Check our featured collections</span>
          </div>
          <div className="h-4 w-px bg-yellow-400/20"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FiFilter className="w-3 h-3 text-yellow-400" />
            <span>Adjust filters</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          {title && (
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              {title}
              <div className="h-0.5 w-20 md:w-24 mt-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" />
            </h2>
          )}
          {description && (
            <p className="text-gray-400 text-lg max-w-3xl">{description}</p>
          )}
        </motion.div>
      )}

      {/* Optimized Grid - Updated for dark theme */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.4, 
              delay: Math.min(index * 0.05, 0.4),
              ease: "easeOut" 
            }}
            className="h-full"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Grid stats and info - Added */}
      {products.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-yellow-400/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-500">
              Showing <span className="text-yellow-400 font-semibold">{products.length}</span> products
            </div>
            
            {/* Sort and filter indicators */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-2 h-2 rounded-full bg-yellow-400/30"></div>
                  ))}
                </div>
                <span>4.5+ Avg Rating</span>
              </div>
              
              <div className="hidden md:block h-4 w-px bg-yellow-400/20"></div>
              
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-2 h-2 rounded-full bg-green-500/70 animate-pulse"></div>
                <span>In Stock</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ProductGrid