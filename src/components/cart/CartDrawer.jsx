// src/components/cart/CartDrawer.jsx - Updated with theme colors
import { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiShoppingCart, FiTrash2, FiArrowRight } from 'react-icons/fi'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useContext(CartContext)
  
  if (!isOpen) return null

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FiShoppingCart className="w-5 h-5 text-white" />
                    </div>
                    {cartItems.length > 0 && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg">
                        {cartItems.length}
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900">
                      Your Shopping Cart
                    </h2>
                    <p className="text-sm text-gray-600">
                      {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-white border border-amber-300 text-amber-600 hover:text-amber-700 hover:bg-amber-50 transition-colors shadow-sm"
                  aria-label="Close cart"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12 md:py-16 px-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <FiShoppingCart className="text-3xl text-amber-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                      Your Cart is Empty
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                      Add some personalized gifts to get started!
                    </p>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="p-4 md:p-6 space-y-4">
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={`${item.product.id}-${JSON.stringify(item.customizationValues)}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group p-4 bg-gradient-to-r from-amber-50/50 to-orange-50/50 hover:from-amber-100/50 hover:to-orange-100/50 rounded-xl md:rounded-2xl border border-amber-200 hover:border-amber-300 transition-all duration-200"
                      >
                        <div className="flex gap-4">
                          {/* Product Image */}
                          <div className="flex-shrink-0 relative">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300">
                              <img
                                src={item.product.images[0]}
                                alt={item.product.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Quantity badge */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg">
                              {item.quantity}
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-display font-bold text-gray-900 line-clamp-2 group-hover:text-amber-700 transition-colors">
                                {item.product.title}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-full transition-colors flex-shrink-0 ml-2"
                                aria-label="Remove item"
                              >
                                <FiTrash2 className="w-4 h-4" />
                              </button>
                            </div>
                            
                            {/* Price */}
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <span className="text-lg font-bold text-amber-700">
                                  ₹{item.product.price * item.quantity}
                                </span>
                                <span className="text-sm text-gray-500 ml-2">
                                  (₹{item.product.price} × {item.quantity})
                                </span>
                              </div>
                            </div>
                            
                            {/* Customization Summary */}
                            {item.customizationValues && Object.keys(item.customizationValues).length > 0 && (
                              <div className="mb-3">
                                <div className="text-xs font-semibold text-gray-900 mb-1 flex items-center gap-1">
                                  <span className="text-amber-600">✨</span>
                                  Personalization:
                                </div>
                                <div className="text-xs text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-amber-200">
                                  {Object.entries(item.customizationValues).map(([key, value]) => (
                                    <div key={key} className="flex justify-between">
                                      <span className="font-medium capitalize">{key}:</span>
                                      <span className="text-gray-800">{value}</span>
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
                                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-amber-400 bg-white text-amber-600 hover:bg-amber-50 rounded-l-lg transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>
                                <span className="w-10 h-8 md:w-12 md:h-9 flex items-center justify-center border-t border-b border-amber-400 bg-white font-bold text-gray-900">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-amber-400 bg-white text-amber-600 hover:bg-amber-50 rounded-r-lg transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer - Only show when cart has items */}
              {cartItems.length > 0 && (
                <div className="border-t border-amber-200 bg-gradient-to-b from-white to-amber-50/30">
                  <div className="p-4 md:p-6">
                    {/* Subtotal and clear cart */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl md:text-3xl font-black text-gray-900">
                          ₹{cartTotal}
                        </div>
                        <p className="text-sm text-gray-600">Subtotal</p>
                      </div>
                      <button
                        onClick={handleClearCart}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 text-rose-600 hover:text-rose-700 rounded-full transition-all duration-200 border border-rose-200"
                      >
                        <FiTrash2 className="w-4 h-4" />
                        Clear Cart
                      </button>
                    </div>
                    
                    {/* Shipping notice */}
                    <div className="mb-6 p-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border border-amber-200">
                      <p className="text-sm text-gray-700 text-center">
                        🚀 Free shipping on orders over <span className="font-bold text-amber-700">₹499</span>
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Link to="/checkout">
                        <button
                          onClick={onClose}
                          className="group w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                          <span>Proceed to Checkout</span>
                          <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                      
                      <Link to="/cart">
                        <button
                          onClick={onClose}
                          className="w-full border-2 border-amber-500 text-amber-600 hover:text-amber-700 hover:bg-amber-50 font-bold py-3.5 md:py-4 rounded-xl transition-all duration-300"
                        >
                          View Full Cart
                        </button>
                      </Link>
                    </div>
                    
                    {/* Continue shopping */}
                    <div className="text-center mt-4 pt-4 border-t border-amber-200">
                      <button
                        onClick={onClose}
                        className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
                      >
                        ← Continue Shopping
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer