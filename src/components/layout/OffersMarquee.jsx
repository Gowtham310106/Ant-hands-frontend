// src/components/layout/CompactOffersMarquee.jsx - Updated with dark black/yellow theme
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiGift, FiZap, FiArrowLeft } from 'react-icons/fi'
import { MdLocalOffer, MdStars, MdLocalShipping } from 'react-icons/md'

const CompactOffersMarquee = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  
  const offers = [
    { 
      text: "🚚 FREE Shipping on orders over ₹499", 
      color: "bg-gradient-to-r from-yellow-600 to-yellow-500",
      borderColor: "border-yellow-500/30",
      icon: <MdLocalShipping className="w-4 h-4" />,
      link: "/collections/all"
    },
    { 
      text: "📅 2026 Calendars Now Available!", 
      color: "bg-gradient-to-r from-yellow-500 to-yellow-400",
      borderColor: "border-yellow-400/30",
      icon: <MdStars className="w-4 h-4" />,
      link: "/collections/2026-calendar"
    },
    { 
      text: "📸 Photo Keychains from ₹129", 
      color: "bg-gradient-to-r from-yellow-700 to-yellow-600",
      borderColor: "border-yellow-600/30",
      icon: <FiZap className="w-4 h-4" />,
      link: "/collections/photo-keychains"
    },
    { 
      text: "🧲 Fridge Magnets Starting at ₹49", 
      color: "bg-gradient-to-r from-yellow-600 to-yellow-500",
      borderColor: "border-yellow-500/30",
      icon: <MdLocalOffer className="w-4 h-4" />,
      link: "/collections/fridge-magnet"
    },
    { 
      text: "💳 Wallet Cards - 50% OFF", 
      color: "bg-gradient-to-r from-yellow-500 to-yellow-400",
      borderColor: "border-yellow-400/30",
      icon: <FiGift className="w-4 h-4" />,
      link: "/collections/wallet-cards"
    },
    { 
      text: "⚡ 24H Express Delivery Available", 
      color: "bg-gradient-to-r from-yellow-400 to-yellow-300",
      borderColor: "border-yellow-300/30",
      icon: <FiZap className="w-4 h-4" />,
      link: "/collections/all"
    },
    { 
      text: "🎯 Buy 5 Get 1 Free", 
      color: "bg-gradient-to-r from-yellow-500 to-yellow-400",
      borderColor: "border-yellow-400/30",
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
    navigate(-1)
  }

  const canGoBack = location.key !== 'default'

  return (
    <div className="bg-black border-b border-yellow-400/30 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-center">
          {/* Back Button - Updated */}
          {canGoBack && (
            <button
              onClick={handleBackNavigation}
              className="p-1.5 rounded-lg text-yellow-400 hover:text-yellow-300 hover:bg-gray-900 transition-colors duration-200 flex-shrink-0 mr-2 border border-yellow-400/20 hover:border-yellow-400"
              aria-label="Go back"
            >
              <FiArrowLeft className="text-base" />
            </button>
          )}

          {/* Current Offer - Updated */}
          <div className="flex-1 flex items-center justify-center max-w-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1"
            >
              {/* Previous Offer Button - Updated */}
              <button
                onClick={prevOffer}
                className="p-1 rounded-lg text-yellow-400 hover:text-yellow-300 hover:bg-gray-900 transition-colors duration-200 flex-shrink-0 border border-yellow-400/20 hover:border-yellow-400"
                aria-label="Previous offer"
              >
                <FiChevronLeft className="text-sm" />
              </button>

              {/* Offer Content - Updated */}
              <button
                onClick={() => handleOfferClick(offers[currentIndex])}
                className="group flex items-center gap-2 min-w-0 bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400 rounded-lg px-3 py-1.5 transition-all duration-200 hover:shadow-[0_0_10px_rgba(250,204,21,0.15)]"
              >
                {/* Offer Icon - Updated */}
                <div className={`p-1 rounded-md ${offers[currentIndex].color} ${offers[currentIndex].borderColor} border text-white shadow-md flex-shrink-0`}>
                  {offers[currentIndex].icon}
                </div>
                
                {/* Offer Text - Updated */}
                <div className="text-left min-w-0">
                  <span className="text-xs font-semibold text-yellow-300 group-hover:text-yellow-400 transition-colors block truncate">
                    {offers[currentIndex].text}
                  </span>
                </div>
              </button>

              {/* Next Offer Button - Updated */}
              <button
                onClick={nextOffer}
                className="p-1 rounded-lg text-yellow-400 hover:text-yellow-300 hover:bg-gray-900 transition-colors duration-200 flex-shrink-0 border border-yellow-400/20 hover:border-yellow-400"
                aria-label="Next offer"
              >
                <FiChevronRight className="text-sm" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompactOffersMarquee