// src/pages/PrivacyPolicy.jsx
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <div className="text-slate-600 mb-6">
            <p>Last updated: December 2023</p>
          </div>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              We collect information you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Create an account or place an order</li>
              <li>Contact our customer support</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-slate-700 mt-4">
              This information includes your name, email address, phone number, shipping address, 
              payment details, and customization preferences for your gifts.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li><strong>Order Processing:</strong> To create, process, and ship your personalized gifts</li>
              <li><strong>Communication:</strong> To send order confirmations, updates, and shipping notifications</li>
              <li><strong>Customer Support:</strong> To respond to your inquiries and provide assistance</li>
              <li><strong>Improvement:</strong> To enhance our products, services, and user experience</li>
              <li><strong>Marketing:</strong> To send promotional offers (only with your consent)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Secure socket layer (SSL) technology for data transmission</li>
              <li>Encrypted storage of sensitive information</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal data to authorized personnel only</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies and Tracking</h2>
            <p className="text-slate-700">
              We use cookies to improve your browsing experience, remember your preferences, 
              and analyze website traffic. You can control cookies through your browser settings.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Services</h2>
            <p className="text-slate-700 mb-4">
              We may share information with trusted third parties for specific purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li><strong>Payment Processors:</strong> To securely process your payments</li>
              <li><strong>Shipping Partners:</strong> To deliver your orders</li>
              <li><strong>Analytics Services:</strong> To understand how our website is used</li>
            </ul>
            <p className="text-slate-700 mt-4">
              These third parties are contractually obligated to protect your data and use it only for the 
              specified purposes.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
            <p className="text-slate-700">
              If you have any questions about this Privacy Policy or wish to exercise your rights, 
              please contact us at:
            </p>
            <div className="bg-anthands-cream p-6 rounded-xl mt-4">
              <p className="text-slate-700">
                📧 Email: privacy@anthands.in<br/>
                📍 Address: Ant Hands, Mumbai, India<br/>
                📱 Phone: +91 98765 43210
              </p>
            </div>
          </section>
          
          <div className="text-sm text-slate-600 mt-12 pt-8 border-t border-anthands-pink">
            <p>We may update this policy periodically. We will notify you of significant changes by posting 
            the new policy on this page.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PrivacyPolicy