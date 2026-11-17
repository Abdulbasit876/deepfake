'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  PlusCircle,
  Clock,
  FileText,
  Settings,
  HelpCircle,
  Crown,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { Logo } from '../ui/Logo';

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  mobileOpen = false,
  onMobileClose,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      activeExact: true,
    },
    {
      name: 'New Analysis',
      icon: PlusCircle,
      href: '/analysis',
      matchSubpaths: ['/analyzing', '/results'],
    },
    {
      name: 'Scan History',
      icon: Clock,
      href: '/history',
    },
    {
      name: 'Reports',
      icon: FileText,
      href: '/reports',
    },
    {
      name: 'Settings',
      icon: Settings,
      href: '/settings',
    },
    {
      name: 'Help & Support',
      icon: HelpCircle,
      href: '/dashboard#support',
    },
  ];

  const handleLogout = () => {
    // Navigate smoothly to login
    router.push('/login');
  };

  const navContent = (
    <div className="h-full flex flex-col justify-between p-4 sm:p-5 select-none">
      {/* Top Section */}
      <div>
        {/* Brand & Toggle */}
        <div className="flex items-center justify-between pb-6 mb-2 border-b border-indigo-50/80">
          <Logo size="md" showText={!collapsed} />
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5 pt-2">
          {menuItems.map((item) => {
            const isMatch = item.activeExact
              ? pathname === item.href
              : pathname === item.href ||
                item.matchSubpaths?.some((sub) => pathname.startsWith(sub));

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onMobileClose}
                className={`group flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  isMatch
                    ? 'bg-[#ede9fe] text-indigo-700 shadow-sm shadow-indigo-100 font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`}
                title={collapsed ? item.name : undefined}
              >
                <item.icon
                  className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                    isMatch ? 'text-indigo-600 stroke-[2.3]' : 'text-slate-400 group-hover:text-indigo-600'
                  }`}
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="pt-4 space-y-3">
        {/* Upgrade Plan Card */}
        {!collapsed ? (
          <div className="relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50/50 border border-indigo-100/80 shadow-sm text-center">
            <div className="w-9 h-9 mx-auto mb-2 rounded-xl bg-gradient-to-tr from-amber-400 to-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Crown className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-800">Upgrade Plan</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Get more scans & premium features
            </p>
            <Link
              href="/#pricing"
              className="mt-3 inline-flex items-center justify-center w-full py-2 px-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-sm transition-all"
            >
              Upgrade →
            </Link>
          </div>
        ) : (
          <div className="flex justify-center">
            <Link
              href="/#pricing"
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-indigo-600 text-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
              title="Upgrade Plan"
            >
              <Crown className="w-5 h-5" />
            </Link>
          </div>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
          title="Sign Out"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside
        className={`hidden lg:block bg-white border-r border-indigo-100/70 h-screen sticky top-0 transition-all duration-300 z-30 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        {navContent}
      </aside>

      {/* Mobile Backdrop & Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={onMobileClose}
          />
          <div className="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl z-10 flex flex-col">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
};

