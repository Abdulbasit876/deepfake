'use client';

import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { DashboardHeader } from '../components/layout/DashboardHeader';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#f4f5fd]">
      {/* Sidebar (desktop and mobile drawer) */}
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader
          onMobileMenuToggle={() => setMobileMenuOpen(true)}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

