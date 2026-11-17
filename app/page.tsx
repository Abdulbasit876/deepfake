'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Building2,
  Image as ImageIcon,
  Video as VideoIcon,
  Mic,
  FileText,
  FileCode,
  CheckCircle2,
  Sparkles,
  Eye,
  Lock,
  ChevronRight,
  BarChart3,
  Cpu
} from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

export default function LandingPage() {
  const formats = [
    {
      title: 'Images',
      sub: '(Real vs AI)',
      icon: ImageIcon,
      color: 'from-blue-500 to-indigo-600',
      badge: 'Midjourney, DALL-E, SD',
      href: '/analysis?type=image',
    },
    {
      title: 'Videos',
      sub: '(Real vs AI)',
      icon: VideoIcon,
      color: 'from-indigo-500 to-purple-600',
      badge: 'Deepfake & Face-swap',
      href: '/analysis?type=video',
    },
    {
      title: 'Audio',
      sub: '(Real vs AI)',
      icon: Mic,
      color: 'from-purple-500 to-pink-600',
      badge: 'Voice Clones & TTS',
      href: '/analysis?type=audio',
    },
    {
      title: 'PDF Files',
      sub: '(AI Pages)',
      icon: FileText,
      color: 'from-rose-500 to-indigo-600',
      badge: 'Page-by-page Forensics',
      href: '/analysis?type=pdf',
    },
    {
      title: 'Word Files',
      sub: '(AI Content)',
      icon: FileCode,
      color: 'from-cyan-500 to-blue-600',
      badge: 'LLM Perplexity Analysis',
      href: '/analysis?type=docx',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8f9ff] via-[#f2f4fc] to-[#eef0fc]">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-300/20 via-purple-300/25 to-pink-200/20 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100 shadow-sm text-xs font-semibold text-indigo-700 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
                <span>DeepScan 2.0 Detection Engine Live</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                  Detect AI.{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#3b82f6]">
                    Verify Reality.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Advanced Deepfake & AI Content Detection for a Safer Digital World. Inspect images, videos, audio recordings, and documents in seconds with multi-model forensics.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
                <Link
                  href="/analysis"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                >
                  Start Free Scan
                  <ArrowRight className="w-5 h-5 ml-2.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow transition-all"
                >
                  Learn More
                </Link>
              </div>

              {/* Feature Statistics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-indigo-100/80">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">99.9%</div>
                    <div className="text-xs text-slate-500">Accuracy</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">&lt; 5s</div>
                    <div className="text-xs text-slate-500">Avg. Speed</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">All Formats</div>
                    <div className="text-xs text-slate-500">Supported</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Enterprise</div>
                    <div className="text-xs text-slate-500">Ready</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual 3D Graphic */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {/* Glowing decorative rings */}
                <div className="absolute inset-4 rounded-full border border-indigo-200/60 animate-pulse" />
                <div className="absolute inset-12 rounded-full border border-dashed border-indigo-300/40" />
                <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-400/20 rounded-full blur-2xl" />

                {/* Central 3D Shield Hero Container */}
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-tr from-[#3b82f6] via-[#6366f1] to-[#4338ca] p-1 shadow-2xl shadow-indigo-600/40 flex items-center justify-center animate-float">
                  <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-[#2e3794] to-[#121644] flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden">
                    {/* Glowing background rays */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-indigo-500/10 to-transparent" />
                    
                    {/* Large Glowing Shield */}
                    <div className="relative mb-3">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                        <ShieldCheck className="w-14 h-14 text-white stroke-[2.2]" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-emerald-400 text-slate-900 p-1 rounded-full shadow-md">
                        <CheckCircle2 className="w-4 h-4 text-slate-900" />
                      </div>
                    </div>

                    <div className="text-lg font-bold text-white tracking-wide">DeepScan Core</div>
                    <div className="text-xs text-cyan-200 font-medium">Neural Authenticity Engine</div>
                  </div>
                </div>

                {/* Floating Orbiting Media Badges */}
                <div className="absolute -top-4 right-8 bg-white p-3 rounded-2xl shadow-card border border-indigo-50 flex items-center gap-2.5 animate-float z-20">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Image Verified</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">99.8% Genuine</div>
                  </div>
                </div>

                <div className="absolute -bottom-2 -left-2 bg-white p-3 rounded-2xl shadow-card border border-indigo-50 flex items-center gap-2.5 animate-float-delayed z-20">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <VideoIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Deepfake Flagged</div>
                    <div className="text-[10px] text-rose-600 font-semibold">Synthetic Face</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white p-3 rounded-2xl shadow-card border border-indigo-50 flex items-center gap-2.5 animate-float z-20">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Voice Clone</div>
                    <div className="text-[10px] text-indigo-600 font-semibold">Spectrogram check</div>
                  </div>
                </div>

                <div className="absolute -top-6 -left-4 bg-white p-3 rounded-2xl shadow-card border border-indigo-50 flex items-center gap-2.5 animate-float-delayed z-20">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">PDF Scanned</div>
                    <div className="text-[10px] text-slate-500 font-semibold">Page-by-page</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Detect Anything. Anywhere." Formats Section (Directly from reference) */}
      <section className="py-16 bg-white/70 border-y border-indigo-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Detect Anything. Anywhere.
            </h2>
            <p className="text-base text-slate-500 mt-2">
              Multiple file types, one powerful AI detection system
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {formats.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-indigo-300 transition-all duration-200 flex flex-col items-center text-center"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.sub}
                  </p>
                  <span className="mt-3 text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                    {item.badge}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Forensic Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
            How DeepScan Catches Sophisticated AI
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Conventional metadata checks fail against re-encoded media. DeepScan analyzes intrinsic digital artifacts at the pixel, frame, acoustic, and token levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Visual Frequency Forensics</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Detects diffusion model latent noise, inconsistent specular highlights in pupils, and spectral fingerprint signatures left by Midjourney and Stable Diffusion.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Temporal Consistency</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Analyzes inter-frame biological metrics in video: micro-blinking rates, blood perfusion pulse signals (rPPG), and head rotation distortion artifacts.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy & Zero-Storage</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              All scans operate in volatile sandboxed memory with end-to-end encryption. Your confidential files are never retained or used to train third-party models.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="pricing" className="py-16 bg-gradient-to-r from-indigo-900 via-[#1c1854] to-slate-950 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Protect Your Organization from Deepfakes?
          </h2>
          <p className="mt-4 text-indigo-200 text-base max-w-2xl mx-auto">
            Join thousands of journalists, security teams, legal counsels, and platforms verifying media authenticity in real-time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-3.5 rounded-full font-bold text-indigo-950 bg-white hover:bg-slate-100 shadow-lg hover:scale-105 transition-all"
            >
              Get Started for Free
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-3.5 rounded-full font-semibold text-white bg-indigo-700/60 hover:bg-indigo-700 border border-indigo-400/40 transition-all"
            >
              Explore Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

