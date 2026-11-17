'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Download,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  Mic,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  AudioWaveform
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

function AudioResultContent() {
  const searchParams = useSearchParams();
  const fileName = searchParams.get('file') || 'audio_20261106.mp3';

  const [isPlaying, setIsPlaying] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  // Waveform bars simulation
  const waveformHeights = [
    20, 35, 60, 45, 80, 95, 70, 40, 25, 55, 85, 90, 65, 30, 45, 75, 100, 85, 50, 30, 60, 70, 40, 20, 50, 75, 90, 60, 35
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Audio Analysis Results
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Vocal clone &amp; synthetic speech detection for <span className="font-semibold">{fileName}</span>
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
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Audio Waveform Player (5 cols) */}
              <div className="sm:col-span-5 bg-gradient-to-br from-[#131644] to-[#090b24] rounded-2xl p-4 text-white shadow-md flex flex-col justify-between aspect-[4/3]">
                <div className="flex items-center justify-between text-xs text-indigo-300">
                  <span className="flex items-center gap-1 font-semibold">
                    <Mic className="w-3.5 h-3.5 text-cyan-400" /> 44.1 kHz FLAC
                  </span>
                  <span>00:48</span>
                </div>

                {/* Animated Waveform Bars */}
                <div className="my-auto flex items-center justify-between gap-1 h-20 px-2">
                  {waveformHeights.map((h, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlaying
                          ? 'bg-gradient-to-t from-cyan-400 to-indigo-400 animate-pulse'
                          : 'bg-indigo-300/60'
                      }`}
                      style={{ height: `${isPlaying ? Math.max(15, (h + (i % 3) * 10) % 100) : h}%` }}
                    />
                  ))}
                </div>

                {/* Player Controls */}
                <div className="flex items-center justify-between pt-2 border-t border-indigo-900/60">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <span className="text-[11px] text-slate-300 font-mono">
                    {isPlaying ? '00:14 / 00:48' : '00:00 / 00:48'}
                  </span>
                  <Volume2 className="w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* AI Score */}
              <div className="sm:col-span-7 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Likely Human Voice Verified
                </div>

                <div className="pt-1">
                  <span className="text-5xl sm:text-6xl font-black text-emerald-600 tracking-tight block">
                    94.7%
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-500">
                    Synthetic Probability: 5.3%
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-emerald-800 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold">
                Organic voice markers confirmed: Natural respiration pauses &amp; room acoustic decay present.
              </span>
            </div>
          </div>

          {/* Breakdown Bars */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Acoustic Breakdown</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700">Human Voice Confidence</span>
                  <span className="text-emerald-600">94.7%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" style={{ width: '94.7%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700">AI / Neural TTS Likelihood</span>
                  <span className="text-rose-600">5.3%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full" style={{ width: '5.3%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Insights (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-6">
            <h3 className="text-sm font-bold text-slate-900">Spectrogram Telemetry</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Formant Jitter &amp; Shimmer</h4>
                  <p className="text-xs text-slate-500 mt-0.5">High micro-frequency variation characteristic of human larynx.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Vocoder Artifact Check</h4>
                  <p className="text-xs text-slate-500 mt-0.5">No HiFi-GAN or WaveNet phase cancellation detected.</p>
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

export default function AudioAnalysisResultsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading audio analysis...</div>}>
      <AudioResultContent />
    </Suspense>
  );
}

