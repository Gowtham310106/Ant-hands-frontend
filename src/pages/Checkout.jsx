// src/pages/Checkout.jsx - Updated with dark theme
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import CheckoutForm from '../components/checkout/CheckoutForm'
import OrderSummary from '../components/checkout/OrderSummary'
import { CartContext } from '../context/CartContext'
import { FiShoppingBag, FiHome, FiGift, FiChevronRight, FiShield, FiLock } from 'react-icons/fi'
import { MdCheckCircle, MdLocalShipping, MdEmail, MdBrush, MdPhone } from 'react-icons/md'

const Checkout = () => {
  const { cartItems, clearCart, cartTotal } = useContext(CartContext)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNumber, setOrderNumber] = useState(`AH${Date.now().toString().slice(-6)}`)
  const navigate = useNavigate()

  const handleSubmitOrder = (formData) => {
    // Simple validation
    if (!formData.email || !formData.firstName || !formData.address1) {
      alert('Please fill in all required fields')
      return
    }

    // Generate order number
    const newOrderNumber = `AH${Date.now().toString().slice(-6)}`
    setOrderNumber(newOrderNumber)
    
    // Show success message
    setOrderPlaced(true)
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart()
    }, 1000)
    
    // Log order details
    console.log('Order placed:', { 
      orderNumber: newOrderNumber,
      formData, 
      items: cartItems,
      total: cartTotal
    })
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-[60vh] bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Mobile optimized empty cart */}
            <div className="relative mb-6 md:mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-400/30">
                <span className="text-4xl md:text-6xl">🛒</span>
              </div>
              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-bounce border border-yellow-400">
                <span className="text-sm md:text-xl text-black font-bold">0</span>
              </div>
            </div>
            
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4 px-2">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Cart</span> is Empty
            </h1>
            <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-10 max-w-md mx-auto px-4">
              Add some personalized gifts to your cart before proceeding to checkout.
            </p>
            <button
              onClick={() => navigate('/collections/all')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-full max-w-xs mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
            >
              <FiShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Continue Shopping</span>
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-[80vh] bg-black py-8 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            {/* Success Animation - Mobile optimized */}
            <div className="relative mb-6 md:mb-8">
              <div className="w-28 h-28 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-yellow-400">
                <MdCheckCircle className="text-5xl md:text-8xl text-black" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg border border-yellow-400"
              >
                <span className="font-black text-xs md:text-sm">SUCCESS!</span>
              </motion.div>
            </div>
            
            {/* Main heading - Responsive */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 px-2">
              Order <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Confirmed!</span>
            </h1>
            
            {/* Order Number - Mobile optimized */}
            <div className="inline-block bg-gradient-to-r from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-yellow-400/30 shadow-lg max-w-full">
              <p className="text-gray-400 text-sm md:text-lg mb-1 md:mb-2">Your order number is:</p>
              <p className="text-2xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent break-all">
                #{orderNumber}
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">Save this for tracking your order</p>
            </div>
            
            {/* Thank you message */}
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              Thank you for your order! We've sent a confirmation email with all the details. 
              Our team will start working on your personalized gifts right away. 🎨
            </p>
            
            {/* Order Process Steps - Mobile grid */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl md:rounded-3xl p-4 md:p-8 mb-8 md:mb-12 border border-yellow-400/30 shadow-lg">
              <h3 className="font-display text-xl md:text-2xl font-bold text-yellow-300 mb-6 md:mb-8 text-center">
                What happens next?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { 
                    icon: <MdEmail className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />, 
                    title: "Confirmation", 
                    desc: "Email sent",
                    delay: 0.1
                  },
                  { 
                    icon: <MdBrush className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />, 
                    title: "Personalization", 
                    desc: "Reviewing customizations",
                    delay: 0.2
                  },
                  { 
                    icon: <FiGift className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />, 
                    title: "Crafting", 
                    desc: "Handcrafting gift",
                    delay: 0.3
                  },
                  { 
                    icon: <MdLocalShipping className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />, 
                    title: "Shipping", 
                    desc: "3-7 days delivery",
                    delay: 0.4
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: step.delay }}
                    className="text-center p-3 md:p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl md:rounded-2xl border border-yellow-400/20"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-2 md:mb-4 bg-gradient-to-br from-yellow-500/10 to-yellow-400/10 rounded-lg md:rounded-xl flex items-center justify-center border border-yellow-400/30">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-yellow-300 text-sm md:text-base mb-1 md:mb-2">{step.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{step.desc}</p>
                    <div className="mt-2 md:mt-4 text-xs font-medium text-yellow-400">
                      Step {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons - Mobile stack */}
            <div className="flex flex-col gap-3 md:gap-4 justify-center max-w-sm mx-auto">
              <button
                onClick={() => navigate('/collections/all')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
              >
                <FiShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Continue Shopping</span>
                <FiChevronRight className="w-4 h-4 ml-auto md:ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-full border-2 border-yellow-400/30 hover:border-yellow-400 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 font-bold rounded-full transition-all duration-300 active:scale-95"
              >
                <FiHome className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Back to Home</span>
              </button>
            </div>
            
            {/* Contact Support - Mobile optimized */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-yellow-400/20 px-2">
              <p className="text-gray-400 text-sm md:text-base mb-2">Need help with your order?</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <p className="text-sm md:text-lg font-bold text-yellow-400 flex items-center gap-1">
                  <MdEmail className="w-4 h-4" />
                  support@anthands.in
                </p>
                <p className="text-sm md:text-lg font-bold text-yellow-400 flex items-center gap-1">
                  <MdPhone className="w-4 h-4" />
                  +91 98765 43210
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] bg-black py-6 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header - Mobile optimized */}
          <div className="mb-6 md:mb-12 text-center">
            <h1 className="font-display text-2xl md:text-4xl lg:text-6xl font-black text-white mb-2 md:mb-3 px-2">
              Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Checkout</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">
              Complete your order for personalized gifts that create lasting memories
            </p>
          </div>

          {/* Progress Indicator - Mobile horizontal scroll */}
          <div className="mb-6 md:mb-12 overflow-x-auto pb-2">
            <div className="flex items-center justify-start md:justify-center min-w-max md:min-w-0 px-2">
              {['Cart', 'Information', 'Payment', 'Complete'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 border ${
                    index === 0 
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black border-yellow-400' 
                      : 'bg-gray-900 border-yellow-400/30 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`ml-1 md:ml-2 font-medium text-xs md:text-base whitespace-nowrap ${
                    index === 0 ? 'text-yellow-400' : 'text-gray-400'
                  }`}>
                    {step}
                  </span>
                  {index < 3 && (
                    <div className={`h-0.5 w-4 md:w-12 mx-1 md:mx-2 flex-shrink-0 ${
                      index === 0 
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' 
                        : 'bg-yellow-400/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - Mobile stack, desktop grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Checkout Form - Full width on mobile, 2/3 on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <CheckoutForm onSubmit={handleSubmitOrder} />
            </motion.div>

            {/* Order Summary - Above form on mobile, sidebar on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 order-1 lg:order-2"
            >
              {/* Mobile sticky order summary */}
              <div className="sticky top-4 z-10 lg:relative lg:top-0">
                <OrderSummary />
              </div>
              
              {/* Security Badge - Hide on very small screens, show on md+ */}
              <div className="hidden md:block mt-4 md:mt-6 bg-gradient-to-r from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-5 border border-yellow-400/30 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 border border-yellow-400/30">
                    <FiShield className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-300 text-sm md:text-base">Secure Checkout</h3>
                    <p className="text-xs text-gray-400">Your information is protected</p>
                  </div>
                </div>
                <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <div className="flex items-center text-gray-400">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2" />
                    SSL Encrypted Connection
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2" />
                    No Credit Card Storage
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2" />
                    PCI DSS Compliant
                  </div>
                </div>
              </div>
              
              {/* Need Help - Mobile simplified */}
              <div className="mt-4 md:mt-6 bg-gradient-to-r from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-5 border border-yellow-400/30">
                <h3 className="font-bold text-yellow-300 text-sm md:text-base mb-1 md:mb-2">Need Help?</h3>
                <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">
                  Our support team is here to help
                </p>
                <div className="space-y-1 text-xs md:text-sm">
                  <div className="flex items-center gap-1 font-medium text-yellow-400">
                    <MdEmail className="w-3 h-3 md:w-4 md:h-4" />
                    <span>support@anthands.in</span>
                  </div>
                  <div className="flex items-center gap-1 font-medium text-yellow-400">
                    <MdPhone className="w-3 h-3 md:w-4 md:h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile payment methods footer */}
          <div className="mt-8 lg:hidden">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
              <p className="text-sm font-medium text-yellow-300 mb-3">Accepted Payment Methods</p>
              <div className="flex gap-3">
                {['💳', '📱', '🏦', '🛡️'].map((icon, i) => (
                  <div key={i} className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center border border-yellow-400/30">
                    <span className="text-xl text-yellow-400">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout