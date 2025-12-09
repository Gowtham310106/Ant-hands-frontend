// src/components/products/ProductInfo.jsx - Updated with dark theme
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CartContext } from '../../context/CartContext'
import { FiCheck, FiInfo, FiUpload, FiPackage, FiTruck, FiShield, FiTag } from 'react-icons/fi'

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [customizationValues, setCustomizationValues] = useState({})
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleCustomizationChange = (name, value) => {
    setCustomizationValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddToCart = () => {
    // Validate required customization fields
    if (product.isCustomizable && product.customizationFields) {
      const requiredFields = product.customizationFields.filter(field => 
        field.type !== 'textarea' || field.name === 'message'
      )
      const missingFields = requiredFields.filter(
        field => !customizationValues[field.name]?.trim()
      )
      
      if (missingFields.length > 0) {
        alert(`Please fill in: ${missingFields.map(f => f.label).join(', ')}`)
        return
      }
    }

    addToCart(product, quantity, customizationValues)
    
    // Show success feedback
    const event = new CustomEvent('cart:add', { 
      detail: { product, quantity } 
    })
    window.dispatchEvent(event)
    
    // Reset form
    setQuantity(1)
    setCustomizationValues({})
    
    // Navigate to cart
    navigate('/cart')
  }

  const handleBuyNow = () => {
    handleAddToCart()
    navigate('/checkout')
  }

  // Calculate discount
  const discountPercentage = product.compareAtPrice 
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0

  return (
    <div className="space-y-8">
      {/* Breadcrumbs - Updated */}
      <div className="flex items-center text-sm text-gray-400">
        <Link to="/" className="hover:text-yellow-400 transition-colors">
          Home
        </Link>
        <span className="mx-2 text-gray-600">/</span>
        <Link 
          to={`/collections/${product.collectionHandle}`} 
          className="hover:text-yellow-400 transition-colors capitalize"
        >
          {product.collectionHandle?.replace(/-/g, ' ') || 'Collections'}
        </Link>
        <span className="mx-2 text-gray-600">/</span>
        <span className="text-yellow-400 font-medium">{product.title}</span>
      </div>

      {/* Title - Updated */}
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        {product.title}
      </h1>

      {/* Price Section - Updated */}
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-3xl md:text-4xl font-bold text-yellow-400">
            ₹{product.price}
          </span>
          {product.compareAtPrice && (
            <>
              <span className="text-xl text-gray-500 line-through">
                ₹{product.compareAtPrice}
              </span>
              {discountPercentage > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-sm font-bold px-3 py-1.5 rounded-full shadow-lg"
                >
                  Save {discountPercentage}%
                </motion.span>
              )}
            </>
          )}
        </div>
        
        {/* Tax info */}
        <p className="text-sm text-gray-500">
          Inclusive of all taxes. No hidden charges.
        </p>
      </div>

      {/* Rating and reviews - Added */}
      {product.rating && (
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FiTag 
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating || 4.5) ? 'fill-yellow-400' : 'text-gray-600'}`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            {product.rating.toFixed(1)} ({product.ratingCount || 42} reviews)
          </span>
        </div>
      )}

      {/* Short Description - Updated */}
      <p className="text-lg text-gray-300 leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Customization Fields - Updated */}
      {product.isCustomizable && product.customizationFields && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 pt-6 border-t border-yellow-400/20"
        >
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-full"></div>
            <h3 className="font-display text-xl font-semibold text-yellow-300">
              Personalize This Gift
            </h3>
          </div>
          
          {product.customizationFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                {field.label}
                {field.helperText && (
                  <span className="ml-2 text-xs text-gray-500">
                    <FiInfo className="inline mr-1" />
                    {field.helperText}
                  </span>
                )}
              </label>
              
              {field.type === 'text' && (
                <input
                  type="text"
                  value={customizationValues[field.name] || ''}
                  onChange={(e) => handleCustomizationChange(field.name, e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-yellow-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200 hover:border-yellow-400/50"
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              )}
              
              {field.type === 'textarea' && (
                <textarea
                  value={customizationValues[field.name] || ''}
                  onChange={(e) => handleCustomizationChange(field.name, e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-yellow-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200 hover:border-yellow-400/50"
                  placeholder={`Write your ${field.label.toLowerCase()}`}
                />
              )}
              
              {field.type === 'select' && (
                <select
                  value={customizationValues[field.name] || ''}
                  onChange={(e) => handleCustomizationChange(field.name, e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-yellow-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-200 hover:border-yellow-400/50 appearance-none"
                >
                  <option value="" className="text-gray-500">
                    Select {field.label.toLowerCase()}
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option} className="text-white bg-gray-900">
                      {option}
                    </option>
                  ))}
                </select>
              )}
              
              {field.type === 'file' && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border-2 border-dashed border-yellow-400/30 rounded-lg p-6 text-center bg-gray-900/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0]
                      if (file) {
                        handleCustomizationChange(field.name, file.name)
                      }
                    }}
                    className="hidden"
                    id={`file-${field.name}`}
                  />
                  <label
                    htmlFor={`file-${field.name}`}
                    className="cursor-pointer block"
                  >
                    <div className="text-yellow-400 mb-3">
                      <FiUpload className="w-8 h-8 mx-auto" />
                    </div>
                    <span className="text-sm text-gray-400">
                      {customizationValues[field.name] 
                        ? (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 text-yellow-400"
                          >
                            <FiCheck />
                            {customizationValues[field.name]}
                          </motion.span>
                        )
                        : 'Click to upload your photo (Max 5MB)'}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      JPG, PNG formats • Recommended size: 1000x1000px
                    </p>
                  </label>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      )}

      {/* Quantity Selector - Updated */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-300">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-yellow-400/30 rounded-lg bg-gray-900/50">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2.5 text-yellow-400 hover:bg-yellow-400/10 rounded-l-lg transition-colors"
            >
              -
            </button>
            <span className="px-4 py-2.5 min-w-[60px] text-center font-medium text-white border-x border-yellow-400/20">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2.5 text-yellow-400 hover:bg-yellow-400/10 rounded-r-lg transition-colors"
            >
              +
            </button>
          </div>
          <span className="text-sm text-gray-400">
            {product.isCustomizable ? '✨ Custom made for you' : '📦 Ready to ship'}
          </span>
        </div>
      </div>

      {/* Action Buttons - Updated */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-yellow-400/20">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="flex-1 py-3.5 px-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
        >
          Add to Cart
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBuyNow}
          className="flex-1 py-3.5 px-6 bg-gray-900 border-2 border-yellow-400/30 hover:border-yellow-400 text-yellow-400 hover:text-yellow-300 hover:bg-gray-800 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg"
        >
          Buy Now
        </motion.button>
      </div>

      {/* Product Details - Updated */}
      <div className="space-y-3 pt-6 border-t border-yellow-400/20">
        <div className="flex items-center text-sm">
          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
            <FiCheck className="w-3 h-3 text-green-400" />
          </div>
          <span className="text-gray-300">Free shipping on orders over ₹499</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
            <FiTruck className="w-3 h-3 text-yellow-400" />
          </div>
          <span className="text-gray-300">Delivery in 3-7 business days</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
            <FiShield className="w-3 h-3 text-blue-400" />
          </div>
          <span className="text-gray-300">Secure payment options</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
            <FiPackage className="w-3 h-3 text-purple-400" />
          </div>
          <span className="text-gray-300">Custom packaging included</span>
        </div>
      </div>

      {/* Stock indicator - Added */}
      {product.stock && product.stock < 10 && (
        <div className="pt-4">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-yellow-400">Low Stock Alert</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">
                Only {product.stock} items left
              </span>
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden ml-4">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                  style={{ width: `${(product.stock / 10) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductInfo