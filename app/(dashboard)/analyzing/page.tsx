'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CheckCircle2,
  Loader2,
  Lightbulb,
  ArrowRight,
  Bot,
  Sparkles,
  ShieldCheck,
  Cpu
} from 'lucide-react';

function AnalyzingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileType = searchParams.get('type') || 'image';
  const fileName = searchParams.get('file') || 'image_20261110.jpg';

  const [progress, setProgress] = useState(24);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Dynamic progress animation
    const timer1 = setTimeout(() => {
      setProgress(52);
      setCurrentStep(2);
    }, 1200);

    const timer2 = setTimeout(() => {
      setProgress(72);
      setCurrentStep(2);
    }, 2400);

    const timer3 = setTimeout(() => {
      setProgress(94);
      setCurrentStep(3);
    }, 3800);

    const timer4 = setTimeout(() => {
      setProgress(100);
      setCurrentStep(3);
      setIsCompleted(true);
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const getTargetResultUrl = () => {
    if (fileType === 'video') return `/results/video?file=${encodeURIComponent(fileName)}`;
    if (fileType === 'audio') return `/results/audio?file=${encodeURIComponent(fileName)}`;
    if (fileType === 'pdf' || fileType === 'docx') return `/results/document?type=${fileType}&file=${encodeURIComponent(fileName)}`;
    return `/results/image?file=${encodeURIComponent(fileName)}`;
  };

  const handleViewResults = () => {
    router.push(getTargetResultUrl());
  };

  // SVG Circular calculation
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Analyzing Your File...
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          This will only take a few seconds
        </p>
      </div>

      {/* Main Content Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-subtle min-h-[500px] flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
          {/* Left / Center Progress Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center text-center py-4">
            {/* Circular Progress Gauge */}
            <div className="relative w-56 h-56 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="#f1f5f9"
                  strokeWidth="12"
                  fill="transparent"
                />
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="url(#progressGradient)"
                  strokeWidth="12"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-500 ease-out"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Number inside */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-slate-900 tracking-tight">
                  {progress}%
                </span>
                <span className="text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">
                  {isCompleted ? 'Complete' : 'Scanning'}
                </span>
              </div>
            </div>

            {/* Running AI status text */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 mb-6">
              {!isCompleted ? (
                <>
                  <Loader2 className="w-4 h-4 text-indigo-600 animate-spin flex-shrink-0" />
                  <span>Running AI models... Analyzing content for authenticity</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-emerald-700 font-bold">Analysis completed successfully!</span>
                </>
              )}
            </div>

            {/* Status Checklist (From reference image) */}
            <div className="w-full max-w-xs space-y-3 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700">File Processing</span>
              </div>

              <div className="flex items-center gap-3">
                {currentStep >= 2 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                ) : (
                  <Loader2 className="w-5 h-5 text-indigo-600 animate-spin flex-shrink-0" />
                )}
                <span className="text-xs font-bold text-slate-700">AI Analysis</span>
              </div>

              <div className="flex items-center gap-3">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                ) : currentStep === 3 ? (
                  <Loader2 className="w-5 h-5 text-indigo-600 animate-spin flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0" />
                )}
                <span className="text-xs font-bold text-slate-700">Generating Results</span>
              </div>
            </div>

            {/* View Results CTA */}
            {isCompleted && (
              <button
                onClick={handleViewResults}
                className="mt-8 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 animate-in fade-in zoom-in-95"
              >
                View Detailed Results <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Robot / AI Visual Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-indigo-50/50 to-purple-50/30 rounded-3xl border border-indigo-100/60 relative overflow-hidden">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center animate-float">
              {/* Cute 3D AI Robot Illustration Representation */}
              <div className="w-36 h-36 rounded-3xl bg-gradient-to-tr from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] p-1 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] p-4 flex flex-col items-center justify-between text-white relative">
                  {/* Robot Head with glowing eyes */}
                  <div className="w-16 h-10 rounded-xl bg-slate-900 border border-cyan-400/60 flex items-center justify-center gap-3 shadow-inner">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Tablet device robot is holding */}
                  <div className="w-24 h-16 rounded-xl bg-cyan-500/20 border border-cyan-300/40 p-2 flex flex-col justify-between shadow-lg">
                    <div className="w-full h-1.5 bg-cyan-400/80 rounded-full" />
                    <div className="w-2/3 h-1.5 bg-cyan-300/60 rounded-full" />
                    <div className="flex justify-between items-center text-[8px] text-cyan-200 font-bold">
                      <span>SCAN</span>
                      <span>{progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <span className="text-xs font-bold text-indigo-700 bg-white px-3 py-1 rounded-full shadow-sm border border-indigo-100">
                Neural Inspector 2.0
              </span>
              <p className="text-[11px] text-slate-500 mt-2">
                Processing {fileName}
              </p>
            </div>
          </div>
        </div>

        {/* Tip Box at bottom (Matching reference) */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-amber-900">
            <strong className="font-bold">Tip:</strong> Larger files may take a bit more time.
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AnalyzingPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading analysis status...</div>}>
      <AnalyzingContent />
    </Suspense>
  );
}

