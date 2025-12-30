import React from 'react';
import { motion } from 'framer-motion';
const objections = [{
  q: 'Why is this only $500?',
  a: 'Because this is a systemized, long-term engagement, not a one-off project.'
}, {
  q: 'Do you guarantee rankings?',
  a: 'No. We guarantee execution, monitoring, and best-practice optimization—the only things Google actually rewards.'
}, {
  q: 'What if I’m not a good fit?',
  a: 'We’ll tell you honestly—and point you in the right direction.'
}];
export function ObjectionHandling() {
  return <section className="w-full py-20 px-4 bg-seo-bg border-t border-seo-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objections.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-seo-card p-8 rounded-lg border border-white/5 hover:border-seo-gold/30 transition-colors duration-300">
              <h3 className="text-xl font-bold text-seo-text-primary mb-4">
                “{item.q}”
              </h3>
              <p className="text-seo-text-secondary leading-relaxed">
                {item.a}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}