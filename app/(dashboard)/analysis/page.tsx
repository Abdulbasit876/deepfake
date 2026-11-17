'use client';

import React, { useState, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  UploadCloud,
  Image as ImageIcon,
  Video as VideoIcon,
  FileText,
  FileCode,
  Mic,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  X,
  ArrowRight,
  Layers,
  File
} from 'lucide-react';

function AnalysisContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    size: string;
    type: 'image' | 'video' | 'audio' | 'pdf' | 'docx';
    raw?: File;
  } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle Drag & Drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    setErrorMsg('');
    const extension = file.name.split('.').pop()?.toLowerCase();
    let detectedType: 'image' | 'video' | 'audio' | 'pdf' | 'docx' = 'image';

    if (['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp'].includes(extension || '')) {
      detectedType = 'image';
    } else if (['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(extension || '')) {
      detectedType = 'video';
    } else if (['mp3', 'wav', 'm4a', 'flac', 'aac'].includes(extension || '')) {
      detectedType = 'audio';
    } else if (['pdf'].includes(extension || '')) {
      detectedType = 'pdf';
    } else if (['docx', 'doc'].includes(extension || '')) {
      detectedType = 'docx';
    } else {
      setErrorMsg('Unsupported format. Please upload an Image, Video, Audio, PDF, or Word document.');
      return;
    }

    const sizeInMB = (file.size / (1024 * 1024)).toFixed(1);
    setSelectedFile({
      name: file.name,
      size: `${sizeInMB} MB`,
      type: detectedType,
      raw: file,
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const loadExample = (type: 'image' | 'video' | 'pdf' | 'docx') => {
    const examples = {
      image: { name: 'sample_deepfake_face.jpg', size: '3.4 MB', type: 'image' as const },
      video: { name: 'interview_clip_synthesized.mp4', size: '24.2 MB', type: 'video' as const },
      pdf: { name: 'academic_paper_v3.pdf', size: '4.8 MB', type: 'pdf' as const },
      docx: { name: 'corporate_announcement.docx', size: '1.2 MB', type: 'docx' as const },
    };
    setSelectedFile(examples[type]);
  };

  const startAnalysis = () => {
    if (!selectedFile) return;
    setIsUploading(true);

    // Simulate quick upload progress
    let progress = 10;
    const interval = setInterval(() => {
      progress += 25;
      if (progress >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
        setTimeout(() => {
          router.push(`/analyzing?type=${selectedFile.type}&file=${encodeURIComponent(selectedFile.name)}`);
        }, 400);
      } else {
        setUploadProgress(progress);
      }
    }, 150);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            New Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Upload your file and let our AI do the magic
          </p>
        </div>

        {/* Supports all file types whimsical callout */}
        <div className="flex items-center gap-2 bg-indigo-50/80 border border-indigo-200/70 px-4 py-2 rounded-2xl shadow-sm">
          <span className="text-sm font-bold text-indigo-700 italic">
            Supports all file types!
          </span>
          <span className="text-indigo-500 font-bold text-base">✨</span>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      {/* Main Grid: Upload Zone + 3D Decorative Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Upload Zone (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col items-center">
          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleChange}
            accept="image/*,video/*,audio/*,.pdf,.docx,.doc"
            className="hidden"
          />

          {/* Drag & Drop Area Box */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`w-full rounded-3xl border-2 border-dashed p-8 sm:p-12 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center ${
              dragActive
                ? 'border-indigo-600 bg-indigo-50/70 scale-[0.99]'
                : 'border-indigo-200/80 bg-[#f9faff] hover:bg-indigo-50/30 hover:border-indigo-400'
            }`}
          >
            {/* Upload Cloud Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
              <UploadCloud className="w-9 h-9 sm:w-11 sm:h-11 stroke-[1.8]" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Drag &amp; drop your file here
            </h3>
            <span className="text-xs text-slate-400 font-medium my-1.5">or</span>

            {/* Choose File Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all mt-1 mb-4"
            >
              Choose File
            </button>

            <p className="text-[11px] sm:text-xs text-slate-500 max-w-sm">
              Supported: Images, Videos, Audio, PDF, DOCX
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5">
              (Max Size: 100MB)
            </p>
          </div>

          {/* Selected File Card & Actions */}
          {selectedFile && (
            <div className="w-full mt-6 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 flex flex-col gap-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                    {selectedFile.type}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 break-all">
                      {selectedFile.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {selectedFile.size} • Ready for analysis
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFile(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Upload Progress Bar if uploading */}
              {isUploading && (
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-xs font-semibold text-indigo-700">
                    <span>Uploading file...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-indigo-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-200"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Start Analysis Button */}
              {!isUploading && (
                <button
                  onClick={startAnalysis}
                  className="w-full py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Start AI DeepScan Analysis
                </button>
              )}
            </div>
          )}

          {/* Example Files Section (from reference) */}
          <div className="w-full mt-8 pt-6 border-t border-slate-100 text-center">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
              or try with example:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => loadExample('image')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200 text-xs font-semibold transition-all shadow-sm"
              >
                <ImageIcon className="w-3.5 h-3.5 text-blue-500" />
                Image
              </button>

              <button
                type="button"
                onClick={() => loadExample('video')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200 text-xs font-semibold transition-all shadow-sm"
              >
                <VideoIcon className="w-3.5 h-3.5 text-purple-500" />
                Video
              </button>

              <button
                type="button"
                onClick={() => loadExample('pdf')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200 text-xs font-semibold transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-rose-500" />
                PDF
              </button>

              <button
                type="button"
                onClick={() => loadExample('docx')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200 text-xs font-semibold transition-all shadow-sm"
              >
                <FileCode className="w-3.5 h-3.5 text-cyan-500" />
                Word
              </button>
            </div>
          </div>
        </div>

        {/* Right: 3D Floating Illustration & Features (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* 3D Stack Graphic Card */}
          <div className="bg-gradient-to-br from-indigo-900 via-[#1c1854] to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 relative flex items-center justify-center animate-float">
              {/* Stacked 3D documents illustration */}
              <div className="absolute inset-0 bg-indigo-500/30 rounded-2xl rotate-12 blur-sm" />
              <div className="w-20 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-2xl flex flex-col justify-between -rotate-6">
                <div className="w-full h-2 bg-white/40 rounded-full" />
                <div className="w-3/4 h-2 bg-white/30 rounded-full" />
                <div className="w-5/6 h-2 bg-white/30 rounded-full" />
                <div className="w-1/2 h-2 bg-cyan-400 rounded-full" />
              </div>
              <div className="absolute w-20 h-24 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-2xl p-2 shadow-xl flex items-center justify-center rotate-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-base font-bold text-white mb-1">
              Multi-Layer Neural Inspection
            </h3>
            <p className="text-xs text-indigo-200 leading-relaxed max-w-xs">
              Every file is submitted to a 12-stage forensic neural pipeline detecting GAN artifacts, diffusion noise patterns, and LLM text burstiness.
            </p>
          </div>

          {/* Quick specs box */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle space-y-3.5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Forensic Coverage
            </h4>
            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Face swap &amp; deepfake video forensics</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Voice clone &amp; TTS spectrogram check</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>PDF page-wise AI text and embedded image scan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewAnalysisPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading analysis workspace...</div>}>
      <AnalysisContent />
    </Suspense>
  );
}

