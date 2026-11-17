'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Download,
  Eye,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Video as VideoIcon,
  FileText,
  FileCode,
  Mic,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { mockScans } from '@/data/mockData';
import { Badge } from '@/components/ui/Badge';
import { ScanItem } from '@/types';

function HistoryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedType, setSelectedType] = useState<string>('All');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  // Filtered scans
  const filteredScans = mockScans.filter((item) => {
    const matchesSearch =
      item.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.result.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || item.fileType === selectedType;
    return matchesSearch && matchesType;
  });

  const handleDownload = (scan: ScanItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloadNotice(`Downloading forensic report for ${scan.fileName}...`);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  const navigateToResult = (scan: ScanItem) => {
    const typeLower = scan.fileType.toLowerCase();
    if (typeLower === 'image') {
      router.push(`/results/image?file=${encodeURIComponent(scan.fileName)}`);
    } else if (typeLower === 'video') {
      router.push(`/results/video?file=${encodeURIComponent(scan.fileName)}`);
    } else if (typeLower === 'audio') {
      router.push(`/results/audio?file=${encodeURIComponent(scan.fileName)}`);
    } else {
      router.push(`/results/document?type=${typeLower}&file=${encodeURIComponent(scan.fileName)}`);
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'Image':
        return <ImageIcon className="w-4 h-4 text-blue-500" />;
      case 'Video':
        return <VideoIcon className="w-4 h-4 text-purple-500" />;
      case 'PDF':
        return <FileText className="w-4 h-4 text-rose-500" />;
      case 'Word':
        return <FileCode className="w-4 h-4 text-cyan-500" />;
      case 'Audio':
        return <Mic className="w-4 h-4 text-emerald-500" />;
      default:
        return <FileText className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Title & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Scan History
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Your previous scans and analysis reports
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter file name..."
              className="pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm text-slate-700"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200/90 shadow-sm hover:bg-slate-50 transition-colors"
            >
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span>{selectedType === 'All' ? 'Filter' : selectedType}</span>
            </button>

            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-indigo-100 p-1.5 z-30 animate-in fade-in text-xs font-semibold">
                {['All', 'Image', 'Video', 'PDF', 'Word', 'Audio'].map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setSelectedType(t);
                      setShowFilterDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors ${
                      selectedType === t
                        ? 'bg-indigo-50 text-indigo-700 font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t === 'All' ? 'All Types' : t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {downloadNotice && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          {downloadNotice}
        </div>
      )}

      {/* Main Table Card (Exact match with reference image) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-subtle overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">File Name</th>
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Result</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredScans.length > 0 ? (
                filteredScans.map((scan) => {
                  return (
                    <tr
                      key={scan.id}
                      onClick={() => navigateToResult(scan)}
                      className="hover:bg-indigo-50/40 transition-colors cursor-pointer group"
                    >
                      {/* File Name */}
                      <td className="py-4 px-6 font-semibold text-slate-800 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                          {getFileIcon(scan.fileType)}
                        </div>
                        <span className="group-hover:text-indigo-600 transition-colors">
                          {scan.fileName}
                        </span>
                      </td>

                      {/* Type */}
                      <td className="py-4 px-6 text-slate-600 font-medium">
                        {scan.fileType}
                      </td>

                      {/* Result Badge (With exact percentages from reference) */}
                      <td className="py-4 px-6">
                        <Badge
                          variant={
                            scan.result === 'AI Generated'
                              ? 'ai'
                              : scan.result === 'Real'
                              ? 'real'
                              : scan.result === 'Likely AI'
                              ? 'likely-ai'
                              : 'mixed'
                          }
                        >
                          {scan.result} {scan.result === 'AI Generated' ? `(${scan.aiScore}%)` : scan.result === 'Real' ? `(${scan.realScore}%)` : ''}
                        </Badge>
                      </td>

                      {/* Date & Time */}
                      <td className="py-4 px-6 text-slate-500 font-medium text-xs whitespace-nowrap">
                        {scan.date}, {scan.time}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="inline-flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={(e) => handleDownload(scan, e)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                            title="Download Report"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => navigateToResult(scan)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                            title="View Analysis Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400 text-xs">
                    No scans found matching your filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination at bottom (From reference image: < 1 2 3 >) */}
        <div className="py-4 px-6 border-t border-slate-100 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                currentPage === page
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ScanHistoryPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading scan history...</div>}>
      <HistoryContent />
    </Suspense>
  );
}

