// src/pages/TermsConditions.jsx
import { motion } from 'framer-motion'

const TermsConditions = () => {
  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-8">
          Terms & Conditions
        </h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700">
              By accessing and using the Ant Hands website, you accept and agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Product Information</h2>
            <p className="text-slate-700 mb-4">
              We strive to display accurate product information, including colors, sizes, and prices. However, 
              slight variations may occur due to monitor settings and manufacturing processes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Customized products are made-to-order and may have slight variations from images shown</li>
              <li>Personalization details must be provided accurately during checkout</li>
              <li>We cannot be held responsible for errors in customization provided by customers</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Pricing and Payment</h2>
            <p className="text-slate-700 mb-4">
              All prices are in Indian Rupees (₹) and include applicable taxes. We reserve the right to change prices 
              without prior notice.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Payment must be completed in full before order processing begins</li>
              <li>We accept various payment methods including UPI, cards, and net banking</li>
              <li>Payment information is processed securely through our payment partners</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Shipping and Delivery</h2>
            <p className="text-slate-700">
              We ship across India. Delivery times vary based on location and product customization requirements.
              Standard delivery takes 3-7 business days after processing.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-700">
              Ant Hands shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of or inability to use the service.
            </p>
          </section>
          
          <div className="text-sm text-slate-600 mt-12 pt-8 border-t border-anthands-pink">
            <p>Last updated: December 2023</p>
            <p className="mt-2">For any queries regarding these terms, please contact us at support@anthands.in</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TermsConditions