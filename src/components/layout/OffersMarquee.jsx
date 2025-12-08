// src/components/layout/CompactOffersMarquee.jsx - More compact without dots
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiGift, FiZap, FiTag, FiArrowLeft } from 'react-icons/fi'
import { MdLocalOffer, MdStars } from 'react-icons/md'

const CompactOffersMarquee = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  
  const offers = [
    { 
      text: "🎁 FREE Shipping on orders over ₹499", 
      color: "bg-gradient-to-r from-amber-500 to-orange-500",
      icon: <FiGift className="w-4 h-4" />,
      link: "/collections/all"
    },
    { 
      text: "✨ 2026 Calendars Now Available!", 
      color: "bg-gradient-to-r from-orange-500 to-rose-500",
      icon: <MdStars className="w-4 h-4" />,
      link: "/collections/2026-calendar"
    },
    { 
      text: "💝 Valentine's Special: 20% OFF on Love Letters", 
      color: "bg-gradient-to-r from-rose-500 to-pink-500",
      icon: <FiTag className="w-4 h-4" />,
      link: "/collections/love-letters"
    },
    { 
      text: "📸 Photo Keychains from ₹129", 
      color: "bg-gradient-to-r from-amber-600 to-rose-600",
      icon: <FiZap className="w-4 h-4" />,
      link: "/collections/photo-keychains"
    },
    { 
      text: "🧲 Fridge Magnets Starting at ₹49", 
      color: "bg-gradient-to-r from-orange-600 to-amber-600",
      icon: <MdLocalOffer className="w-4 h-4" />,
      link: "/collections/fridge-magnet"
    },
    { 
      text: "💌 Wallet Cards - 50% OFF", 
      color: "bg-gradient-to-r from-rose-600 to-pink-600",
      icon: <FiGift className="w-4 h-4" />,
      link: "/collections/wallet-cards"
    },
    { 
      text: "⚡ 24H Express Delivery Available", 
      color: "bg-gradient-to-r from-amber-400 to-orange-400",
      icon: <FiZap className="w-4 h-4" />,
      link: "/collections/all"
    },
    { 
      text: "🎯 Buy 5 Get 1 Free", 
      color: "bg-gradient-to-r from-orange-400 to-rose-400",
      icon: <MdStars className="w-4 h-4" />,
      link: "/collections/all"
    }
  ]

  // Auto rotate offers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [offers.length])

  const nextOffer = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length)
  }

  const prevOffer = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length)
  }

  const handleOfferClick = (offer) => {
    if (offer.link) {
      navigate(offer.link)
    }
  }

  const handleBackNavigation = () => {
    navigate(-1) // Go back to previous page
  }

  // Check if we can go back
  const canGoBack = location.key !== 'default'

  return (
    <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 border-b border-amber-200/50 py-2.5">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Back Button - Only show if we can go back */}
          {canGoBack && (
            <button
              onClick={handleBackNavigation}
              className="p-1.5 sm:p-2 rounded-lg text-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 flex-shrink-0 mr-2"
              aria-label="Go back"
            >
              <FiArrowLeft className="text-base sm:text-lg" />
            </button>
          )}

          {/* Current Offer - Centered */}
          <div className="flex-1 flex items-center justify-center px-1 sm:px-2">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              {/* Previous Offer Button */}
              <button
                onClick={prevOffer}
                className="p-1 rounded-lg text-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 flex-shrink-0"
                aria-label="Previous offer"
              >
                <FiChevronLeft className="text-base" />
              </button>

              {/* Offer Content */}
              <button
                onClick={() => handleOfferClick(offers[currentIndex])}
                className="group flex items-center gap-2 sm:gap-3 min-w-0"
              >
                {/* Offer Icon */}
                <div className={`p-1.5 sm:p-2 rounded-lg ${offers[currentIndex].color} text-white shadow-sm flex-shrink-0`}>
                  {offers[currentIndex].icon}
                </div>
                
                {/* Offer Text */}
                <div className="text-left min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-amber-700 transition-colors block truncate">
                    {offers[currentIndex].text}
                  </span>
                  {/* Small indicator that it's clickable - only show on hover */}
                  <span className="text-xs text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    Click to explore →
                  </span>
                </div>
              </button>

              {/* Next Offer Button */}
              <button
                onClick={nextOffer}
                className="p-1 rounded-lg text-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 flex-shrink-0"
                aria-label="Next offer"
              >
                <FiChevronRight className="text-base" />
              </button>
            </motion.div>
          </div>

          {/* Offer Counter - Smaller and more compact */}
          <div className="flex-shrink-0 ml-2">
            <div className="text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white border border-amber-200 text-amber-700">
              {currentIndex + 1}/{offers.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompactOffersMarquee