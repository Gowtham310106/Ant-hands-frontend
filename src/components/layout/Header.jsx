// src/components/layout/Header.jsx - Fixed with proper imports
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CartContext } from '../../context/CartContext'
import OffersMarquee from './OffersMarquee'
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiHeart } from 'react-icons/fi'
import { MdStars } from 'react-icons/md' // Added missing import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount } = useContext(CartContext)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: '2026 Calendar', path: '/collections/2026-calendar', icon: '📅' },
    { name: 'Wallet Cards', path: '/collections/wallet-cards', icon: '💳' },
    { name: 'Love Letters', path: '/collections/love-letters', icon: '💌' },
    { name: 'Gift Box', path: '/collections/gift-box', icon: '🎁' },
    { name: 'Mini Album Keychains', path: '/collections/mini-album-keychains', icon: '🔗' },
    { name: 'Photo Keychains', path: '/collections/photo-keychains', icon: '📸' },
    { name: 'Polaroids', path: '/collections/polaroids', icon: '🖼️' },
    { name: 'Photo Frames', path: '/collections/photo-frames', icon: '🖼️' },
    { name: 'Fridge Magnets', path: '/collections/fridge-magnet', icon: '🧲' },
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
    <header className="sticky top-0 left-0 right-0 z-50 shadow-lg">
      {/* Offers Marquee */}
      <OffersMarquee />
      
      {/* Main Header */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50/90 backdrop-blur-lg border-b border-amber-200 shadow-md">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white border-4 border-amber-300 shadow-lg group-hover:shadow-xl transition-shadow">
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
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center">
                  <MdStars className="w-2 h-2 text-white" />
                </div>
              </div>
              <div className="text-left">
                <span className="font-display text-2xl font-black bg-gradient-to-r from-amber-700 to-rose-600 bg-clip-text text-transparent">
                  AntHands
                </span>
                <p className="text-xs text-gray-600 font-medium -mt-1">Work like an ant, deliver like a king</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-amber-700 font-semibold text-sm rounded-xl hover:bg-white/50 transition-all duration-200 group"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                  <div className="h-0.5 w-0 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300 mt-1"></div>
                </Link>
              ))}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-amber-700 font-semibold text-sm rounded-xl hover:bg-white/50 transition-all duration-200">
                  <span className="text-base">✨</span>
                  <span>More</span>
                </button>
                <div className="absolute hidden group-hover:block bg-gradient-to-b from-white to-amber-50/95 shadow-xl rounded-2xl p-3 min-w-[220px] mt-2 border border-amber-100 backdrop-blur-sm">
                  {navItems.slice(6).map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-amber-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50/50 rounded-lg transition-all duration-200 font-medium"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search memories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-2.5 rounded-full border border-amber-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm placeholder-gray-500 shadow-sm w-64"
                  />
                  <div className="absolute left-4 top-2.5">
                    <FiSearch className="text-amber-600" />
                  </div>
                  <button type="submit" className="absolute right-3 top-2 text-xs font-semibold text-amber-600 hover:text-amber-700">
                    GO
                  </button>
                </div>
              </form>

              {/* Wishlist */}
              <button className="hidden md:block p-2 rounded-full hover:bg-white/50 transition-colors group">
                <FiHeart className="text-xl text-gray-600 group-hover:text-rose-500 transition-colors" />
              </button>

              {/* Cart */}
              <Link to="/cart" className="relative group">
                <div className="p-2 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all shadow-sm">
                  <FiShoppingCart className="text-xl text-amber-700" />
                </div>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 transition-all shadow-sm"
              >
                {isMenuOpen ? (
                  <FiX className="text-xl text-amber-700" />
                ) : (
                  <FiMenu className="text-xl text-amber-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-amber-200 mt-2 bg-gradient-to-b from-white to-amber-50/95 rounded-2xl shadow-xl my-2"
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
                        className="w-full pl-12 pr-4 py-3 rounded-full border border-amber-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm placeholder-gray-500 shadow-inner"
                      />
                      <FiSearch className="absolute left-4 top-3.5 text-amber-600" />
                    </div>
                  </form>

                  {/* Mobile Nav Items */}
                  <div className="grid grid-cols-1 gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:text-amber-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50/50 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-amber-200"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-amber-700">
                        <FiHeart className="text-lg" />
                        <span>Wishlist</span>
                      </button>
                      <div className="w-px h-6 bg-amber-200"></div>
                      <Link 
                        to="/cart" 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-amber-700"
                      >
                        <FiShoppingCart className="text-lg" />
                        <span>Cart</span>
                        {cartCount > 0 && (
                          <span className="bg-rose-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {cartCount}
                          </span>
                        )}
                      </Link>
                    </div>
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