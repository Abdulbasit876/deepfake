'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Laptop
} from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('user@deepscan.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setIsLoading(true);
    setError('');

    // Simulate login and redirect to dashboard
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-[#f8f9ff] via-[#f0f2fe] to-[#e8ebfa]">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-indigo-100 grid grid-cols-1 md:grid-cols-12 min-h-[620px]">
        {/* Left Dark Branded Column */}
        <div className="md:col-span-5 bg-gradient-to-b from-[#0b0e27] via-[#121644] to-[#1d1b54] p-8 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle glow orbs */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Brand */}
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#6366f1] flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">DeepScan</span>
            </div>
            <p className="text-xs text-indigo-200 mt-2">
              Smarter Detection.<br />A More Trustworthy Internet.
            </p>
          </div>

          {/* Center Graphic */}
          <div className="my-8 flex flex-col items-center justify-center relative z-10">
            <div className="relative w-48 h-36 bg-gradient-to-b from-indigo-950/80 to-slate-900/90 rounded-2xl border border-indigo-500/30 p-3 shadow-glow flex flex-col items-center justify-center text-center">
              {/* Laptop screen mock */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center mb-2 shadow-md">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-[11px] font-bold text-cyan-200">DeepScan Guard</div>
              <div className="text-[9px] text-indigo-300">Active Security Mode</div>
              {/* Floating micro badges */}
              <div className="absolute -left-3 -top-2 bg-indigo-600 text-[9px] px-2 py-0.5 rounded-full text-white font-semibold shadow">
                99.9%
              </div>
              <div className="absolute -right-3 -bottom-2 bg-emerald-500 text-[9px] px-2 py-0.5 rounded-full text-white font-semibold shadow">
                Protected
              </div>
            </div>
            <div className="w-40 h-2 bg-slate-800 rounded-b-lg border-t border-slate-700/80" />
          </div>

          {/* Bottom Bullet Points */}
          <div className="space-y-3 relative z-10">
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Detect AI Generated Content</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Analyze Multiple File Types</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Get Detailed Reports</span>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Welcome Back!
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Sign in to your account
              </p>
            </div>

            {/* Segmented Tab */}
            <div className="flex p-1 bg-slate-100 rounded-full mb-6">
              <button
                type="button"
                className="flex-1 py-1.5 text-xs sm:text-sm font-bold rounded-full bg-white text-indigo-700 shadow-sm transition-all"
              >
                Login
              </button>
              <Link
                href="/signup"
                className="flex-1 py-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-800 text-center rounded-full transition-all"
              >
                Sign Up
              </Link>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 text-xs text-slate-600 cursor-pointer select-none">
                  Remember this device for 30 days
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <span className="relative px-3 bg-white text-xs text-slate-400 uppercase tracking-wider">
                or continue with
              </span>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="flex items-center justify-center gap-2 py-2 px-3 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Google
              </button>

              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="flex items-center justify-center gap-2 py-2 px-3 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-slate-800" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </button>
            </div>

            {/* Bottom Nav */}
            <p className="text-center text-xs text-slate-500 mt-6">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-bold text-indigo-600 hover:text-indigo-700">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

