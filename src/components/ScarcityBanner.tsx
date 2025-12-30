import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Users, Clock, Sparkles } from 'lucide-react';
export function ScarcityBanner() {
  return <section className="w-full py-16 px-4 bg-gradient-to-r from-seo-card via-seo-card/80 to-seo-card border-y border-seo-gold/30 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div animate={{
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1]
    }} transition={{
      duration: 8,
      repeat: Infinity
    }} className="absolute top-0 right-0 w-96 h-96 bg-seo-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-seo-gold" />
              <h2 className="text-3xl font-bold text-seo-gold">
                SCARCITY & EXCLUSIVITY
              </h2>
            </motion.div>
            <motion.p initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="text-xl text-seo-text-primary">
              This program is intentionally limited. This protects results,
              focus, and quality.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{
            icon: Users,
            text: 'We work with ONLY 30 businesses',
            color: 'from-blue-500 to-cyan-500'
          }, {
            icon: Lock,
            text: 'Every client is personally reviewed',
            color: 'from-purple-500 to-pink-500'
          }, {
            icon: Clock,
            text: 'Once spots are filled, enrollment closes',
            color: 'from-orange-500 to-red-500'
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }} className="relative group">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-opacity duration-300`} />

                <div className="relative flex flex-col items-center text-center space-y-3 bg-seo-bg/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 group-hover:border-seo-gold/30 transition-all duration-300">
                  <div className={`p-3 bg-gradient-to-br ${item.color} bg-opacity-10 rounded-full`}>
                    <item.icon className="w-6 h-6 text-seo-gold" />
                  </div>
                  <p className="text-seo-text-secondary text-sm font-medium leading-snug">
                    {item.text}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}