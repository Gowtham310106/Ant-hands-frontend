// src/components/layout/Header.jsx - Updated with dark black/yellow theme
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CartContext } from '../../context/CartContext'
import OffersMarquee from './OffersMarquee'
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiHeart, FiUser } from 'react-icons/fi'
import { MdStars, MdOutlineWorkspacePremium } from 'react-icons/md'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount } = useContext(CartContext)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Fridge Magnets', path: '/collections/fridge-magnet', icon: '🧲' },
    { name: '2026 Calendar', path: '/collections/2026-calendar', icon: '📅' },
    { name: 'Wallet Cards', path: '/collections/wallet-cards', icon: '💳' },
    { name: 'Love Letters', path: '/collections/love-letters', icon: '💌' },
    { name: 'Gift Box', path: '/collections/gift-box', icon: '🎁' },
    { name: 'Mini Album Keychains', path: '/collections/mini-album-keychains', icon: '🔗' },
    { name: 'Photo Keychains', path: '/collections/photo-keychains', icon: '📸' },
    { name: 'Polaroids', path: '/collections/polaroids', icon: '🖼️' },
    { name: 'Photo Frames', path: '/collections/photo-frames', icon: '🖼️' },
    { name: 'About Us', path: '/about', icon: '👥' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/collections/all?search=${searchQuery}`)
      setSearchQuery('')
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* Offers Marquee - Updated for dark theme */}
      <OffersMarquee />
      
      {/* Main Header - Updated with black background and yellow borders */}
      <div className="bg-black border-b-2 border-yellow-400 shadow-[0_4px_20px_rgba(250,204,21,0.15)]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Updated for dark theme */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black border-2 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)] group-hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all duration-300 group-hover:scale-105">
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
                      <div className="text-yellow-400 font-black text-lg">AH</div>
                      <div className="text-yellow-300 text-xs font-bold">HANDS</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center">
                  <MdStars className="w-2 h-2 text-black" />
                </div>
              </div>
              <div className="text-left">
                <span className="font-display text-2xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  AntHands
                </span>
                <p className="text-xs text-yellow-300 font-medium -mt-1 italic">Work like an ant</p>
              </div>
            </Link>

            {/* Desktop Navigation - Updated for dark theme */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-1.5 px-4 py-2 text-gray-300 hover:text-yellow-400 font-semibold text-sm rounded-lg hover:bg-gray-900 transition-all duration-200 group relative"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-3/4 transition-all duration-300"></div>
                </Link>
              ))}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-4 py-2 text-gray-300 hover:text-yellow-400 font-semibold text-sm rounded-lg hover:bg-gray-900 transition-all duration-200">
                  <span className="text-base">✨</span>
                  <span>More</span>
                </button>
                <div className="absolute hidden group-hover:block bg-gray-900 shadow-xl rounded-xl p-2 min-w-[220px] mt-2 border border-yellow-400/30 backdrop-blur-sm z-50">
                  {navItems.slice(6).map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-all duration-200 font-medium border-l-2 border-transparent hover:border-yellow-400"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Right side icons - Updated for dark theme */}
            <div className="flex items-center space-x-4">
              {/* User Account */}
              <button className="hidden md:block p-2 rounded-lg hover:bg-gray-900 transition-colors group">
                <FiUser className="text-xl text-yellow-400 group-hover:text-yellow-300 transition-colors" />
              </button>

              {/* Search - Updated for dark theme */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search memories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-2.5 rounded-full border border-yellow-400/50 bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-yellow-300/60 shadow-lg w-64 backdrop-blur-sm"
                  />
                  <div className="absolute left-4 top-2.5">
                    <FiSearch className="text-yellow-400" />
                  </div>
                  <button type="submit" className="absolute right-3 top-2 text-xs font-semibold text-yellow-400 hover:text-yellow-300">
                    GO
                  </button>
                </div>
              </form>

              {/* Wishlist */}
              <button className="hidden md:block p-2 rounded-lg hover:bg-gray-900 transition-colors group relative">
                <FiHeart className="text-xl text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Premium */}
              <button className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 border border-yellow-400/30 hover:border-yellow-400 transition-all group">
                <MdOutlineWorkspacePremium className="text-yellow-400" />
                <span className="text-yellow-300 font-semibold text-sm">Premium</span>
                <span className="text-yellow-500/70 text-xs group-hover:text-yellow-400">+</span>
              </button>

              {/* Cart - Updated for dark theme */}
              <Link to="/cart" className="relative group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-gray-900 to-black border border-yellow-400/30 group-hover:border-yellow-400 transition-all shadow-lg group-hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                  <FiShoppingCart className="text-xl text-yellow-400" />
                </div>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg border border-black"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>

              {/* Mobile menu button - Updated for dark theme */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-gradient-to-r from-gray-900 to-black border border-yellow-400/30 hover:border-yellow-400 transition-all shadow-lg"
              >
                {isMenuOpen ? (
                  <FiX className="text-xl text-yellow-400" />
                ) : (
                  <FiMenu className="text-xl text-yellow-400" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu - Updated for dark theme */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-yellow-400/20 mt-2 bg-gray-900 rounded-xl shadow-2xl my-2 border border-yellow-400/30"
              >
                <div className="py-6 px-4">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="🔍 Search memories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-full border border-yellow-400/50 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-yellow-300/60 shadow-inner"
                      />
                      <FiSearch className="absolute left-4 top-3.5 text-yellow-400" />
                    </div>
                  </form>

                  {/* Mobile Nav Items */}
                  <div className="grid grid-cols-1 gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-all duration-200 font-semibold border-l-2 border-transparent hover:border-yellow-400"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-6 pt-6 border-t border-yellow-400/20">
                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 bg-gray-800 py-2.5 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all">
                        <FiUser className="text-lg" />
                        <span>Account</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 bg-gray-800 py-2.5 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all">
                        <FiHeart className="text-lg" />
                        <span>Wishlist</span>
                        <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          3
                        </span>
                      </button>
                    </div>
                    <Link 
                      to="/cart" 
                      onClick={() => setIsMenuOpen(false)}
                      className="mt-4 flex items-center justify-center gap-2 text-sm text-black font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 py-3 rounded-lg transition-all shadow-lg"
                    >
                      <FiShoppingCart className="text-lg" />
                      <span>View Cart</span>
                      {cartCount > 0 && (
                        <span className="bg-black text-yellow-400 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border border-yellow-400">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

export default Header