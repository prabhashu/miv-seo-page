import React from 'react';
import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { ServicesGrid } from '../components/ServicesGrid';
import { ExclusionList } from '../components/ExclusionList';
import { ScarcityBanner } from '../components/ScarcityBanner';
import { ProcessSteps } from '../components/ProcessSteps';
import { ObjectionHandling } from '../components/ObjectionHandling';
import { FAQ } from '../components/FAQ';
import { CTASection } from '../components/CTASection';
export function SEOLandingPage() {
  return <main className="min-h-screen bg-seo-bg text-seo-text-primary overflow-x-hidden font-sans selection:bg-seo-gold/30 selection:text-white">
      <Hero />
      <ValueProposition />
      <ServicesGrid />
      <ExclusionList />
      <ScarcityBanner />
      <ProcessSteps />
      <ObjectionHandling />
      <FAQ />
      <CTASection />

      <footer className="py-8 text-center text-seo-text-secondary/40 text-sm border-t border-seo-card bg-seo-bg">
        <p>
          © {new Date().getFullYear()} SEO Growth System. All rights reserved.
        </p>
      </footer>
    </main>;
}