import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
export function ValueProposition() {
  return <section className="w-full py-20 px-4 bg-seo-bg border-t border-seo-card relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-5">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&q=80" alt="Business analytics" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-seo-bg via-seo-bg/95 to-seo-bg" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            <div className="flex items-center space-x-3 text-red-400 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="w-6 h-6" />
              </div>
              <span className="font-semibold tracking-wide uppercase text-sm">
                The Problem
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-seo-text-primary leading-tight">
              Most business owners don't need "another marketing agency."
            </h2>
            <p className="text-lg text-seo-text-secondary leading-relaxed">
              They need clarity, consistency, and execution—without managing
              multiple vendors. You don't need more fluff, you need results.
            </p>

            {/* Problem visual indicator */}
            <div className="pt-4 flex items-center space-x-2 text-seo-text-secondary/60">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-seo-card border-2 border-seo-bg flex items-center justify-center text-xs">
                    ?
                  </div>)}
              </div>
              <span className="text-sm">
                Multiple vendors, zero coordination
              </span>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-seo-gold/20 to-seo-gold/5 rounded-2xl blur-2xl" />

            <div className="relative bg-seo-card/80 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-seo-gold/30 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-seo-gold">
                  The Solution
                </h3>
                <ArrowRight className="w-6 h-6 text-seo-gold" />
              </div>
              <p className="text-seo-text-secondary mb-8">
                This is a goal-oriented growth retainer designed to:
              </p>
              <ul className="space-y-4">
                {['Improve visibility', 'Protect your online reputation', 'Keep your website healthy, fast, and secure', 'Build long-term organic growth'].map((item, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.3 + index * 0.1
              }} className="flex items-start space-x-3 group">
                    <div className="p-1 bg-seo-gold/10 rounded-lg group-hover:bg-seo-gold/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-seo-gold flex-shrink-0" />
                    </div>
                    <span className="text-seo-text-primary font-medium">
                      {item}
                    </span>
                  </motion.li>)}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}