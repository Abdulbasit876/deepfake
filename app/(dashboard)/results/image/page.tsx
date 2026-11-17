'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Download,
  AlertTriangle,
  Bot,
  ShieldCheck,
  Target,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Eye,
  CheckCircle2,
  Share2,
  FileText
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

function ImageResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileName = searchParams.get('file') || 'image_20261110.jpg';

  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Analysis Results
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Here are the detailed results of your file
          </p>
        </div>

        {/* Top Right Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/analysis"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200/90 shadow-sm hover:bg-slate-50 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Scan Again
          </Link>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all"
          >
            <Download className="w-4 h-4" />
            {downloadSuccess ? 'Report Downloaded!' : 'Download Report'}
          </button>
        </div>
      </div>

      {/* Main Grid: Left Main Result + Right Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Primary Result Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-6">
            {/* Split Preview + AI Score */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Image Preview (5 cols) */}
              <div className="sm:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-900 aspect-[4/3] flex items-center justify-center">
                {/* Mountain / scenic landscape vector artwork representation */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-indigo-300 to-indigo-950 opacity-90" />
                <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
                  {/* Sky & Sun */}
                  <circle cx="200" cy="80" r="35" fill="#fef08a" opacity="0.85" />
                  {/* Mountain back */}
                  <polygon points="50,260 160,110 270,260" fill="#312e81" opacity="0.8" />
                  {/* Mountain mid */}
                  <polygon points="170,260 260,130 360,260" fill="#1e1b4b" opacity="0.9" />
                  {/* Mountain snow peak */}
                  <polygon points="160,110 145,135 175,135" fill="#ffffff" />
                  <polygon points="260,130 248,150 272,150" fill="#ffffff" />
                  {/* Lake in foreground */}
                  <rect x="0" y="240" width="400" height="60" fill="#1e3a8a" opacity="0.9" />
                  <ellipse cx="200" cy="270" rx="180" ry="20" fill="#38bdf8" opacity="0.4" />
                </svg>

                {/* Heatmap overlay on hover */}
                <div className="absolute inset-0 bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-slate-900/80 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> High Frequency Noise Heatmap
                  </span>
                </div>
              </div>

              {/* AI Score Info (7 cols) */}
              <div className="sm:col-span-7 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold">
                  <Bot className="w-3.5 h-3.5" />
                  AI Generated
                </div>

                <div className="pt-1">
                  <span className="text-5xl sm:text-6xl font-black text-[#ff5757] tracking-tight block">
                    78.5%
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-500">
                    Real: 21.5%
                  </span>
                </div>
              </div>
            </div>

            {/* Red Alert Banner (From reference) */}
            <div className="p-3.5 rounded-2xl bg-rose-50/90 border border-rose-200 text-rose-700 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 text-rose-600">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold">
                This image is likely AI-generated.
              </span>
            </div>
          </div>

          {/* Detailed Breakdown Card (From reference) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-4">
            <h3 className="text-sm font-bold text-slate-900">
              Detailed Breakdown
            </h3>

            {/* AI Content Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">AI Content</span>
                <span className="text-rose-600">78.5%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full transition-all duration-700"
                  style={{ width: '78.5%' }}
                />
              </div>
            </div>

            {/* Real Content Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Real Content</span>
                <span className="text-emerald-600">21.5%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-700"
                  style={{ width: '21.5%' }}
                />
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 italic">
              Noticeable spectral discrepancies identified in background foliage and geometric reflection angles.
            </div>
          </div>
        </div>

        {/* Right Column: Insights Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-6">
            <h3 className="text-sm font-bold text-slate-900">
              Insights
            </h3>

            <div className="space-y-5">
              {/* Insight 1: AI Patterns */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">AI Patterns</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Detected in Image<br />
                    <span className="text-[11px] text-slate-400">(Style &amp; Structure)</span>
                  </p>
                </div>
              </div>

              {/* Insight 2: Source */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Source</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Likely AI generation tool<br />
                    <span className="text-[11px] text-slate-400">(Midjourney / Stable Diffusion)</span>
                  </p>
                </div>
              </div>

              {/* Insight 3: Confidence */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Confidence</h4>
                  <p className="text-xs text-emerald-600 font-bold mt-0.5">
                    Very High (98.4%)
                  </p>
                </div>
              </div>
            </div>

            {/* View Full Report Button (From reference) */}
            <Link
              href="/reports"
              className="w-full py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all flex items-center justify-center gap-2 mt-4"
            >
              View Full Report <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Forensic Hash Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-[11px] space-y-1 text-slate-500">
            <div className="font-bold text-slate-700">Cryptographic Hash (SHA-256):</div>
            <div className="font-mono text-[10px] break-all text-slate-600">
              e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImageAnalysisResultsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading analysis results...</div>}>
      <ImageResultContent />
    </Suspense>
  );
}

