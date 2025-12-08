// src/components/products/ProductCard.jsx - Updated with theme colors
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiTag, FiStar, FiShoppingCart } from 'react-icons/fi'
import { MdLocalOffer } from 'react-icons/md'

const ProductCard = ({ product }) => {
  // Calculate discount percentage
  const discountPercentage = product.compareAtPrice 
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <Link to={`/products/${product.handle}`} className="block h-full">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-amber-100">
          {/* Image Container with theme gradient overlay */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Sale Badge - Theme colored */}
            {product.isOnSale && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-3 left-3"
              >
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <FiTag className="w-3 h-3" />
                  <span>Sale</span>
                </div>
              </motion.div>
            )}
            
            {/* Customizable Badge - Theme colored */}
            {product.isCustomizable && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-3 right-3"
              >
                <div className="bg-white/95 backdrop-blur-sm text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-amber-200">
                  ✨ Custom
                </div>
              </motion.div>
            )}
            
            {/* Quick Add to Cart Button - Appears on hover */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap hidden md:flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                // Add to cart logic here
                console.log('Added to cart:', product.title)
              }}
            >
              <FiShoppingCart className="w-4 h-4" />
              Quick Add
            </motion.button>

            {/* Discount percentage - Large for visibility */}
            {discountPercentage > 0 && (
              <div className="absolute bottom-4 right-3">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-black px-2 py-1 rounded-lg shadow-lg">
                  {discountPercentage}% OFF
                </div>
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="p-4 md:p-5 flex-1 flex flex-col">
            {/* Category tag */}
            {product.category && (
              <div className="mb-2">
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            )}
            
            {/* Product title */}
            <h3 className="font-display font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2 text-base md:text-lg">
              {product.title}
            </h3>
            
            {/* Short description */}
            <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
              {product.shortDescription || 'Beautifully crafted personalized gift'}
            </p>
            
            {/* Rating stars */}
            <div className="flex items-center gap-1 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating || 4.5) ? 'fill-amber-400' : ''}`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">
                ({product.ratingCount || 42})
              </span>
            </div>
            
            {/* Price Section */}
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-black text-lg md:text-xl text-amber-700">
                    ₹{product.price}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-gray-400 text-sm line-through">
                      ₹{product.compareAtPrice}
                    </span>
                  )}
                </div>
                
                {/* Mobile Quick Action */}
                <button
                  className="md:hidden p-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:scale-110 transition-transform"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    // Add to cart logic here
                    console.log('Added to cart:', product.title)
                  }}
                >
                  <FiShoppingCart className="w-4 h-4" />
                </button>
              </div>
              
              {/* Stock indicator */}
              {product.stock && product.stock < 10 && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-amber-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                        style={{ width: `${(product.stock / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-amber-600">
                      Only {product.stock} left
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard