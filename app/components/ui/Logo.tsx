import React from 'react';
import Link from 'next/link';
import { Shield, Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  clickable?: boolean;
  href?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  clickable = true,
  href = '/',
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const content = (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <div className={`relative ${iconSizes[size]} flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#3b82f6] via-[#6366f1] to-[#4f46e5] shadow-md shadow-indigo-500/30 text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        {/* Inner subtle glow and shield */}
        <Shield className="w-5/6 h-5/6 fill-white/10 stroke-[2.2] text-white" />
        <span className="absolute inset-0 flex items-center justify-center font-black text-cyan-300 text-xs">
          ✓
        </span>
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
      </div>
      {showText && (
        <span className={`${textSizes[size]} text-slate-900 font-extrabold flex items-center`}>
          Deep<span className="text-indigo-600">Scan</span>
        </span>
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link href={href} className="group inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
};

