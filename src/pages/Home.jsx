// src/pages/Home.jsx - Updated with dark theme
import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import CollectionsGrid from '../components/home/CollectionsGrid'
import ProductCarousel from '../components/home/ProductCarousel'
import InfoFAQ from '../components/home/InfoFAQ'
import { getFeaturedProducts } from '../data/products'
import { FiArrowRight, FiGift, FiStar, FiHeart, FiTruck, FiTrendingUp, FiShield } from 'react-icons/fi'

const Home = () => {
  const featuredProducts = getFeaturedProducts()
  
  // Create trending products from featured products
  const trendingProducts = featuredProducts.slice(0, 8).map(product => ({
    ...product,
    isTrending: true
  }))

  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
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
      <section className="py-8 md:py-12 lg:py-16 bg-black border-y border-yellow-400/10">
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
              products={featuredProducts.slice(0, 6)} 
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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">AntHands</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We combine craftsmanship with love to create gifts that last a lifetime
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: <FiGift className="w-8 h-8" />,
                  title: "Customizable",
                  description: "Every product can be personalized",
                  color: "from-yellow-500 to-yellow-600",
                  bgColor: "bg-yellow-500/10"
                },
                {
                  icon: <FiHeart className="w-8 h-8" />,
                  title: "Handcrafted",
                  description: "Made with care and attention",
                  color: "from-yellow-400 to-yellow-500",
                  bgColor: "bg-yellow-400/10"
                },
                {
                  icon: <FiStar className="w-8 h-8" />,
                  title: "Premium Quality",
                  description: "Using the best materials",
                  color: "from-yellow-600 to-yellow-700",
                  bgColor: "bg-yellow-600/10"
                },
                {
                  icon: <FiTruck className="w-8 h-8" />,
                  title: "Fast Shipping",
                  description: "Delivered in 3-7 days",
                  color: "from-yellow-500 to-yellow-400",
                  bgColor: "bg-yellow-500/10"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.1)] transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} border border-yellow-400/30 text-yellow-400 mb-4 group-hover:border-yellow-400/50 group-hover:text-yellow-300 transition-colors`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-yellow-300 mb-2 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-300 rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-8 md:py-12 lg:py-16 bg-black border-y border-yellow-400/10">
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
              products={trendingProducts} 
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

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-12 md:py-16 lg:py-20"
      >
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-yellow-800/10 to-yellow-900/20" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/50 rounded-full animate-float"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '8s'
              }}
            />
          ))}
        </div>

        <div className="relative px-4 md:px-8 text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6"
          >
            Ready to Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Special?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            Start personalizing your gifts today. Each creation tells a unique story filled with emotions and memories.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/collections/wallet-cards"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] text-base border-2 border-yellow-400/30 hover:border-yellow-400"
            >
              <FiGift className="w-5 h-5" />
              Shop Wallet Cards
              <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/collections/all"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-transparent border-2 border-yellow-400/30 hover:border-yellow-400 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 font-bold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Explore All Collections
              <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
          
          {/* Decorative element and stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto" />
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>500+ happy customers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FiStar className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FiTruck className="w-3 h-3 text-yellow-400" />
                <span>Free shipping over ₹499</span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FiShield className="w-3 h-3 text-yellow-400" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FiTrendingUp className="w-3 h-3 text-yellow-400" />
                <span>Trending Now</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FiHeart className="w-3 h-3 text-yellow-400" />
                <span>Made with Love</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home