// src/components/layout/CompactOffersMarquee.jsx - Updated with better navigation
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

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  const handleBackNavigation = () => {
    navigate(-1) // Go back to previous page
  }

  // Check if we can go back
  const canGoBack = location.key !== 'default'

  return (
    <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 border-b border-amber-200">
      <div className="relative">
        <div className="flex items-center justify-center px-4 py-3">
          {/* Back Button - Only show if we can go back */}
          {canGoBack && (
            <button
              onClick={handleBackNavigation}
              className="p-2 rounded-lg text-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 mr-4 flex-shrink-0"
              aria-label="Go back"
            >
              <FiArrowLeft className="text-lg" />
            </button>
          )}

          {/* Current Offer */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <div className="flex items-center justify-center gap-4">
              {/* Previous Offer Button */}
              <button
                onClick={prevOffer}
                className="p-1.5 rounded-lg text-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 flex-shrink-0"
                aria-label="Previous offer"
              >
                <FiChevronLeft className="text-lg" />
              </button>

              {/* Offer Content */}
              <button
                onClick={() => handleOfferClick(offers[currentIndex])}
                className="group flex items-center gap-3"
              >
                {/* Offer Icon */}
                <div className={`p-2 rounded-lg ${offers[currentIndex].color} text-white shadow-sm`}>
                  {offers[currentIndex].icon}
                </div>
                
                {/* Offer Text */}
                <div className="text-left">
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-amber-700 transition-colors block">
                    {offers[currentIndex].text}
                  </span>
                  {/* Small indicator that it's clickable */}
                  <span className="text-xs text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to explore →
                  </span>
                </div>
              </button>

              {/* Next Offer Button */}
              <button
                onClick={nextOffer}
                className="p-1.5 rounded-lg text-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 flex-shrink-0"
                aria-label="Next offer"
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>
          </motion.div>

          {/* Offer Counter */}
          <div className="ml-4 flex-shrink-0">
            <div className="text-xs font-medium px-2 py-1 rounded-full bg-white border border-amber-200 text-amber-700">
              {currentIndex + 1}/{offers.length}
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-1.5 pb-3">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-amber-600 scale-125' 
                  : 'bg-amber-300 hover:bg-amber-400'
              }`}
              aria-label={`Go to offer ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompactOffersMarquee