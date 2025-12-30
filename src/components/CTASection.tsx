import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
export function CTASection() {
  return <section id="cta-section" className="w-full py-24 px-4 bg-gradient-to-b from-seo-bg to-seo-card border-t border-seo-gold/20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-5">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop&q=80" alt="Team collaboration" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-seo-card via-seo-card/90 to-transparent" />

      {/* Glow effects */}
      <motion.div animate={{
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.3, 0.2]
    }} transition={{
      duration: 6,
      repeat: Infinity
    }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-seo-gold/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} className="inline-flex items-center space-x-2 bg-seo-card/50 backdrop-blur-sm border border-seo-gold/30 px-6 py-3 rounded-full mb-4">
          <CheckCircle className="w-5 h-5 text-seo-gold" />
          <span className="text-seo-gold font-semibold">
            Limited Time Offer
          </span>
        </motion.div>

        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-3xl md:text-5xl font-bold text-seo-text-primary">
          Ready to Grow Your Business?
        </motion.h2>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.1
      }} className="text-xl text-seo-text-secondary max-w-2xl mx-auto">
          Join the exclusive group of business owners who are serious about
          long-term, sustainable growth.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.2
      }} className="pt-4">
          <Button className="w-full md:w-auto text-xl px-10 py-5 group">
            Apply for a 15-Minute Growth Consultation
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3
      }} className="text-seo-text-secondary/60">
          (Only serious business owners should apply.)
        </motion.p>

        {/* Trust indicators */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }} className="flex flex-wrap justify-center gap-8 pt-8 border-t border-seo-card">
          {['✓ No long-term contracts', '✓ Cancel anytime', '✓ Results-driven approach'].map((item, i) => <span key={i} className="text-seo-text-secondary text-sm">
              {item}
            </span>)}
        </motion.div>
      </div>
    </section>;
}