'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Scan,
  ShieldCheck,
  Bot,
  Percent,
  TrendingUp,
  Upload,
  Clock,
  Download,
  Crown,
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  Lock,
  FileCheck2,
  Image as ImageIcon,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { mockScans } from '@/data/mockData';
import { Badge } from '@/components/ui/Badge';

export default function DashboardOverviewPage() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState('Last 30 Days');
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  const stats = [
    {
      title: 'Total Scans',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: Scan,
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Real Content',
      value: '18',
      change: '+8%',
      trend: 'up',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'AI Generated',
      value: '6',
      change: '+4%',
      trend: 'up',
      icon: Bot,
      iconBg: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'Accuracy',
      value: '98.7%',
      change: '+0.5%',
      trend: 'up',
      icon: Percent,
      iconBg: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title Bar */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Here&apos;s an overview of your AI detection activity
        </p>
      </div>

      {/* 4 Stat Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle flex flex-col justify-between hover:shadow-card transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  {item.title}
                </span>
                <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900">
                  {item.value}
                </span>
                <span className="inline-flex items-center text-xs font-bold text-emerald-600">
                  {item.change} ↑
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Section: Detection Overview Chart & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Chart Container (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Detection Overview
              </h2>
              {/* Legend */}
              <div className="flex items-center gap-4 mt-1.5">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Real
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                  AI Generated
                </div>
              </div>
            </div>

            {/* Range dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <span>{timeRange}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {showTimeDropdown && (
                <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-20 text-xs">
                  {['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'This Year'].map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTimeRange(t);
                        setShowTimeDropdown(false);
                      }}
                      className="w-full text-left px-3 py-1.5 hover:bg-indigo-50 hover:text-indigo-600 font-medium text-slate-700"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* SVG Smooth Curve Area Chart (Matching the exact curves from reference) */}
          <div className="w-full h-56 relative pt-4">
            <svg
              viewBox="0 0 500 200"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Purple gradient for AI Generated */}
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.0" />
                </linearGradient>

                {/* Blue gradient for Real */}
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Horizontal Guide Lines */}
              {[40, 80, 120, 160].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="500"
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Real Content Curve (Blue) */}
              <path
                d="M 0 130 C 70 80, 130 170, 200 110 C 270 50, 340 130, 420 70 C 460 40, 490 60, 500 65 L 500 200 L 0 200 Z"
                fill="url(#blueGrad)"
              />
              <path
                d="M 0 130 C 70 80, 130 170, 200 110 C 270 50, 340 130, 420 70 C 460 40, 490 60, 500 65"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* AI Generated Curve (Purple) */}
              <path
                d="M 0 175 C 60 160, 120 185, 180 150 C 240 110, 310 165, 380 90 C 430 40, 470 70, 500 95 L 500 200 L 0 200 Z"
                fill="url(#purpleGrad)"
              />
              <path
                d="M 0 175 C 60 160, 120 185, 180 150 C 240 110, 310 165, 380 90 C 430 40, 470 70, 500 95"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Data points */}
              <circle cx="200" cy="110" r="4" fill="#3b82f6" className="animate-pulse" />
              <circle cx="380" cy="90" r="4" fill="#7c3aed" className="animate-pulse" />
              <circle cx="420" cy="70" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-slate-400 font-medium select-none pointer-events-none">
              <span>16</span>
              <span>12</span>
              <span>08</span>
              <span>04</span>
              <span>00</span>
            </div>

            {/* X Axis Labels */}
            <div className="flex justify-between text-[11px] text-slate-400 font-semibold pt-2 px-6">
              <span>Oct 20</span>
              <span>Oct 27</span>
              <span>Nov 03</span>
              <span>Nov 10</span>
            </div>
          </div>
        </div>

        {/* Right: Quick Actions Card (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
          <h2 className="text-base font-bold text-slate-900 mb-4">
            Quick Actions
          </h2>

          <div className="space-y-3">
            <Link
              href="/analysis"
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-indigo-50/70 hover:bg-indigo-100/70 border border-indigo-100 text-indigo-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                  <Upload className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Upload File</span>
              </div>
              <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/history"
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 text-slate-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shadow-sm">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">View History</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/reports"
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 text-slate-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shadow-sm">
                  <Download className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Download Reports</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/#pricing"
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100/80 hover:to-orange-100/80 border border-amber-200/80 text-amber-800 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-sm">
                  <Crown className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Upgrade Plan</span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Scans & Security Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Recent Scans (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-900">Recent Scans</h2>
            <Link
              href="/history"
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {mockScans.slice(0, 3).map((scan) => (
              <div
                key={scan.id}
                onClick={() => router.push(`/results/${scan.fileType.toLowerCase() === 'word' ? 'document' : scan.fileType.toLowerCase()}`)}
                className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 hover:text-indigo-600">
                      {scan.fileName}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {scan.time} • {scan.fileSize}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge
                    variant={
                      scan.result === 'AI Generated'
                        ? 'ai'
                        : scan.result === 'Real'
                        ? 'real'
                        : 'mixed'
                    }
                  >
                    {scan.result}
                  </Badge>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Security Guarantee Card (4 cols) */}
        <div className="lg:col-span-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50/60 rounded-3xl p-6 border border-indigo-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/25 flex-shrink-0">
            <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Your data is secure</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              End-to-end encrypted &amp; private. Files are processed in memory and never stored.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

