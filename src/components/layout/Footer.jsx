// src/components/layout/Footer.jsx - Updated with theme colors
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiInstagram, FiFacebook, FiTwitter, FiHeart, FiMapPin, FiPhone } from 'react-icons/fi'
import { MdOutlineEmail, MdLocalShipping } from 'react-icons/md'

const Footer = () => {
  const [email, setEmail] = useState('')
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      console.log('Subscribed with email:', email)
      alert(`Thanks for subscribing with ${email}! You'll receive exclusive offers soon.`)
      setEmail('')
    }
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-gray-900 text-white mt-16 border-t border-amber-200/20">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Info - Enhanced */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
  <div className="relative">
    <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-white border-2 border-amber-300 shadow-lg">
      <img 
        src="/logo.jpg" 
        alt="AntHands Logo"
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback if logo doesn't load
          e.target.style.display = 'none';
          e.target.nextElementSibling.style.display = 'flex';
        }}
      />
      {/* Fallback logo */}
      <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-500 hidden items-center justify-center">
        <span className="text-lg font-black text-white">AH</span>
      </div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center">
        <FiHeart className="w-2 h-2 text-white" />
      </div>
    </div>
  </div>
  <div className="text-left">
    <span className="font-display text-2xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
      AntHands
    </span>
    <p className="text-sm text-slate-300 -mt-1">Work like an ant, deliver like a king</p>
  </div>
</div>
            <p className="text-slate-300 text-sm mb-6 max-w-md">
              Transforming precious moments into custom gifts that create lasting memories. 
              From photo frames to personalized accessories, we bring your emotions to life.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <FiMapPin className="text-amber-400" />
                <span>Delivering happiness across India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <FiPhone className="text-amber-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MdOutlineEmail className="text-amber-400" />
                <span>hello@anthands.in</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MdLocalShipping className="text-amber-400" />
                <span>3-7 Days Delivery • Free Shipping above ₹499</span>
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex space-x-3">
              {[
                { icon: <FiInstagram className="text-lg" />, label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600' },
                { icon: <FiFacebook className="text-lg" />, label: 'Facebook', color: 'hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800' },
                { icon: <FiTwitter className="text-lg" />, label: 'Twitter', color: 'hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className={`group p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 ${social.color} hover:text-white transition-all duration-300 relative`}
                  aria-label={social.label}
                >
                  {social.icon}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-amber-300 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact Us' },
                { path: '/privacy-policy', label: 'Privacy Policy' },
                { path: '/terms-conditions', label: 'Terms & Conditions' },
                { path: '/cancellation-refund', label: 'Cancellation & Refund' },
                { path: '/shipping-policy', label: 'Shipping Policy' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-all duration-200 group text-sm"
                  >
                    <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections - Enhanced */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-amber-300 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
              Shop Collections
            </h3>
            <ul className="space-y-2.5">
              {[
                { path: '/collections/wallet-cards', label: 'Wallet Cards', emoji: '💳' },
                { path: '/collections/photo-keychains', label: 'Photo Keychains', emoji: '📸' },
                { path: '/collections/polaroids', label: 'Polaroids', emoji: '🖼️' },
                { path: '/collections/gift-box', label: 'Gift Boxes', emoji: '🎁' },
                { path: '/collections/2026-calendar', label: '2026 Calendars', emoji: '📅' },
                { path: '/collections/fridge-magnet', label: 'Fridge Magnets', emoji: '🧲' },
                { path: '/collections/under-100', label: 'Gifts Under ₹100', emoji: '💰' },
                { path: '/collections/all', label: 'All Collections', emoji: '✨' },
              ].map((collection) => (
                <li key={collection.path}>
                  <Link 
                    to={collection.path} 
                    className="flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-all duration-200 group text-sm"
                  >
                    <span className="text-base">{collection.emoji}</span>
                    {collection.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Enhanced */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-amber-300 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
              Stay Updated
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and exclusive new product launches.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <div className="absolute left-4 top-3.5">
                  <FiMail className="text-amber-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm shadow-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Subscribe Now
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-rose-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
            
            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-slate-800/30 rounded-lg">
                  <div className="text-xs text-slate-300">Secure</div>
                  <div className="text-xs text-amber-400 font-bold">Payment</div>
                </div>
                <div className="text-center p-2 bg-slate-800/30 rounded-lg">
                  <div className="text-xs text-slate-300">24/7</div>
                  <div className="text-xs text-amber-400 font-bold">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-slate-800/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} <span className="text-amber-400 font-semibold">AntHands</span>. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>100% Secure Payments</span>
              </div>
              
              <div className="hidden md:block h-4 w-px bg-slate-700"></div>
              
              <div className="text-slate-500 text-xs text-center md:text-left">
                Made with <FiHeart className="inline w-3 h-3 text-rose-500 animate-pulse" /> in India
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-slate-500 text-xs">
              All images are for representation only. Actual product may vary slightly in color & design.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer