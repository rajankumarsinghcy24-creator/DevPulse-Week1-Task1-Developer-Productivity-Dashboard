import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MobileNavigation from './MobileNavigation';

export const Layout = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#1F2933] flex flex-col">
      {/* Desktop Fixed Sidebar */}
      <Sidebar />

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Main Workspace Wrapper (Offset for Desktop Sidebar) */}
      <div className="lg:pl-64 flex flex-col flex-1 min-w-0">
        <Navbar onOpenMobileNav={() => setMobileNavOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>

        <footer className="border-t border-[#E7E7E0] py-4 px-6 text-center text-xs text-[#667085] bg-[#FAFBF9]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
            <p className="font-medium">DevPulse Productivity System — Full Stack Internship Task 1</p>
            <p className="font-mono text-[11px] text-[#8C95A6]">Frontend-Only Architecture • Ready for Task 2 REST API</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
