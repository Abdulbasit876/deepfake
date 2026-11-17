import React from 'react';
import Link from 'next/link';
import { Shield, Sparkles, Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-indigo-100/70 pt-16 pb-12 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Detect AI. Verify Reality. DeepScan provides enterprise-grade AI deepfake & synthetic media detection to safeguard digital authenticity across all modern file formats.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                System Operational: 99.9% Uptime
              </span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">Detection Engine</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><Link href="/analysis?type=image" className="hover:text-indigo-600 transition-colors">Image Forensics</Link></li>
              <li><Link href="/analysis?type=video" className="hover:text-indigo-600 transition-colors">Video Temporal Analysis</Link></li>
              <li><Link href="/analysis?type=audio" className="hover:text-indigo-600 transition-colors">Voice Clone Detection</Link></li>
              <li><Link href="/analysis?type=pdf" className="hover:text-indigo-600 transition-colors">PDF & Document Scans</Link></li>
              <li><Link href="/analysis?type=docx" className="hover:text-indigo-600 transition-colors">Word Document Verification</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><Link href="/dashboard" className="hover:text-indigo-600 transition-colors">Dashboard</Link></li>
              <li><Link href="/history" className="hover:text-indigo-600 transition-colors">Scan History</Link></li>
              <li><Link href="/reports" className="hover:text-indigo-600 transition-colors">Generated Reports</Link></li>
              <li><Link href="/settings" className="hover:text-indigo-600 transition-colors">Security Settings</Link></li>
              <li><Link href="/#pricing" className="hover:text-indigo-600 transition-colors">API Pricing</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">Security & Legal</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><span className="cursor-pointer hover:text-indigo-600 transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-indigo-600 transition-colors">Terms of Service</span></li>
              <li><span className="cursor-pointer hover:text-indigo-600 transition-colors">Data Retention Policy</span></li>
              <li><span className="cursor-pointer hover:text-indigo-600 transition-colors">GDPR & SOC2 Compliance</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} DeepScan Technologies Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for digital safety & content verification
          </p>
        </div>
      </div>
    </footer>
  );
};

