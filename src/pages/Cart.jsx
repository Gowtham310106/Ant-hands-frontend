// src/pages/Cart.jsx - Updated with dark theme
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CartContext } from '../context/CartContext'
import CartSummary from '../components/cart/CartSummary'
import { FiTrash2, FiShoppingBag, FiArrowLeft, FiHeart, FiPackage, FiTruck } from 'react-icons/fi'
import { MdLocalShipping, MdDiscount } from 'react-icons/md'

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useContext(CartContext)

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!')
      return
    }
    // Checkout will be handled by Link
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] bg-black py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Empty Cart Illustration */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-400/30">
                <span className="text-6xl">🛒</span>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-bounce border-2 border-yellow-400">
                <span className="text-xl text-black font-bold">0</span>
              </div>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Cart</span> is Empty
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
              Start adding some tiny gifts with giant emotions! Browse our collections to find the perfect personalized gift.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/collections/new-arrivals"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
              >
                <FiShoppingBag className="w-5 h-5" />
                Shop New Arrivals
                <FiArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/collections/all"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 font-bold rounded-full transition-all duration-300"
              >
                <FiHeart className="w-5 h-5" />
                Browse All Collections
              </Link>
            </div>
            
            {/* Decorative line */}
            <div className="mt-12">
              <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] bg-black py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Shopping Cart</span>
            </h1>
            <p className="text-gray-400 text-lg">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-yellow-400/30 shadow-lg">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-yellow-400/20">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-yellow-300">
                      Cart Items
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                      Review and manage your items
                    </p>
                  </div>
                  <button
                    onClick={clearCart}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-red-400/10 hover:from-red-500/20 hover:to-red-400/20 text-red-400 hover:text-red-300 font-medium rounded-full transition-all duration-200 border border-red-400/30 hover:border-red-400"
                  >
                    <FiTrash2 className="w-4 h-4" />
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-4 md:p-5 bg-gradient-to-r from-gray-900/50 to-black/50 hover:from-gray-800/50 hover:to-gray-900/50 rounded-xl md:rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                    >
                      <div className="flex gap-4 md:gap-6">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-lg md:rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-yellow-400/30 shadow-sm group-hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] transition-shadow">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.title}
                              className="w-full h-full object-cover"
                            />
                            {/* Item count badge */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-black rounded-full flex items-center justify-center shadow-lg border border-yellow-400">
                              {item.quantity}
                            </div>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row md:justify-between mb-2 md:mb-3">
                            <div className="mb-2 md:mb-0">
                              <h3 className="font-display text-lg font-bold text-yellow-300 mb-1 group-hover:text-yellow-400 transition-colors line-clamp-1">
                                {item.product.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-yellow-400">
                                  ₹{item.product.price * item.quantity}
                                </span>
                                <span className="text-gray-500 text-sm">
                                  ₹{item.product.price} × {item.quantity}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Customization Summary */}
                          {item.customizationValues && Object.keys(item.customizationValues).length > 0 && (
                            <div className="mb-3 md:mb-4">
                              <div className="text-xs font-semibold text-yellow-400 mb-1 flex items-center gap-1">
                                <span className="text-yellow-400">✨</span>
                                Personalization:
                              </div>
                              <div className="text-xs text-gray-400 space-y-1 bg-gray-900/50 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                                {Object.entries(item.customizationValues).map(([key, value]) => (
                                  <div key={key} className="flex justify-between">
                                    <span className="font-medium text-gray-300 capitalize">{key}:</span>
                                    <span className="text-gray-300">{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-yellow-400/30 bg-gray-900 text-yellow-400 hover:bg-yellow-400/10 rounded-l-lg transition-colors"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="w-10 h-8 md:w-12 md:h-9 flex items-center justify-center border-t border-b border-yellow-400/30 bg-gray-900 font-bold text-yellow-300">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-yellow-400/30 bg-gray-900 text-yellow-400 hover:bg-yellow-400/10 rounded-r-lg transition-colors"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="px-3 py-1.5 text-sm bg-gradient-to-r from-red-500/10 to-red-400/10 hover:from-red-500/20 hover:to-red-400/20 text-red-400 hover:text-red-300 font-medium rounded-full transition-all duration-200 border border-red-400/30"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-6 pt-6 border-t border-yellow-400/20">
                  <Link
                    to="/collections/all"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                  >
                    <FiArrowLeft className="w-4 h-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <CartSummary subtotal={cartTotal} onCheckout={handleCheckout} />
              
              {/* Promo Banner */}
              <div className="mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-5 text-black shadow-lg border border-yellow-400">
                <div className="flex items-center gap-3 mb-3">
                  <MdDiscount className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Special Offer!</h3>
                </div>
                <p className="text-sm mb-3">
                  Add 2 more items to get <span className="font-bold">20% OFF</span> your entire order!
                </p>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black rounded-full"
                    style={{ width: `${Math.min(cartItems.length / 5 * 100, 100)}%` }}
                  />
                </div>
                <p className="text-xs mt-2 text-center">
                  {Math.max(0, 5 - cartItems.length)} more to go!
                </p>
              </div>
              
              {/* Shipping Info */}
              <div className="mt-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-5 border border-yellow-400/30 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MdLocalShipping className="w-6 h-6 text-yellow-400" />
                  <h3 className="font-bold text-yellow-300">Free Shipping</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Add <span className="font-bold text-yellow-400">₹{Math.max(0, 499 - cartTotal)}</span> more to get FREE shipping!
                </p>
                <div className="h-2 bg-yellow-400/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                    style={{ width: `${Math.min(cartTotal / 499 * 100, 100)}%` }}
                  />
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <FiTruck className="w-3 h-3" />
                  <span>Standard delivery: 3-7 days</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Cart