// src/pages/About.jsx
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Ant Hands
          </h1>
          <p className="text-xl text-slate-700">
            Tiny gifts, giant emotions. We craft personalized moments that speak volumes.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-anthands-pink to-anthands-yellow rounded-3xl p-8 md:p-12 mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-800 mb-4">
                Ant Hands started with a simple observation: the most meaningful gifts are often the smallest ones. 
                In a world of mass-produced items, we noticed that personalized, handcrafted gifts carried the most emotional weight.
              </p>
              <p className="text-slate-800">
                Founded in 2023, we began as a tiny workshop creating customized wallet cards for friends and family. 
                Word spread about our attention to detail and emotional touch, and soon we were creating personalized gifts 
                for relationships of all kinds.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-anthands-pink to-anthands-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-4">
                Gifts that feel like hugs
              </h3>
              <p className="text-slate-600">
                Every product is designed to evoke emotion and connection, just like a warm embrace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-anthands-pink to-anthands-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-4">
                Personalized for every bond
              </h3>
              <p className="text-slate-600">
                From friendships to romance, we create gifts that celebrate your unique relationship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-anthands-pink to-anthands-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-4">
                Crafted with care
              </h3>
              <p className="text-slate-600">
                Each gift passes through multiple quality checks before reaching you, ensuring perfection.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-anthands-pink/20"
        >
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
            Our Mission
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 mb-6">
              At Ant Hands, we believe that gifts should tell stories. Our mission is to make personalized gifting 
              accessible, affordable, and emotionally resonant. We want to help people express what words sometimes can't—through 
              beautifully crafted, customized gifts that carry memories and emotions.
            </p>
            <blockquote className="border-l-4 border-anthands-pink pl-6 my-8">
              <p className="text-xl text-slate-900 italic">
                "We don't just make gifts. We craft tangible emotions that fit in your pocket."
              </p>
            </blockquote>
            <p className="text-slate-700">
              Whether it's a wallet card reminding someone they're loved, a photo keychain capturing a precious memory, 
              or a polaroid set documenting special moments—we're here to help you say it better.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About