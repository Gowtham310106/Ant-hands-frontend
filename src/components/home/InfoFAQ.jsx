// src/components/home/InfoFAQ.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const InfoFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const features = [
    {
      title: 'Personalized & Customized',
      description: 'Every gift is tailored to tell your unique story with custom names, messages, and photos.',
      icon: '🎨'
    },
    {
      title: 'Cute designs for every bond',
      description: 'From friendships to romance, we have designs that celebrate every relationship.',
      icon: '💝'
    },
    {
      title: 'Budget-friendly options',
      description: 'Quality personalized gifts starting from just ₹99. Express big emotions without breaking the bank.',
      icon: '💰'
    },
    {
      title: 'Simple ordering & delivery',
      description: 'Easy customization process with doorstep delivery across India.',
      icon: '🚚'
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
    }
  ]

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12">
      {/* Why Ant Hands Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Ant Hands?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We believe gifts should be as unique as the relationships they celebrate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-anthands-cream to-white p-6 rounded-2xl border border-anthands-pink/20"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Got questions? We've got answers about our personalized gifts
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4 last:mb-0"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-anthands-cream to-white rounded-2xl border border-anthands-pink/20 hover:border-anthands-pink transition-colors text-left"
              >
                <span className="font-display text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-xl text-anthands-rose" />
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
                    <div className="p-6 pt-4 bg-white rounded-b-2xl">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoFAQ