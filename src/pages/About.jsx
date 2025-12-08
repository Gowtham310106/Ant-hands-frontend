// src/pages/About.jsx - Customized with your details
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGift, 
  FiUsers, 
  FiAward, 
  FiHeart, 
  FiShield,
  FiMessageCircle,
  FiInstagram,
  FiYoutube
} from 'react-icons/fi'

const About = () => {
  // Contact details from your code
  const contactInfo = {
    phone: '+91 9626296198',
    email: 'hello@anthands.com',
    whatsapp: 'https://wa.me/919626296198',
    instagram: 'https://www.instagram.com/anthands360?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    youtube: 'https://www.youtube.com/@anthandss'
  }

  // Testimonials from your code
  const testimonials = [
    {
      name: 'Priya M.',
      text: 'The magnets arrived beautifully packaged and the quality is amazing! My fridge looks like an art gallery now. 🎨',
      rating: 5
    },
    {
      name: 'Arjun K.',
      text: 'Ordered for my parents\' anniversary. They loved the personalized touch. Highly recommend!',
      rating: 5
    },
    {
      name: 'Sneha R.',
      text: 'The workshop was so much fun! I made magnets for all my friends. Best team-building activity ever!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Ant Hands</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            We're a small team obsessed with turning memories into tangible keepsakes.
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 md:mb-20 lg:mb-24">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>

            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Inspired by the work ethic of ants — tiny but mighty — we believe everyone deserves beautiful, 
                personalized fridge magnets that spark joy every time you pass the kitchen.
              </p>

              <p>
                Every magnet we create is handcrafted with care. From your uploaded photos to our quality materials, 
                we ensure your memories stay vibrant and last forever on your fridge.
              </p>

              <p className="font-semibold text-amber-700">
                Our Promise: Premium quality, fair pricing, and world-class service — no middlemen, no nonsense.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-xl p-4 md:p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl md:text-3xl font-bold text-amber-700">1000+</p>
                <p className="text-sm text-gray-600">Happy Memories</p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl md:text-3xl font-bold text-amber-700">5⭐</p>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-xl p-4 md:p-6 border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl md:text-3xl font-bold text-orange-700">2K+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 border border-rose-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl md:text-3xl font-bold text-rose-700">15K+</p>
                <p className="text-sm text-gray-600">Gifts Created</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact info card */}
            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl p-6 md:p-8 border-2 border-amber-200 shadow-lg">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 p-4 bg-white/80 hover:bg-white rounded-xl transition-all duration-300 group hover:shadow-md border border-amber-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Call or SMS</p>
                    <p className="font-bold text-lg text-gray-900 group-hover:text-amber-700 transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white/80 hover:bg-white rounded-xl transition-all duration-300 group hover:shadow-md border border-green-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <FiMessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
                    <p className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors">
                      Message us on WhatsApp
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 p-4 bg-white/80 hover:bg-white rounded-xl transition-all duration-300 group hover:shadow-md border border-rose-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-bold text-lg text-gray-900 group-hover:text-rose-700 transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-sm">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Follow Our Journey</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href={contactInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 border-2 border-red-300 hover:border-red-400 text-red-600 rounded-xl p-4 flex items-center justify-center transition-all duration-300 group hover:shadow-md"
                >
                  <FiYoutube size={28} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-pink-50 to-rose-100 hover:from-pink-100 hover:to-rose-200 border-2 border-pink-300 hover:border-pink-400 text-pink-600 rounded-xl p-4 flex items-center justify-center transition-all duration-300 group hover:shadow-md"
                >
                  <FiInstagram size={28} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 border-2 border-green-300 hover:border-green-400 text-green-600 rounded-xl p-4 flex items-center justify-center transition-all duration-300 group hover:shadow-md"
                >
                  <FiMessageCircle size={28} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Values Section */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 md:mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <FiHeart className="w-8 h-8" />,
                title: "Emotional Connection",
                description: "Every product is designed to evoke emotion and connection, just like a warm embrace.",
                color: "from-rose-500 to-pink-500"
              },
              {
                icon: <FiGift className="w-8 h-8" />,
                title: "Personalized Touch",
                description: "From friendships to romance, we create gifts that celebrate your unique relationship.",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: <FiAward className="w-8 h-8" />,
                title: "Quality Craftsmanship",
                description: "Each gift passes through multiple quality checks before reaching you, ensuring perfection.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: <FiShield className="w-8 h-8" />,
                title: "Honest Pricing",
                description: "Premium materials at fair prices — no middlemen, no hidden costs.",
                color: "from-pink-500 to-rose-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 md:pt-16 lg:pt-20 border-t border-gray-200"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            What Our Customers Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-amber-200"
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill('').map((_, i) => (
                    <span key={i} className="text-xl text-amber-500">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-base md:text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-900 text-lg">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20 lg:mt-24"
        >
          <blockquote className="max-w-3xl mx-auto">
            <div className="text-4xl md:text-5xl lg:text-6xl mb-6 text-amber-400">❝</div>
            <p className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-6 px-4">
              "Work like an ant. Create memories that stick."
            </p>
            <div className="text-4xl md:text-5xl lg:text-6xl mb-6 text-amber-400">❞</div>
            <p className="text-gray-600 text-lg">
              — The Ant Hands Team
            </p>
          </blockquote>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Create Your Memories?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Browse our collections and turn your favorite moments into beautiful, tangible keepsakes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/collections/all"
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
            >
              Shop All Collections
            </a>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base flex items-center gap-2"
            >
              <FiMessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About