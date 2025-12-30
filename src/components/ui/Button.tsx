import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
}
export function Button({
  className = '',
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'px-8 py-4 rounded font-bold text-lg transition-shadow duration-200';
  const variantClasses = variant === 'primary' ? 'bg-gold-gradient text-seo-text-button shadow-lg shadow-seo-gold/20 hover:shadow-seo-gold/40' : 'border-2 border-seo-gold text-seo-gold hover:bg-seo-gold/10';
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();
  return <motion.button whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }} className={combinedClasses} {...props}>
      {children}
    </motion.button>;
}