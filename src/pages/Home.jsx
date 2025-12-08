// src/pages/Home.jsx - Updated without getBestSellers import
import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import CollectionsGrid from '../components/home/CollectionsGrid'
import ProductCarousel from '../components/home/ProductCarousel'
import InfoFAQ from '../components/home/InfoFAQ'
import { getFeaturedProducts } from '../data/products'
import { FiArrowRight, FiGift, FiStar, FiHeart, FiTruck, FiTrendingUp } from 'react-icons/fi'

const Home = () => {
  const featuredProducts = getFeaturedProducts()
  
  // Create a simple best sellers list from featured products or just use featured products
  const bestSellers = featuredProducts.slice(0, 6).map(product => ({
    ...product,
    isBestSeller: true
  }))

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full width */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
      </motion.section>

      {/* Collections Grid */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <CollectionsGrid />
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-amber-50/20">
        <div className="px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProductCarousel 
              title="Featured Products" 
              subtitle="Handpicked personalized gifts with love and care"
              products={featuredProducts} 
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Ant Hands - Mini Features */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">AntHands</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We combine craftsmanship with love to create gifts that last a lifetime
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: <FiGift className="w-8 h-8" />,
                  title: "Customizable",
                  description: "Every product can be personalized",
                  color: "from-amber-500 to-orange-500"
                },
                {
                  icon: <FiHeart className="w-8 h-8" />,
                  title: "Handcrafted",
                  description: "Made with care and attention",
                  color: "from-rose-500 to-pink-500"
                },
                {
                  icon: <FiStar className="w-8 h-8" />,
                  title: "Premium Quality",
                  description: "Using the best materials",
                  color: "from-amber-600 to-orange-600"
                },
                {
                  icon: <FiTruck className="w-8 h-8" />,
                  title: "Fast Shipping",
                  description: "Delivered in 3-7 days",
                  color: "from-orange-500 to-rose-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 hover:border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Products (Replaced Best Sellers) */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProductCarousel 
              title="Trending Now" 
              subtitle="Most popular personalized gifts this week"
              products={bestSellers} 
            />
          </motion.div>
        </div>
      </section>

      {/* Info & FAQ */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <InfoFAQ />
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Full width */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-12 md:py-16 lg:py-20"
      >
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 opacity-90" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
            Ready to Create Something <span className="text-amber-200">Special?</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
            Start personalizing your gifts today. Each creation tells a unique story filled with emotions and memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/collections/wallet-cards"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-white text-amber-600 hover:text-amber-700 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl text-base"
            >
              <FiGift className="w-5 h-5" />
              Shop Wallet Cards
              <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/collections/all"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-transparent border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-bold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Explore All Collections
              <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
          
          {/* Decorative element */}
          <div className="mt-10">
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
            <p className="text-white/80 text-sm mt-4">
              ✨ 500+ happy customers • ⭐ 4.9/5 rating • 🚀 Free shipping over ₹499
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home