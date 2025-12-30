import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, UserCheck, Rocket } from 'lucide-react';
const steps = [{
  title: 'Apply',
  desc: 'Apply for a 15-minute consultation',
  icon: Calendar
}, {
  title: 'Review',
  desc: 'We review your business & goals',
  icon: Search
}, {
  title: 'Invite',
  desc: "If you're a fit, we invite you to join",
  icon: UserCheck
}, {
  title: 'Onboard',
  desc: 'Onboarding begins within 48 hours',
  icon: Rocket
}];
export function ProcessSteps() {
  return <section className="w-full py-24 px-4 bg-seo-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold text-seo-text-primary mb-4">
            THE PROCESS
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
        }} className="text-seo-text-secondary">
            No pressure. No hard selling.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-seo-gold/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="relative z-10 flex flex-col items-center text-center group">
                {/* Icon container with glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-seo-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-seo-gold-light to-seo-gold-dark flex items-center justify-center shadow-lg shadow-seo-gold/20 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-seo-card border-2 border-seo-gold rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-seo-gold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-seo-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-seo-text-secondary max-w-[200px]">
                  {step.desc}
                </p>

                {/* Connector arrow for mobile */}
                {index < steps.length - 1 && <div className="lg:hidden mt-6 text-seo-gold/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-90">
                      <path d="M12 5v14m0 0l7-7m-7 7l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>}
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}