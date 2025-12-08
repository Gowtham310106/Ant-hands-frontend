// src/pages/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi'
import Button from '../components/common/Button'

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
    <div className="container-custom py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Have questions about customization, orders, or just want to say hello? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 border border-anthands-pink/20"
          >
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-anthands-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-anthands-pink focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-anthands-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-anthands-pink focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-anthands-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-anthands-pink focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-anthands-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-anthands-pink focus:border-transparent"
                  placeholder="Tell us about your query, customization idea, or just say hello!"
                />
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-anthands-pink to-anthands-yellow rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-xl text-anthands-rose" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                      Email Us
                    </h3>
                    <a 
                      href="mailto:support@anthands.in" 
                      className="text-slate-700 hover:text-anthands-rose transition-colors"
                    >
                      support@anthands.in
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      Typically reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-anthands-pink to-anthands-yellow rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-xl text-anthands-rose" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                      Call/WhatsApp
                    </h3>
                    <a 
                      href="tel:+919876543210" 
                      className="text-slate-700 hover:text-anthands-rose transition-colors"
                    >
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      Mon-Sat, 10 AM - 7 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-anthands-pink to-anthands-yellow rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMessageSquare className="text-xl text-anthands-rose" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                      Order Support
                    </h3>
                    <p className="text-slate-700">
                      For order tracking, customization queries, and delivery updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Preview */}
            <div className="bg-white rounded-2xl p-6 border border-anthands-pink/20">
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
                Quick Answers
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">
                    How long does customization take?
                  </h4>
                  <p className="text-sm text-slate-600">
                    Custom products take 1-2 business days for processing before shipping.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">
                    Can I change my customization after ordering?
                  </h4>
                  <p className="text-sm text-slate-600">
                    Changes can be made within 2 hours of ordering. Contact us immediately.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">
                    Do you ship internationally?
                  </h4>
                  <p className="text-sm text-slate-600">
                    Currently, we only ship within India. International shipping coming soon!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact