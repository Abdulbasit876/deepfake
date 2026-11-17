'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  User,
  Building,
  MessageSquare,
  Send,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Paperclip,
  X
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [inquiryType, setInquiryType] = useState('enterprise-api');
  const [message, setMessage] = useState('');
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setCompany('');
    setInquiryType('enterprise-api');
    setMessage('');
    setAttachedFileName(null);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8f9ff] via-[#f2f4fc] to-[#eef0fc]">
      {/* Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Title Section */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100 shadow-sm text-xs font-semibold text-indigo-700 backdrop-blur-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Dedicated Forensic &amp; Enterprise Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Get in Touch with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]">
                DeepScan
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Have questions regarding enterprise deepfake API deployment, custom model audits, or false-positive reviews? Our security engineering team is ready to help.
            </p>
          </div>

          {/* Grid: Contact Info (5 cols) + Contact Form (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Contact Info & SLAs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Contact Cards */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-5">
                <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Direct Channels
                </h3>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Email Inquiries</h4>
                    <p className="text-xs text-indigo-600 font-semibold mt-0.5">support@deepscan.com</p>
                    <p className="text-[11px] text-slate-400">Enterprise: sales@deepscan.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Forensics SOC Response SLA</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-medium">&lt; 2 hours for High-Priority Incidents</p>
                    <p className="text-[11px] text-slate-400">24/7/365 Continuous Threat Monitoring</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Headquarters</h4>
                    <p className="text-xs text-slate-600 mt-0.5">San Francisco, California</p>
                    <p className="text-[11px] text-slate-400">Regional Forensic Labs: London &amp; Singapore</p>
                  </div>
                </div>
              </div>

              {/* Encryption Guarantee Card */}
              <div className="bg-gradient-to-br from-indigo-900 via-[#1c1854] to-slate-950 rounded-3xl p-6 text-white shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 text-cyan-400 border border-white/10 shadow-inner">
                  <ShieldCheck className="w-7 h-7 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Cryptographic Secrecy</h4>
                  <p className="text-xs text-indigo-200 mt-0.5 leading-relaxed">
                    All communications and uploaded sample media are processed under zero-knowledge encryption and NDA confidentiality.
                  </p>
                </div>
              </div>

              {/* Quick Link Card */}
              <div className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 shadow-subtle flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  <span className="text-xs font-semibold text-slate-700">Looking for documentation?</span>
                </div>
                <Link
                  href="/#features"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline"
                >
                  Explore Docs →
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-subtle">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{fullName}</strong>. Your inquiry has been routed to our forensic engineering desk. A specialist will reply to <span className="text-indigo-600 font-semibold">{email}</span> within 2 hours.
                  </p>

                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Send us a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below and our team will get back to you promptly.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            placeholder="Abdul Basit"
                            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Business or Personal Email <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="user@deepscan.com"
                            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Organization & Inquiry Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company / Organization
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Acme CyberSec Ltd."
                            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Inquiry Type
                        </label>
                        <select
                          value={inquiryType}
                          onChange={(e) => setInquiryType(e.target.value)}
                          className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 cursor-pointer"
                        >
                          <option value="enterprise-api">Enterprise API &amp; SDK Access</option>
                          <option value="forensic-audit">Deepfake Incident Forensic Audit</option>
                          <option value="false-positive">False Positive Result Appeal</option>
                          <option value="custom-models">Custom Training / Dataset Ingestion</option>
                          <option value="general-support">General Platform Support</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Detailed Message <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          placeholder="Describe your inquiry, suspicious media context, or integration requirements..."
                          className="w-full p-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 resize-none"
                        />
                      </div>
                    </div>

                    {/* File Attachment (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Attach Sample Media / Log (Optional)
                      </label>
                      <div className="flex items-center gap-3">
                        <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors border border-slate-200">
                          <Paperclip className="w-3.5 h-3.5 text-slate-500" />
                          <span>Attach File</span>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>

                        {attachedFileName && (
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-medium">
                            <span className="truncate max-w-[200px]">{attachedFileName}</span>
                            <button
                              type="button"
                              onClick={() => setAttachedFileName(null)}
                              className="text-slate-400 hover:text-rose-600"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-slate-400 pt-1">
                      We respect your privacy. Under SOC2 Type II, your email is never shared.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

