'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle2, ShieldCheck, KeyRound } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#f8f9ff] via-[#f0f2fe] to-[#e8ebfa]">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-indigo-100 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-inner">
          <KeyRound className="w-7 h-7" />
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900">
          Reset Password
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 mb-6">
          Enter your registered email address and we&apos;ll send you a secure verification link to reset your credentials.
        </p>

        {submitted ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left mb-6 animate-in fade-in">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              Reset Link Sent
            </div>
            <p className="text-xs text-emerald-600">
              We dispatched instructions to <span className="font-semibold">{email}</span>. Please inspect your inbox and spam folder.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
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

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all flex items-center justify-center cursor-pointer"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100">
          <Link
            href="/login"
            className="inline-flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

