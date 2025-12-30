import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
const exclusions = ['Businesses looking for overnight rankings', 'One-off SEO or cheap monthly packages', 'DIY marketers who want control over every task', 'Businesses unwilling to follow a proven process'];
export function ExclusionList() {
  return <section className="w-full py-20 px-4 bg-seo-bg border-t border-seo-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-seo-text-primary mb-2">
            WHO THIS IS <span className="text-red-500">NOT</span> FOR
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exclusions.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -20 : 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="flex items-center space-x-4 bg-seo-card/50 p-6 rounded-lg border border-red-500/10">
              <div className="flex-shrink-0 bg-red-500/10 p-2 rounded-full">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <span className="text-seo-text-secondary font-medium text-lg">
                {item}
              </span>
            </motion.div>)}
        </div>
      </div>
    </section>;
}