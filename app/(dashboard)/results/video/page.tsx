'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Download,
  RefreshCw,
  Play,
  Pause,
  CheckCircle2,
  AlertTriangle,
  Bot,
  ShieldCheck,
  Video,
  Layers,
  ArrowRight,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

function VideoResultContent() {
  const searchParams = useSearchParams();
  const fileName = searchParams.get('file') || 'video_20261109.mp4';

  const [isPlaying, setIsPlaying] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const frames = [
    { time: '00:02', score: 3.2, status: 'Authentic' },
    { time: '00:05', score: 4.1, status: 'Authentic' },
    { time: '00:09', score: 3.5, status: 'Authentic' },
    { time: '00:14', score: 4.8, status: 'Authentic' },
    { time: '00:18', score: 3.9, status: 'Authentic' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Video Analysis Results
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Temporal &amp; biometric deepfake evaluation for <span className="font-semibold">{fileName}</span>
          </p>
        </div>

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Video Player Mockup (5 cols) */}
              <div className="sm:col-span-5 relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-950 aspect-[4/3] flex flex-col justify-between p-3 text-white">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    HD 1080p
                  </span>
                  <span>00:24</span>
                </div>

                {/* Central Play/Pause button */}
                <div className="flex flex-col items-center justify-center my-auto">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-transform hover:scale-110 shadow-lg"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                  </button>
                  <span className="text-[11px] text-slate-300 font-medium mt-2">
                    {isPlaying ? 'Playing biometric stream...' : 'Click to preview analysis video'}
                  </span>
                </div>

                {/* Timeline scrubber bar */}
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-emerald-400 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-400">
                    <span>00:09</span>
                    <span>00:24</span>
                  </div>
                </div>
              </div>

              {/* AI Score */}
              <div className="sm:col-span-7 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Real Content Verified
                </div>

                <div className="pt-1">
                  <span className="text-5xl sm:text-6xl font-black text-emerald-600 tracking-tight block">
                    96.2%
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-500">
                    AI Probability: 3.8%
                  </span>
                </div>
              </div>
            </div>

            {/* Green Notification Banner */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-emerald-800 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold">
                Authentic media verified: No temporal swap or deepfake artifacts detected.
              </span>
            </div>
          </div>

          {/* Temporal Frame Breakdown */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-4">
            <h3 className="text-sm font-bold text-slate-900">
              Frame-by-Frame Biological Telemetry
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {frames.map((f, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">{f.time}</span>
                  <span className="text-xs font-bold text-emerald-600 block mt-0.5">{f.status}</span>
                  <span className="text-[10px] text-slate-500">{(100 - f.score).toFixed(1)}% Real</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Real Content Probability</span>
                <span className="text-emerald-600">96.2%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" style={{ width: '96.2%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Insights Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-6">
            <h3 className="text-sm font-bold text-slate-900">Video Forensics Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Blink &amp; Saccade Rate</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Natural human involuntary eye micro-movements confirmed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">rPPG Blood Flow Pulse</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Skin color micro-fluctuations match realistic heartbeat pulse.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Lip-Sync Coherence</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Phoneme-to-viseme temporal phase delta within 12ms threshold.</p>
                </div>
              </div>
            </div>

            <Link
              href="/reports"
              className="w-full py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              View Full Report <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoAnalysisResultsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading video analysis...</div>}>
      <VideoResultContent />
    </Suspense>
  );
}

