'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Bell, Menu, User, Settings, LogOut, CheckCircle2, Shield } from 'lucide-react';

interface DashboardHeaderProps {
  onMobileMenuToggle: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMobileMenuToggle }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Scan Finished: image_20261110.jpg',
      desc: 'AI Content Detected (78.5% confidence)',
      time: '2 mins ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Weekly Accuracy Report Ready',
      desc: 'System achieved 98.7% verification benchmark',
      time: '1 hour ago',
      unread: false,
    },
    {
      id: 3,
      title: 'Security Alert',
      desc: '2-Factor Authentication was enabled',
      time: 'Yesterday',
      unread: false,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/history?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-[#f4f5fd]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5 border-b border-indigo-100/60 flex items-center justify-between gap-4">
      {/* Left: Mobile hamburger + Search input */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-white shadow-sm transition-all"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search bar pill */}
        <form onSubmit={handleSearch} className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200/80 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-subtle transition-all text-slate-700 placeholder-slate-400"
          />
        </form>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center gap-3 relative">
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className="p-2.5 rounded-full bg-white text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200/80 shadow-subtle transition-all relative"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white" />
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-indigo-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-800">Notifications</span>
                <span className="text-xs text-indigo-600 font-semibold cursor-pointer hover:underline">
                  Mark all as read
                </span>
              </div>
              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto mt-2">
                {notifications.map((n) => (
                  <div key={n.id} className="py-2.5 px-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                        {n.title}
                      </span>
                      <span className="text-[10px] text-slate-400">{n.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Pill */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2.5 pl-1.5 pr-3 py-1 bg-white hover:bg-indigo-50/50 border border-slate-200/80 rounded-full shadow-subtle transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#4f46e5] text-white font-bold text-xs flex items-center justify-center shadow-sm">
              AB
            </div>
            <span className="text-sm font-bold text-slate-700 hidden sm:inline-block">
              Abdul Basit
            </span>
          </button>

          {/* User Menu Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-indigo-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 mb-1">
                <p className="text-xs font-bold text-slate-800">Abdul Basit</p>
                <p className="text-[11px] text-slate-400">user@deepscan.com</p>
              </div>
              <Link
                href="/settings"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
              >
                <User className="w-4 h-4 text-slate-400" />
                Profile Settings
              </Link>
              <Link
                href="/settings?tab=security"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
              >
                <Shield className="w-4 h-4 text-slate-400" />
                Security & Passwords
              </Link>
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  router.push('/login');
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors mt-1"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

