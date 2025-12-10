// src/pages/WorkshopPage.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiUsers, FiMapPin, FiCheckCircle, FiMessageCircle, FiShoppingBag, FiChevronLeft } from 'react-icons/fi'
import { Target, Sparkles, Zap, Award, Package, Shield } from 'lucide-react'

const WorkshopPage = () => {
  const workshopDate = new Date('2025-12-20T18:00:00')
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const benefits = [
    { icon: <Target />, title: "Start Your Business", description: "Perfect opportunity to begin your own custom magnet business" },
    { icon: <Zap />, title: "Beginner Friendly", description: "No prior experience required, we guide you step by step" },
    { icon: <Award />, title: "Premium Materials", description: "Learn using professional-grade materials and tools" },
    { icon: <Package />, title: "Complete Kit", description: "Get access to supplier recommendations and material lists" },
    { icon: <Shield />, title: "Lifetime Support", description: "Join our community for ongoing support and guidance" },
    { icon: <Sparkles />, title: "Creative Freedom", description: "Create unique designs that reflect your personal style" },
  ]

  const workshopDetails = [
    { title: "Date", value: formatDate(workshopDate), icon: <FiCalendar /> },
    { title: "Time", value: "6:00 PM - 8:00 PM IST", icon: <FiClock /> },
    { title: "Mode", value: "Online via Zoom", icon: <FiUsers /> },
    { title: "Duration", value: "2 Hours", icon: <FiClock /> },
    { title: "Language", value: "English & Hindi", icon: <FiMessageCircle /> },
    { title: "Recording", value: "Not Provided", icon: <FiClock /> },
  ]

  const requirements = [
    "Laptop/Tablet with internet connection",
    "Zoom app installed",
    "Basic art supplies (optional)",
    "Enthusiasm to learn!",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors mb-6"
        >
          <FiChevronLeft />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-sm font-bold px-6 py-3 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>Limited Time Workshop</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Fridge Magnet
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                  Making Workshop
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed">
                Join our interactive online workshop and learn to create beautiful custom fridge magnets from the comfort of your home! Perfect for beginners looking to start their own small business.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <div className="text-5xl md:text-6xl font-black text-yellow-400">₹499</div>
                <div className="text-gray-400 line-through">₹999</div>
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  50% OFF
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20Fridge%20Magnet%20Workshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-extrabold py-4 md:py-5 px-8 md:px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] text-lg shadow-lg border-2 border-yellow-400/30 hover:border-yellow-400"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FiMessageCircle className="w-5 h-5" />
                    Register via WhatsApp
                  </span>
                </a>
                
                <Link
                  to="/collections/fridge-magnet"
                  className="group border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold py-4 md:py-5 px-8 md:px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] text-lg flex items-center justify-center gap-2"
                >
                  <FiShoppingBag className="w-5 h-5" />
                  Shop Magnets
                </Link>
              </div>

              {/* Limited Spots Warning */}
              <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-red-300">Limited Spots Available</span>
                </div>
                <p className="text-sm text-gray-300">
                  Only 20 seats available for personalized attention. Book your spot before they're gone!
                </p>
              </div>
            </motion.div>

            {/* Right Content - Workshop Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border-2 border-yellow-400/30 overflow-hidden shadow-2xl">
                <img
                  src="/workshop.png"
                  alt="Fridge Magnet Making Workshop"
                  className="w-full h-auto"
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-yellow-400/50 rounded-lg p-3">
                  <div className="text-center">
                    <div className="text-yellow-400 text-lg font-bold">20</div>
                    <div className="text-yellow-300 text-sm">DEC</div>
                    <div className="text-yellow-400 text-sm">2025</div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3 py-2 rounded-full shadow-lg">
                  Limited Seats
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Workshop Details */}
      <div className="py-16 px-4 md:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {workshopDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{detail.title}</div>
                    <div className="text-lg font-semibold text-white">{detail.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Join This Workshop?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learn valuable skills that can help you start your own creative business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400 transition-colors"
              >
                <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400 inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements & Registration */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold mb-6">What You Need</h2>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-bold text-white mb-4">Important Notes</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Access link will be shared on WhatsApp a day before</li>
                  <li>• No recordings will be provided</li>
                  <li>• No refund if unable to attend</li>
                  <li>• Limited spots only - First come, first served</li>
                </ul>
              </div>
            </div>

            {/* Registration */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border-2 border-yellow-400/30 p-8">
              <h2 className="text-3xl font-bold mb-6">Register Now</h2>
              
              <div className="mb-8">
                <div className="text-5xl font-black text-yellow-400 mb-2">₹499</div>
                <div className="text-gray-400 mb-6">One-time payment</div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-300">Workshop Access</span>
                    <span className="text-yellow-400 font-semibold">✅ Included</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-300">Materials List</span>
                    <span className="text-yellow-400 font-semibold">✅ Included</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-300">Supplier Contacts</span>
                    <span className="text-yellow-400 font-semibold">✅ Included</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-300">Community Access</span>
                    <span className="text-yellow-400 font-semibold">✅ Included</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20Fridge%20Magnet%20Workshop"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-extrabold py-5 px-8 w-full rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] text-lg shadow-lg border-2 border-yellow-400/30 hover:border-yellow-400 flex items-center justify-center gap-3"
              >
                <FiMessageCircle className="w-5 h-5" />
                <span>Register via WhatsApp</span>
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </a>
              
              <p className="text-center text-gray-400 text-sm mt-4">
                Clicking above will open WhatsApp to complete registration
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 px-4 md:px-8 bg-gradient-to-r from-yellow-900/20 to-yellow-800/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Own Magnets?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 100+ creative individuals who've started their journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20Fridge%20Magnet%20Workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Book Your Spot Now
            </a>
            <Link
              to="/contact"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopPage