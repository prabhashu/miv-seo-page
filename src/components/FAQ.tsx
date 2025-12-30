import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const faqs = [{
  q: 'Is there a contract?',
  a: 'Month-to-month, with pricing locked for 12 months.'
}, {
  q: 'Can I request content edits anytime?',
  a: 'Content updates are SEO-driven only.'
}, {
  q: 'When will I see results?',
  a: 'SEO is cumulative. Expect traction in 60–90 days with compounding gains.'
}];
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return <section className="w-full py-20 px-4 bg-seo-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-seo-text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="border border-seo-card rounded-lg overflow-hidden bg-seo-card/30">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-seo-card transition-colors">
                <span className="text-lg font-medium text-seo-text-primary">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-seo-gold transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openIndex === index && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                    <div className="p-6 pt-0 text-seo-text-secondary border-t border-seo-card/50">
                      {faq.a}
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </div>)}
        </div>
      </div>
    </section>;
}