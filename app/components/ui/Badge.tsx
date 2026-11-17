import React from 'react';

export type BadgeVariant = 'ai' | 'real' | 'mixed' | 'likely-ai' | 'purple' | 'neutral';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  children,
  className = '',
  size = 'md',
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    ai: 'bg-rose-50 text-rose-600 border border-rose-200/60 font-semibold',
    real: 'bg-emerald-50 text-emerald-600 border border-emerald-200/60 font-semibold',
    mixed: 'bg-amber-50 text-amber-700 border border-amber-200/60 font-semibold',
    'likely-ai': 'bg-orange-50 text-orange-600 border border-orange-200/60 font-semibold',
    purple: 'bg-indigo-50 text-indigo-600 border border-indigo-200/60 font-semibold',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200 font-medium',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 rounded-full',
    md: 'text-xs sm:text-sm px-2.5 py-1 rounded-full',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};

