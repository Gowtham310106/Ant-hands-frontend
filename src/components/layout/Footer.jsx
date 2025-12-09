// src/components/layout/Footer.jsx - Updated with dark black/yellow theme
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiInstagram, FiFacebook, FiTwitter, FiHeart, FiMapPin, FiPhone, FiShield, FiClock } from 'react-icons/fi'
import { MdOutlineEmail, MdLocalShipping, MdVerified } from 'react-icons/md'

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
    <footer className="bg-black text-white mt-16 border-t-2 border-yellow-400/30">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Info - Updated */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-black border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                  <img 
                    src="/logo.jpg" 
                    alt="AntHands Logo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback logo with theme colors */}
                  <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 hidden items-center justify-center">
                    <div className="text-center">
                      <div className="text-yellow-400 font-black text-sm">AH</div>
                      <div className="text-yellow-300 text-[8px] font-bold">HANDS</div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center">
                    <FiHeart className="w-1.5 h-1.5 text-black" />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <span className="font-display text-2xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  AntHands
                </span>
                <p className="text-sm text-yellow-300/80 -mt-1 italic">Work like an ant, deliver like a king</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-md">
              Transforming precious moments into custom gifts that create lasting memories. 
              From photo frames to personalized accessories, we bring your emotions to life.
            </p>
            
            {/* Contact Info - Updated */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-300 text-sm bg-gray-900/50 p-3 rounded-lg border border-yellow-400/20">
                <FiMapPin className="text-yellow-400" />
                <span>Delivering happiness across India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm bg-gray-900/50 p-3 rounded-lg border border-yellow-400/20">
                <FiPhone className="text-yellow-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm bg-gray-900/50 p-3 rounded-lg border border-yellow-400/20">
                <MdOutlineEmail className="text-yellow-400" />
                <span>hello@anthands.in</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm bg-gray-900/50 p-3 rounded-lg border border-yellow-400/20">
                <MdLocalShipping className="text-yellow-400" />
                <span>3-7 Days Delivery • Free Shipping above ₹499</span>
              </div>
            </div>

            {/* Social Links - Updated */}
            <div className="flex space-x-3">
              {[
                { 
                  icon: <FiInstagram className="text-lg" />, 
                  label: 'Instagram', 
                  color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-purple-500' 
                },
                { 
                  icon: <FiFacebook className="text-lg" />, 
                  label: 'Facebook', 
                  color: 'hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:border-blue-500' 
                },
                { 
                  icon: <FiTwitter className="text-lg" />, 
                  label: 'Twitter', 
                  color: 'hover:bg-gradient-to-r hover:from-sky-500 hover:to-cyan-400 hover:border-sky-500' 
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className={`group p-3 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-yellow-400/20 text-yellow-400 ${social.color} hover:text-white hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all duration-300 relative`}
                  aria-label={social.label}
                >
                  {social.icon}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-yellow-400 text-xs px-2 py-1 rounded border border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Updated */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-yellow-400 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { path: '/about', label: 'About Us', emoji: '👥' },
                { path: '/contact', label: 'Contact Us', emoji: '📞' },
                { path: '/privacy-policy', label: 'Privacy Policy', emoji: '🔒' },
                { path: '/terms-conditions', label: 'Terms & Conditions', emoji: '📝' },
                { path: '/cancellation-refund', label: 'Cancellation & Refund', emoji: '↩️' },
                { path: '/shipping-policy', label: 'Shipping Policy', emoji: '🚚' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all duration-200 group text-sm hover:translate-x-1"
                  >
                    <span className="text-base">{link.emoji}</span>
                    {link.label}
                    <div className="w-0 h-px bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-16 transition-all duration-300 ml-2"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections - Updated */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-yellow-400 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-full"></div>
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
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all duration-200 group text-sm hover:translate-x-1"
                  >
                    <span className="text-base">{collection.emoji}</span>
                    {collection.label}
                    <div className="w-0 h-px bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-16 transition-all duration-300 ml-2"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Updated */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-yellow-400 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-full"></div>
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and exclusive new product launches.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <div className="absolute left-4 top-3.5">
                  <FiMail className="text-yellow-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-yellow-400/30 text-white placeholder-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm shadow-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Subscribe Now
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
            
            {/* Trust Badges - Updated */}
            <div className="mt-6 pt-6 border-t border-yellow-400/20">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-900/50 rounded-lg border border-yellow-400/20 hover:border-yellow-400 transition-colors">
                  <FiShield className="inline-block text-yellow-400 mb-1" />
                  <div className="text-xs text-gray-300">Secure</div>
                  <div className="text-xs text-yellow-400 font-bold">Payment</div>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg border border-yellow-400/20 hover:border-yellow-400 transition-colors">
                  <FiClock className="inline-block text-yellow-400 mb-1" />
                  <div className="text-xs text-gray-300">24/7</div>
                  <div className="text-xs text-yellow-400 font-bold">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Updated */}
        <div className="border-t border-yellow-400/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-yellow-400 font-semibold">AntHands</span>. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-900/50 px-3 py-1.5 rounded-full border border-yellow-400/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>100% Secure Payments</span>
              </div>
              
              <div className="hidden md:block h-4 w-px bg-yellow-400/30"></div>
              
              <div className="text-gray-400 text-xs text-center md:text-left flex items-center gap-1">
                Made with <FiHeart className="inline w-3 h-3 text-yellow-400 animate-pulse" /> in India
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
              <MdVerified className="text-yellow-400" />
              All images are for representation only. Actual product may vary slightly in color & design.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer