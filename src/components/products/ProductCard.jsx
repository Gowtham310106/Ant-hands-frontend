// src/components/products/ProductCard.jsx - Updated with dark theme
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiTag, FiStar, FiShoppingCart, FiEye } from 'react-icons/fi'

const ProductCard = ({ product }) => {
  // Calculate discount percentage
  const discountPercentage = product.compareAtPrice 
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0

  // Generate stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar 
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating || 4.5) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
      />
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <Link to={`/products/${product.handle}`} className="block h-full">
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300 h-full flex flex-col border border-yellow-400/20 hover:border-yellow-400/60">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-black">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Top badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {/* Sale Badge */}
              {product.isOnSale && (
                <motion.div
                  initial={{ scale: 0, x: -10 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1"
                >
                  <FiTag className="w-3 h-3" />
                  <span>Sale</span>
                </motion.div>
              )}
              
              {/* Customizable Badge */}
              {product.isCustomizable && (
                <motion.div
                  initial={{ scale: 0, x: -10 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-900/90 backdrop-blur-sm text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-yellow-400/30"
                >
                  ✨ Customizable
                </motion.div>
              )}
            </div>
            
            {/* Quick Action Buttons - Appear on hover */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {/* Quick Add to Cart */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-4 py-2.5 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:scale-105 transition-all duration-300 whitespace-nowrap hidden md:flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  console.log('Added to cart:', product.title)
                }}
              >
                <FiShoppingCart className="w-4 h-4" />
                Add to Cart
              </motion.button>
              
              {/* Quick View */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="bg-gray-900/90 backdrop-blur-sm text-yellow-400 font-semibold px-4 py-2.5 rounded-full shadow-lg border border-yellow-400/30 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all duration-300 hidden md:flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  console.log('Quick view:', product.title)
                }}
              >
                <FiEye className="w-4 h-4" />
                Quick View
              </motion.button>
            </div>

            {/* Discount percentage - Right side */}
            {discountPercentage > 0 && (
              <div className="absolute top-3 right-3">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-black px-3 py-2 rounded-lg shadow-lg border border-yellow-400">
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
                <span className="text-xs font-medium text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full border border-yellow-400/20">
                  {product.category}
                </span>
              </div>
            )}
            
            {/* Product title */}
            <h3 className="font-display font-bold text-yellow-300 mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2 text-base md:text-lg">
              {product.title}
            </h3>
            
            {/* Short description */}
            <p className="text-gray-400 text-sm mb-3 line-clamp-2 flex-1">
              {product.shortDescription || 'Beautifully crafted personalized gift'}
            </p>
            
            {/* Rating and reviews */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {renderStars(product.rating || 4.5)}
                </div>
                <span className="text-xs text-gray-500">
                  ({product.ratingCount || 42})
                </span>
              </div>
              
              {/* Fast delivery indicator */}
              {product.fastDelivery && (
                <div className="flex items-center gap-1 text-xs text-yellow-400">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Fast Delivery</span>
                </div>
              )}
            </div>
            
            {/* Price and Action Section */}
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-black text-lg md:text-xl text-yellow-400">
                    ₹{product.price}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-gray-500 text-sm line-through">
                      ₹{product.compareAtPrice}
                    </span>
                  )}
                </div>
                
                {/* Mobile Quick Action */}
                <button
                  className="md:hidden p-2.5 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:scale-110 transition-transform shadow-lg"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Added to cart:', product.title)
                  }}
                >
                  <FiShoppingCart className="w-4 h-4" />
                </button>
              </div>
              
              {/* Stock indicator */}
              {product.stock && product.stock < 10 && (
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                        style={{ width: `${(product.stock / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-yellow-400">
                      Only {product.stock} left
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard