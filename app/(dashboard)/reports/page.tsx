'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Video,
  Image as ImageIcon,
  Download,
  Eye,
  Crown,
  ArrowRight,
  CheckCircle2,
  X,
  FileDown,
  Printer
} from 'lucide-react';
import { mockReports } from '@/data/mockData';
import { ReportItem } from '@/types';

export default function ReportsPage() {
  const [reports, setReports] = useState<ReportItem[]>(mockReports);
  const [selectedReportForPreview, setSelectedReportForPreview] = useState<ReportItem | null>(null);
  const [downloadSuccessNotice, setDownloadSuccessNotice] = useState<string | null>(null);

  const handleDownloadPdf = (report: ReportItem) => {
    setDownloadSuccessNotice(`Generating official PDF export for ${report.code}...`);
    setTimeout(() => {
      setDownloadSuccessNotice(`Successfully downloaded ${report.code} (${report.title}).`);
      setTimeout(() => setDownloadSuccessNotice(null), 3500);
    }, 800);
  };

  const getReportIcon = (type: string) => {
    switch (type) {
      case 'Image':
        return <ImageIcon className="w-6 h-6 text-blue-500" />;
      case 'Video':
        return <Video className="w-6 h-6 text-purple-500" />;
      case 'PDF':
        return <FileText className="w-6 h-6 text-rose-500" />;
      case 'Word':
        return <FileText className="w-6 h-6 text-cyan-500" />;
      default:
        return <FileText className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Reports
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Download and access your detailed analysis reports
          </p>
        </div>

        <button
          onClick={() => setSelectedReportForPreview(mockReports[0])}
          className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
        >
          View All <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {downloadSuccessNotice && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          {downloadSuccessNotice}
        </div>
      )}

      {/* 3 Main Report Cards (Matching the reference layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.slice(0, 3).map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-indigo-200 transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="flex flex-col items-center">
              {/* Document icon box */}
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center mb-4 shadow-sm">
                {getReportIcon(report.fileType)}
              </div>

              {/* Code & Title */}
              <h3 className="text-base font-bold text-slate-900">
                {report.code}
              </h3>
              <p className="text-xs font-semibold text-indigo-600 mt-0.5">
                {report.title}
              </p>
              <span className="text-[11px] text-slate-400 mt-1">
                {report.date}
              </span>
            </div>

            {/* Actions */}
            <div className="w-full mt-6 space-y-2">
              <button
                type="button"
                onClick={() => handleDownloadPdf(report)}
                className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </button>
              <button
                type="button"
                onClick={() => setSelectedReportForPreview(report)}
                className="w-full py-1.5 text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Preview Summary
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upgrade to Premium Banner (Exact match with reference image) */}
      <div className="rounded-3xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#7c3aed] p-6 sm:p-7 text-white shadow-xl shadow-indigo-600/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 text-amber-300 shadow-inner">
            <Crown className="w-6 h-6 fill-amber-300" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
              Upgrade to Premium
            </h3>
            <p className="text-xs text-indigo-100 mt-0.5">
              Get unlimited scans and advanced forensic features.
            </p>
          </div>
        </div>

        <Link
          href="/#pricing"
          className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-indigo-900 bg-white hover:bg-slate-50 shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 flex-shrink-0"
        >
          Upgrade Now <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* PDF Report Preview Modal */}
      {selectedReportForPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-indigo-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span className="font-extrabold text-slate-900 text-base">
                  Forensic Certificate: {selectedReportForPreview.code}
                </span>
              </div>
              <button
                onClick={() => setSelectedReportForPreview(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Analysis Target</span>
                  <h4 className="text-sm font-bold text-slate-900">{selectedReportForPreview.title}</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500 uppercase">Verification Date</span>
                  <p className="text-xs font-semibold text-slate-800">{selectedReportForPreview.date}</p>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Forensic Findings
                </h5>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  {selectedReportForPreview.summary}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Detection Score</span>
                  <span className="text-base font-extrabold text-indigo-600">{selectedReportForPreview.aiScore}% AI Likelihood</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Tamper Signature</span>
                  <span className="text-base font-extrabold text-emerald-600">Cryptographically Sealed</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedReportForPreview(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full"
              >
                Close
              </button>
              <button
                onClick={() => handleDownloadPdf(selectedReportForPreview)}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Download Official PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

