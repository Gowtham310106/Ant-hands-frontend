// src/components/cart/CartSummary.jsx - Updated with theme colors
import { Link } from 'react-router-dom'
import { FiArrowRight, FiTruck, FiShield, FiGift } from 'react-icons/fi'

const CartSummary = ({ subtotal, onCheckout }) => {
  const shippingFreeThreshold = 499
  const shippingCost = subtotal >= shippingFreeThreshold ? 0 : 49
  const total = subtotal + shippingCost
  const needsForFreeShipping = Math.max(0, shippingFreeThreshold - subtotal)

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-amber-200 shadow-lg">
      <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
        Order Summary
      </h3>
      
      {/* Order Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-bold text-gray-900 text-lg">₹{subtotal}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <div className="text-right">
            {shippingCost === 0 ? (
              <span className="font-bold text-green-600">FREE 🎉</span>
            ) : (
              <span className="font-medium text-gray-900">₹{shippingCost}</span>
            )}
          </div>
        </div>
        
        {/* Free Shipping Progress */}
        {shippingCost > 0 && (
          <div className="pt-2">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Add ₹{needsForFreeShipping} more for free shipping</span>
              <span>{Math.round((subtotal / shippingFreeThreshold) * 100)}%</span>
            </div>
            <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                style={{ width: `${Math.min((subtotal / shippingFreeThreshold) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}
        
        {/* Total */}
        <div className="pt-4 border-t border-amber-200">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900 text-lg">Total</span>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-black text-amber-700">₹{total}</div>
              {shippingCost > 0 && (
                <div className="text-xs text-gray-500">Incl. ₹{shippingCost} shipping</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-6">
        <button
          onClick={onCheckout}
          className="group w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
        >
          <span className="text-lg">Proceed to Checkout</span>
          <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
        </button>
        
        <Link to="/collections/all">
          <button className="w-full border-2 border-amber-500 text-amber-600 hover:text-amber-700 hover:bg-amber-50 font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
            <span>Continue Shopping</span>
          </button>
        </Link>
      </div>

      {/* Trust & Shipping Info */}
      <div className="pt-6 border-t border-amber-200">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FiShield className="w-3 h-3 text-white" />
            </div>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FiTruck className="w-3 h-3 text-white" />
            </div>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FiGift className="w-3 h-3 text-white" />
            </div>
            <span>Gift Wrapping</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">✓</span>
            </div>
            <span>Easy Returns</span>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-700">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
            <span className="font-medium">Free shipping</span>
            <span className="mx-2">•</span>
            <span>On orders over ₹499</span>
          </div>
          <div className="flex items-center text-gray-700">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            <span className="font-medium">Express delivery</span>
            <span className="mx-2">•</span>
            <span>3-7 business days</span>
          </div>
          <div className="flex items-center text-gray-700">
            <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
            <span className="font-medium">Gift option</span>
            <span className="mx-2">•</span>
            <span>Free gift wrapping available</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-4 pt-4 border-t border-amber-200">
          <p className="text-xs text-gray-600 mb-2">We accept:</p>
          <div className="flex gap-2">
            {['💳', '📱', '🏦', '🛡️'].map((icon, i) => (
              <div key={i} className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-sm">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Code (Optional) */}
      <div className="mt-6 pt-6 border-t border-amber-200">
        <p className="text-sm font-medium text-gray-900 mb-2">Have a promo code?</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-1 px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-lg transition-colors text-sm">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSummary