// src/pages/CancellationRefund.jsx
import { motion } from 'framer-motion'

const CancellationRefund = () => {
  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-8">
          Cancellation & Refund Policy
        </h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Customized Products</h2>
            <p className="text-slate-700 mb-4">
              Since all our products are personalized and made-to-order, we generally do not accept returns, 
              exchanges, or cancellations for customized items once production has begun.
            </p>
            <div className="bg-anthands-cream p-6 rounded-xl mb-4">
              <h3 className="font-semibold text-slate-900 mb-2">Important Notice:</h3>
              <p className="text-slate-700">
                Customized products cannot be resold to other customers, which is why we have strict policies 
                regarding returns and cancellations for personalized items.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Cancellation Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Before Processing:</h3>
                <p className="text-slate-700">
                  Orders can be cancelled within 2 hours of placement if production hasn't started yet. 
                  A full refund will be issued within 5-7 business days.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">After Processing:</h3>
                <p className="text-slate-700">
                  Once customization/production has begun, orders cannot be cancelled. This is because 
                  we start working on your personalized gift immediately after receiving your order.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Refund Policy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Eligible for Refund:</h3>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>Order cancelled within 2 hours (before processing)</li>
                  <li>Product arrives damaged or defective</li>
                  <li>Wrong product shipped (non-customized items only)</li>
                  <li>Significant quality issues affecting usability</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Not Eligible for Refund:</h3>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>Customized products (unless damaged/defective)</li>
                  <li>Change of mind after production has begun</li>
                  <li>Incorrect customization details provided by customer</li>
                  <li>Minor color variations from images shown</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Return Process</h2>
            <div className="space-y-4">
              <div className="bg-anthands-cream p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">For eligible returns:</h3>
                <ol className="list-decimal pl-6 text-slate-700 space-y-2">
                  <li>Contact us within 48 hours of delivery at support@anthands.in</li>
                  <li>Provide order number and photos of the issue</li>
                  <li>We'll provide a return authorization and shipping instructions</li>
                  <li>Once received and verified, refund will be processed in 5-7 business days</li>
                </ol>
              </div>
              
              <p className="text-slate-700">
                Return shipping costs will be covered by us for damaged/defective items. 
                For other eligible returns, return shipping is the customer's responsibility.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact for Assistance</h2>
            <p className="text-slate-700">
              For any questions regarding cancellations, returns, or refunds, please contact our support team:
            </p>
            <div className="bg-anthands-cream p-6 rounded-xl mt-4">
              <p className="text-slate-700">
                📧 Email: support@anthands.in<br/>
                📱 WhatsApp: +91 98765 43210<br/>
                ⏰ Response Time: Within 24 hours
              </p>
            </div>
          </section>
          
          <div className="text-sm text-slate-600 mt-12 pt-8 border-t border-anthands-pink">
            <p>Last updated: December 2023</p>
            <p className="mt-2">We strive to provide the best possible service and appreciate your understanding of our policies.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CancellationRefund