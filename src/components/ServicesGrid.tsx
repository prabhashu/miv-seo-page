import React from 'react';
import { motion } from 'framer-motion';
import { Search, Gauge, Database, TrendingUp, FileText, MapPin, Star, Shield } from 'lucide-react';
const services = [{
  title: 'Technical SEO & site health monitoring',
  icon: Search
}, {
  title: 'Site speed & Core Web Vitals optimization',
  icon: Gauge
}, {
  title: 'Indexing & crawl issue management',
  icon: Database
}, {
  title: 'Google algorithm & AEO adjustments',
  icon: TrendingUp
}, {
  title: '4 SEO-optimized blog articles/month',
  icon: FileText
}, {
  title: 'Google Business Profile optimization & updates',
  icon: MapPin
}, {
  title: 'Reputation monitoring & response strategy',
  icon: Star
}, {
  title: 'WordPress updates, security & performance upkeep',
  icon: Shield
}];
export function ServicesGrid() {
  return <section className="w-full py-24 px-4 bg-seo-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-seo-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-block">
            <div className="inline-flex items-center space-x-3 bg-seo-card/50 backdrop-blur-sm border border-seo-gold/20 px-6 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-seo-gold rounded-full animate-pulse" />
              <span className="text-seo-gold font-semibold text-sm uppercase tracking-wider">
                Monthly Deliverables
              </span>
            </div>
          </motion.div>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-5xl font-bold text-seo-text-primary mb-4">
            WHAT'S INCLUDED
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
        }} className="text-seo-text-secondary text-lg">
            No fluff. No shortcuts. Just consistent execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group relative bg-seo-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-seo-gold/30 transition-all duration-300 h-full">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-seo-gold/0 to-seo-gold/0 group-hover:from-seo-gold/5 group-hover:to-transparent rounded-xl transition-all duration-300" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-gradient-to-br from-seo-gold/20 to-seo-gold/5 p-3 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-seo-gold" />
                </div>
                <p className="text-seo-text-primary font-medium leading-snug flex-grow">
                  {service.title}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}