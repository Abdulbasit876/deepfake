'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Download,
  RefreshCw,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Bot,
  User,
  Image as ImageIcon,
  Layers,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  FileCode
} from 'lucide-react';
import { mockDocumentPages } from '@/data/mockData';
import { Badge } from '@/components/ui/Badge';

function DocumentResultContent() {
  const searchParams = useSearchParams();
  const fileType = searchParams.get('type') || 'pdf';
  const fileName = searchParams.get('file') || 'document.pdf';

  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const activePage = mockDocumentPages[selectedPageIndex] || mockDocumentPages[0];

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const totalPages = 12;
  const humanPages = 7;
  const aiPages = 4;
  const mixedPages = 1;

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Document Analysis Results
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Page-by-page LLM &amp; embedded media forensics for <span className="font-semibold">{fileName}</span>
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

      {/* Overview Stat Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-subtle flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-slate-900">{totalPages} Pages</div>
            <div className="text-xs text-slate-500 font-medium">Total Inspected</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-subtle flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-emerald-600">{humanPages} Pages</div>
            <div className="text-xs text-slate-500 font-medium">Human-Written</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-subtle flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-rose-600">{aiPages} Pages</div>
            <div className="text-xs text-slate-500 font-medium">AI-Generated</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-subtle flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-amber-600">{mixedPages} Page</div>
            <div className="text-xs text-slate-500 font-medium">Mixed / Hybrid</div>
          </div>
        </div>
      </div>

      {/* Main Page-by-Page Forensic Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Page Navigator Strip (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-slate-200/80 shadow-subtle space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Page Forensics Breakdown
            </h3>
            <span className="text-xs text-slate-400">Select page</span>
          </div>

          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {mockDocumentPages.map((page, index) => {
              const isSelected = selectedPageIndex === index;
              return (
                <div
                  key={page.pageNumber}
                  onClick={() => setSelectedPageIndex(index)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-400 shadow-sm'
                      : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
                      p.{page.pageNumber}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        Page {page.pageNumber}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {page.hasEmbeddedImage ? 'Includes image scan' : 'Text only'}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge
                      variant={
                        page.status === 'Human'
                          ? 'real'
                          : page.status === 'AI Generated'
                          ? 'ai'
                          : 'mixed'
                      }
                      size="sm"
                    >
                      {page.status}
                    </Badge>
                    <span className="block text-[10px] text-slate-400 mt-1">
                      {page.aiScore}% AI
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Page Detail View (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs">
                  Page {activePage.pageNumber} of {totalPages}
                </span>
                <Badge
                  variant={
                    activePage.status === 'Human'
                      ? 'real'
                      : activePage.status === 'AI Generated'
                      ? 'ai'
                      : 'mixed'
                  }
                >
                  {activePage.status}
                </Badge>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 font-medium">Confidence: </span>
                <span className="text-xs font-bold text-slate-800">96.8%</span>
              </div>
            </div>

            {/* Score Comparison Bar */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
                <span className="text-xs font-bold text-slate-600 block">AI Probability</span>
                <span className="text-3xl font-black text-rose-600 mt-1 block">
                  {activePage.aiScore}%
                </span>
                <div className="w-full h-1.5 bg-rose-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-rose-600 rounded-full" style={{ width: `${activePage.aiScore}%` }} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <span className="text-xs font-bold text-slate-600 block">Human Authorship</span>
                <span className="text-3xl font-black text-emerald-600 mt-1 block">
                  {activePage.humanScore}%
                </span>
                <div className="w-full h-1.5 bg-emerald-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${activePage.humanScore}%` }} />
                </div>
              </div>
            </div>

            {/* Highlighted Text Forensics */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Examine Text Sample Forensics:
              </h4>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
                {activePage.status === 'AI Generated' ? (
                  <span className="bg-rose-100 text-rose-950 px-1 py-0.5 rounded">
                    {activePage.textSnippet}
                  </span>
                ) : activePage.status === 'Mixed' ? (
                  <span className="bg-amber-100 text-amber-950 px-1 py-0.5 rounded">
                    {activePage.textSnippet}
                  </span>
                ) : (
                  <span className="text-slate-800">
                    {activePage.textSnippet}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400">
                * Highlighted segments exhibit anomalous uniform perplexity and burstiness markers consistent with generative LLMs.
              </p>
            </div>

            {/* Embedded Image Analysis if present */}
            {activePage.hasEmbeddedImage && (
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Embedded Graphic Detected (Fig 2.1)</h5>
                    <p className="text-[11px] text-slate-500">Inspected via visual diffusion model scanner</p>
                  </div>
                </div>

                <div className="text-right">
                  <Badge variant={activePage.embeddedImageAiScore && activePage.embeddedImageAiScore > 50 ? 'ai' : 'real'}>
                    {activePage.embeddedImageAiScore}% AI
                  </Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DocumentAnalysisResultsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading document forensics...</div>}>
      <DocumentResultContent />
    </Suspense>
  );
}

