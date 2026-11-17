'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  User,
  Shield,
  Bell,
  Sliders,
  CheckCircle2,
  Lock,
  Mail,
  Smartphone,
  Eye,
  EyeOff,
  Camera,
  Save
} from 'lucide-react';

function SettingsContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as 'profile' | 'security' | 'notifications' | 'preferences') || 'profile';

  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications' | 'preferences'>(initialTab);

  // Profile state
  const [fullName, setFullName] = useState('Abdul Basit');
  const [email, setEmail] = useState('user@deepscan.com');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  const [role, setRole] = useState('Senior Security Analyst');

  // Security state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  // Notification state
  const [notifyOnComplete, setNotifyOnComplete] = useState(true);
  const [notifyOnAiDetected, setNotifyOnAiDetected] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  // Appearance state
  const [theme, setTheme] = useState('light');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage your account and preferences
        </p>
      </div>

      {saveSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          Settings updated successfully!
        </div>
      )}

      {/* Tabs Row (Profile, Security, Notifications, Preferences - exact match with reference) */}
      <div className="flex border-b border-slate-200/80 space-x-6 text-xs sm:text-sm font-semibold select-none">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'profile'
              ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'security'
              ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Security
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'notifications'
              ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab('preferences')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'preferences'
              ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Preferences
        </button>
      </div>

      {/* Profile Tab View (Screen 9 from reference) */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left Avatar Card (4 cols) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col items-center text-center">
            {/* Big Avatar AB */}
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#4f46e5] text-white font-extrabold text-2xl flex items-center justify-center shadow-md">
                AB
              </div>
              <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-white shadow border border-slate-200 text-slate-600 hover:text-indigo-600 cursor-pointer">
                <Camera className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-900">{fullName}</h3>
            <p className="text-xs text-slate-400 mt-0.5">{email}</p>

            <button
              type="button"
              className="mt-5 px-5 py-2 rounded-full text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 transition-all shadow-sm"
            >
              Change Photo
            </button>
          </div>

          {/* Right Form Card (8 cols) */}
          <div className="md:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle">
            <h3 className="text-base font-bold text-slate-900 mb-6">
              Profile Information
            </h3>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Security Tab View */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle max-w-2xl space-y-6">
          <h3 className="text-base font-bold text-slate-900">
            Password &amp; Authentication
          </h3>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-800">Two-Factor Authentication (2FA)</h4>
                <p className="text-[11px] text-slate-500">Add an extra layer of protection using authenticator app</p>
              </div>
              <input
                type="checkbox"
                checked={twoFactorEnabled}
                onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                className="w-5 h-5 text-indigo-600 rounded cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-md shadow-indigo-500/25 hover:opacity-95 transition-all"
            >
              Update Password
            </button>
          </form>
        </div>
      )}

      {/* Notifications Tab View */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle max-w-2xl space-y-4">
          <h3 className="text-base font-bold text-slate-900 mb-2">Notification Preferences</h3>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
            <div>
              <h4 className="text-xs font-bold text-slate-800">Scan Completion Alerts</h4>
              <p className="text-[11px] text-slate-500">Receive an email when large files finish processing</p>
            </div>
            <input
              type="checkbox"
              checked={notifyOnComplete}
              onChange={(e) => setNotifyOnComplete(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
            <div>
              <h4 className="text-xs font-bold text-slate-800">AI Deepfake Detection Warning</h4>
              <p className="text-[11px] text-slate-500">Immediate high-priority alert when AI score exceeds 75%</p>
            </div>
            <input
              type="checkbox"
              checked={notifyOnAiDetected}
              onChange={(e) => setNotifyOnAiDetected(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
            <div>
              <h4 className="text-xs font-bold text-slate-800">Weekly Forensic Summary</h4>
              <p className="text-[11px] text-slate-500">Weekly breakdown of all scanned items and accuracy benchmarks</p>
            </div>
            <input
              type="checkbox"
              checked={weeklyDigest}
              onChange={(e) => setWeeklyDigest(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Preferences Tab View */}
      {activeTab === 'preferences' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle max-w-2xl space-y-4">
          <h3 className="text-base font-bold text-slate-900 mb-2">Appearance &amp; Regional</h3>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Color Theme</label>
              <div className="flex gap-3">
                {['Light (Default)', 'Dark', 'System'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTheme(t.toLowerCase())}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      theme === t.toLowerCase()
                        ? 'bg-indigo-50 border-indigo-400 text-indigo-700 shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Data Retention</label>
              <select className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700">
                <option>Zero-Retention (Immediate In-Memory Purge)</option>
                <option>Retain Reports for 30 Days</option>
                <option>Retain Reports for 1 Year (Enterprise)</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading settings...</div>}>
      <SettingsContent />
    </Suspense>
  );
}

