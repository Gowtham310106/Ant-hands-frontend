// src/components/home/InfoFAQ.jsx - Updated with dark theme
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiCheckCircle, FiTruck, FiDollarSign, FiHeart } from 'react-icons/fi'

const InfoFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const features = [
    {
      title: 'Personalized & Customized',
      description: 'Every gift is tailored to tell your unique story with custom names, messages, and photos.',
      icon: <FiCheckCircle className="w-8 h-8" />
    },
    {
      title: 'Cute designs for every bond',
      description: 'From friendships to romance, we have designs that celebrate every relationship.',
      icon: <FiHeart className="w-8 h-8" />
    },
    {
      title: 'Budget-friendly options',
      description: 'Quality personalized gifts starting from just ₹99. Express big emotions without breaking the bank.',
      icon: <FiDollarSign className="w-8 h-8" />
    },
    {
      title: 'Simple ordering & delivery',
      description: 'Easy customization process with doorstep delivery across India.',
      icon: <FiTruck className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      question: 'Do you offer customization?',
      answer: 'Yes! All our products can be personalized. You can add names, messages, photos, and choose designs during checkout. Look for the "Customize" option on product pages.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Processing takes 1-2 business days, and delivery typically takes 3-7 business days within India. Express delivery options are available during checkout.'
    },
    {
      question: 'Are custom products refundable?',
      answer: 'Customized products are generally non-refundable unless they arrive damaged or incorrect. We ensure quality checks before shipping. Non-custom items can be returned within 7 days.'
    },
    {
      question: 'How do I upload photos?',
      answer: 'After selecting a product, you\'ll see an "Upload Photo" option. You can upload JPG or PNG files up to 5MB. We recommend high-quality, well-lit photos for best results.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI, Net Banking, and popular digital wallets like Paytm, PhonePe, and Google Pay.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! We offer special discounts for bulk orders. Contact our customer support for customized quotes on orders above 10 units.'
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Why Ant Hands Section - Updated */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Ant Hands?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              We believe gifts should be as unique as the relationships they celebrate
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 group"
              >
                <div className="mb-4 md:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-xl border border-yellow-400/20 group-hover:border-yellow-400/40 transition-colors">
                    <div className="text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-yellow-300 mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative bottom line */}
                <div className="mt-4 md:mt-6 h-0.5 w-0 bg-gradient-to-r from-yellow-500 to-yellow-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section - Updated */}
        <div>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Asked Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Got questions? We've got answers about our personalized gifts
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="mb-3 last:mb-0"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="font-display text-lg font-semibold text-yellow-300 group-hover:text-yellow-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="text-xl text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-3 md:pt-4 bg-gray-900/30 backdrop-blur-sm rounded-b-xl md:rounded-b-2xl border border-yellow-400/20 border-t-0">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                          </div>
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA - Added */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 md:mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-6 md:p-8 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-2xl border border-yellow-400/30">
              <div className="text-center sm:text-left">
                <h3 className="font-display text-xl font-bold text-yellow-300 mb-1">
                  Still have questions?
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Our customer support team is here to help!
                </p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="mailto:hello@anthands.in"
                  className="px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] border border-yellow-400"
                >
                  Email Us
                </a>
                <a 
                  href="tel:+919876543210"
                  className="px-5 md:px-6 py-2.5 md:py-3 bg-gray-900 text-yellow-400 font-bold rounded-lg border border-yellow-400/30 hover:border-yellow-400 hover:bg-gray-800 transition-all duration-300"
                >
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InfoFAQ