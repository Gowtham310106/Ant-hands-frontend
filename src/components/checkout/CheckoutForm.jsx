// src/components/checkout/CheckoutForm.jsx - Updated with theme colors
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiUser, FiPhone, FiMapPin, FiMessageSquare, FiCreditCard, FiSmartphone, FiGlobe } from 'react-icons/fi'

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    orderNotes: '',
    paymentMethod: 'upi',
    saveInfo: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-amber-200 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
            <FiMail className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">
              Contact Information
            </h3>
            <p className="text-gray-600 text-sm">We'll use this to send order updates</p>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <FiMail className="text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      </motion.div>

      {/* Shipping Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-amber-200 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl flex items-center justify-center">
            <FiMapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">
              Shipping Details
            </h3>
            <p className="text-gray-600 text-sm">Where should we deliver your order?</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              First Name *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="John"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Last Name *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="Doe"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <FiPhone className="text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="+91 98765 43210"
              pattern="[0-9]{10}"
              maxLength="10"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Address Line 1 *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <FiMapPin className="text-gray-400" />
            </div>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="Street address, P.O. box, company name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Address Line 2 (Optional)
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <FiMapPin className="text-gray-400" />
            </div>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="Apartment, suite, unit, building, floor, etc."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="Mumbai"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              State *
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none bg-white"
            >
              <option value="">Select State</option>
              {['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'West Bengal', 'Uttar Pradesh', 'Rajasthan'].map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              PIN Code *
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              pattern="[0-9]{6}"
              placeholder="400001"
              maxLength="6"
            />
          </div>
        </div>
      </motion.div>

      {/* Order Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-amber-200 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
            <FiMessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">
              Order Notes (Optional)
            </h3>
            <p className="text-gray-600 text-sm">Special instructions for your order</p>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Anything we should know?
          </label>
          <textarea
            name="orderNotes"
            value={formData.orderNotes}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3.5 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
            placeholder="Gift wrapping requests, delivery instructions, special customization notes..."
          />
        </div>
      </motion.div>

      {/* Payment Method */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-amber-200 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
            <FiCreditCard className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">
              Payment Method
            </h3>
            <p className="text-gray-600 text-sm">Choose how you'd like to pay</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {[
            { 
              id: 'upi', 
              label: 'UPI', 
              description: 'Pay via Google Pay, PhonePe, etc.',
              icon: <FiSmartphone className="w-5 h-5" />,
              color: 'from-blue-500 to-cyan-500'
            },
            { 
              id: 'card', 
              label: 'Credit/Debit Card', 
              description: 'Visa, Mastercard, RuPay',
              icon: <FiCreditCard className="w-5 h-5" />,
              color: 'from-amber-500 to-orange-500'
            },
            { 
              id: 'netbanking', 
              label: 'Net Banking', 
              description: 'All major Indian banks',
              icon: <FiGlobe className="w-5 h-5" />,
              color: 'from-green-500 to-emerald-500'
            },
            { 
              id: 'cod', 
              label: 'Cash on Delivery', 
              description: 'Pay when you receive',
              icon: '💵',
              color: 'from-rose-500 to-pink-500'
            }
          ].map((method) => (
            <label
              key={method.id}
              className={`flex items-start p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer group ${
                formData.paymentMethod === method.id
                  ? 'border-amber-500 bg-gradient-to-r from-amber-50 to-orange-50'
                  : 'border-amber-200 hover:border-amber-300 hover:bg-amber-50/30'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={formData.paymentMethod === method.id}
                onChange={handleChange}
                className="mt-1 text-amber-600 focus:ring-amber-500"
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white`}>
                    {method.icon}
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">
                      {method.label}
                    </span>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>
        
        {/* Save info for next time */}
        <div className="mt-6 pt-6 border-t border-amber-200">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="rounded text-amber-600 focus:ring-amber-500"
            />
            <span className="ml-3 text-sm text-gray-700">
              Save this information for next time
            </span>
          </label>
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="sticky bottom-4 md:bottom-6 z-10"
      >
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-4 border border-amber-200/50">
          <button
            type="submit"
            className="group w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg"
          >
            <span className="flex items-center justify-center gap-3">
              Complete Order
              <div className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                →
              </div>
            </span>
          </button>
          <p className="text-center text-xs text-gray-600 mt-3">
            By completing your order, you agree to our Terms & Conditions
          </p>
        </div>
      </motion.div>
    </form>
  )
}

export default CheckoutForm