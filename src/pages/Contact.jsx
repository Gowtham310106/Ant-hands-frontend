// src/pages/Contact.jsx - Updated with theme colors
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMessageSquare, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import { TbMessageCircle } from 'react-icons/tb'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon. (Demo)')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Have questions about customization, orders, or just want to say hello? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-amber-200 shadow-lg"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your query, customization idea, or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FiSend className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl p-6 border-2 border-amber-200 hover:border-amber-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <a 
                      href="mailto:hello@anthands.com" 
                      className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-lg"
                    >
                      hello@anthands.com
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Typically reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <TbMessageCircle className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      WhatsApp Chat
                    </h3>
                    <a 
                      href="https://wa.me/919626296198"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-green-700 transition-colors font-medium text-lg"
                    >
                      +91 96262 96198
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Quick response via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <a 
                      href="tel:+919626296198" 
                      className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-lg"
                    >
                      +91 96262 96198
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Mon-Sat, 10 AM - 7 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <FiMapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Based In</p>
                    <p className="text-sm text-gray-600">India</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                    <FiClock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Business Hours</p>
                    <p className="text-sm text-gray-600">10 AM - 7 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Preview */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-1">
                    How long does delivery take?
                  </h4>
                  <p className="text-sm text-gray-600">
                    5-7 business days across India
                  </p>
                </div>
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Can I use my own photos?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Yes! Upload up to 10 images per order
                  </p>
                </div>
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Do you offer bulk orders?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Yes! Contact us for custom quotes
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    What sizes are available?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Small (2"), Standard (3"), Large (4")
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Follow Us On Social Media
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.youtube.com/@anthandss"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/anthands360?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Map/Address Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-amber-200">
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Our Location
            </h3>
            <p className="text-gray-700 mb-4">
              Based in India, we ship personalized gifts across the country, bringing smiles to every doorstep.
            </p>
            <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <p className="font-medium text-gray-900">Serving Customers Across India</p>
                <p className="text-gray-600">Shipping available pan-India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact