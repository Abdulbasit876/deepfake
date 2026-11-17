'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('Abdul Basit');
  const [email, setEmail] = useState('user@deepscan.com');
  const [password, setPassword] = useState('password123');
  const [confirmPassword, setConfirmPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!agreeTerms) {
      setError('Please agree to the Terms of Service');
      return;
    }
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-[#f8f9ff] via-[#f0f2fe] to-[#e8ebfa]">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-indigo-100 grid grid-cols-1 md:grid-cols-12 min-h-[640px]">
        {/* Left Dark Column */}
        <div className="md:col-span-5 bg-gradient-to-b from-[#0b0e27] via-[#121644] to-[#1d1b54] p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#6366f1] flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">DeepScan</span>
            </div>
            <p className="text-xs text-indigo-200 mt-2">
              Start verifying authenticity with industry-leading accuracy.
            </p>
          </div>

          <div className="my-8 space-y-4 relative z-10">
            <div className="p-4 rounded-2xl bg-white/5 border border-indigo-500/20 backdrop-blur-sm">
              <h4 className="text-sm font-bold text-white mb-1">Free Tier Benefits:</h4>
              <ul className="space-y-2 text-xs text-indigo-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  5 free high-resolution scans per month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Full image and document forensic breakdown
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Instant downloadable PDF verification reports
                </li>
              </ul>
            </div>
          </div>

          <div className="text-[11px] text-indigo-300 relative z-10">
            No credit card required. Instant account setup.
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Create Account
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Start your 14-day full forensic trial
              </p>
            </div>

            {/* Segmented Tab */}
            <div className="flex p-1 bg-slate-100 rounded-full mb-6">
              <Link
                href="/login"
                className="flex-1 py-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-800 text-center rounded-full transition-all"
              >
                Login
              </Link>
              <button
                type="button"
                className="flex-1 py-1.5 text-xs sm:text-sm font-bold rounded-full bg-white text-indigo-700 shadow-sm transition-all"
              >
                Sign Up
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Abdul Basit"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Work or Personal Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="user@deepscan.com"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Password
                </label>
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

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                  />
                </div>
              </div>

              <div className="flex items-center pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer"
                />
                <label htmlFor="terms" className="ml-2 text-xs text-slate-600 cursor-pointer">
                  I agree to the <span className="text-indigo-600 hover:underline">Terms of Service</span> and <span className="text-indigo-600 hover:underline">Privacy Policy</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Create Account <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-xs text-slate-500 mt-5">
              Already have an account?{' '}
              <Link href="/login" className="font-bold text-indigo-600 hover:text-indigo-700">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

