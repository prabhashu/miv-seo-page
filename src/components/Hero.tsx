import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { TrendingUp, Zap, Target } from 'lucide-react';
export function Hero() {
  return <section className="relative w-full py-24 md:py-32 px-4 bg-seo-bg overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-seo-gold/5 via-transparent to-seo-gold/10 pointer-events-none" />

      {/* Floating orbs */}
      <motion.div animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-20 right-20 w-96 h-96 bg-seo-gold/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div animate={{
      y: [0, 20, 0],
      opacity: [0.2, 0.4, 0.2]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }} className="absolute bottom-20 left-20 w-80 h-80 bg-seo-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Floating badges */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="flex flex-wrap gap-3">
              {[{
              icon: TrendingUp,
              text: 'Proven Results'
            }, {
              icon: Zap,
              text: 'Fast Setup'
            }, {
              icon: Target,
              text: 'Goal-Oriented'
            }].map((badge, i) => <div key={i} className="flex items-center space-x-2 bg-seo-card/50 backdrop-blur-sm border border-seo-gold/20 px-4 py-2 rounded-full">
                  <badge.icon className="w-4 h-4 text-seo-gold" />
                  <span className="text-sm text-seo-text-secondary">
                    {badge.text}
                  </span>
                </div>)}
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1,
            ease: 'easeOut'
          }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-seo-text-primary leading-tight tracking-tight">
              A Done-For-You SEO, Google & Website Growth Plan for{' '}
              <span className="bg-gradient-to-r from-seo-gold-light to-seo-gold-dark bg-clip-text text-transparent">
                Serious Business Owners
              </span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut'
          }} className="text-xl md:text-2xl text-seo-text-secondary leading-relaxed">
              Everything your business needs to grow online—handled by
              experts—for $500/month, locked for 12 months.{' '}
              <span className="text-seo-gold font-semibold">
                Limited to 30 businesses only.
              </span>
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3,
            ease: 'easeOut'
          }} className="pt-4">
              <Button onClick={() => document.getElementById('cta-section')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Apply for a 15-Minute Growth Consultation
              </Button>
              <p className="mt-4 text-sm text-seo-text-secondary/60">
                (Only serious business owners should apply.)
              </p>
            </motion.div>
          </div>

          {/* Right: Hero Visual */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative hidden lg:block">
            {/* Main image container with glassmorphism */}
            <div className="relative rounded-2xl overflow-hidden border border-seo-gold/20 bg-seo-card/30 backdrop-blur-sm shadow-2xl shadow-seo-gold/10">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80" alt="SEO Analytics Dashboard" className="w-full h-auto object-cover" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-seo-bg via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating stat cards */}
            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="absolute -bottom-6 -left-6 bg-seo-card/90 backdrop-blur-md border border-seo-gold/30 rounded-xl p-4 shadow-xl">
              <div className="text-3xl font-bold text-seo-gold">+247%</div>
              <div className="text-sm text-seo-text-secondary">
                Organic Growth
              </div>
            </motion.div>

            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }} className="absolute -top-6 -right-6 bg-seo-card/90 backdrop-blur-md border border-seo-gold/30 rounded-xl p-4 shadow-xl">
              <div className="text-3xl font-bold text-seo-gold">30</div>
              <div className="text-sm text-seo-text-secondary">Spots Left</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}