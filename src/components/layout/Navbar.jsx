import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Search,
  RefreshCw,
  AlertTriangle,
  Bell,
  CheckCircle2,
  X
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const Navbar = ({ onOpenMobileNav }) => {
  const {
    searchQuery,
    setSearchQuery,
    triggerReload,
    simulateError,
    isLoading,
    user
  } = useDashboard();

  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 h-16 bg-[#F7F7F2]/95 backdrop-blur-md border-b border-[#E7E7E0] px-4 sm:px-6 flex items-center justify-between gap-4">
      {/* Left: Mobile hamburger & Search input */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button
          type="button"
          onClick={onOpenMobileNav}
          className="lg:hidden p-2 rounded-xl text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F8B6D]"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Instant Search Bar */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C95A6]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects, tasks, tags (e.g. Auth, AI)..."
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] placeholder-[#8C95A6] focus:outline-none focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D] transition-all shadow-2xs"
            aria-label="Search projects and tasks"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-stone-400 hover:text-stone-600"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Right: Demo State Controls & Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Demo Controls: Loading & Error Testing */}
        <div className="hidden md:flex items-center gap-1.5 p-1 bg-white border border-[#E7E7E0] rounded-xl shadow-2xs">
          <button
            type="button"
            onClick={triggerReload}
            disabled={isLoading}
            title="Simulate Skeleton Loading State"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#0F8B6D] ${isLoading ? 'animate-spin' : ''}`} />
            <span className="hidden xl:inline">Simulate</span> Load
          </button>

          <button
            type="button"
            onClick={simulateError}
            title="Simulate Error State with Retry option"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#C94C4C] hover:text-[#B33E3E] hover:bg-rose-50 rounded-lg transition-colors"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">Simulate</span> Error
          </button>
        </div>

        {/* Notifications Quick Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 rounded-xl text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F8B6D]"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#0F8B6D] rounded-full ring-2 ring-[#F7F7F2]" />
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-[#E7E7E0] rounded-2xl shadow-xl p-4 z-40 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-[#E7E7E0]">
                <span className="text-xs font-semibold text-[#1F2933]">System Notifications</span>
                <span className="text-[10px] font-medium text-[#0F8B6D] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">2 New</span>
              </div>
              <div className="py-2 space-y-2 text-xs">
                <div className="flex gap-2.5 items-start p-2.5 rounded-xl bg-stone-50 border border-stone-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#0F8B6D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1F2933]">Task "Dashboard UI" approved</p>
                    <p className="text-[11px] text-[#667085]">Merged into main by Alex Morgan</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start p-2.5 rounded-xl bg-stone-50 border border-stone-200/60">
                  <RefreshCw className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1F2933]">EcoRoute API test pass</p>
                    <p className="text-[11px] text-[#667085]">CI/CD workflow completed</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar pill */}
        <Link
          to="/profile"
          className="flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-white border border-[#D9D9D2] hover:border-stone-400 transition-colors group shadow-2xs"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-7 h-7 rounded-full object-cover border border-[#E7E7E0]"
          />
          <span className="hidden sm:inline text-xs font-semibold text-[#1F2933] group-hover:text-[#0F8B6D] transition-colors">
            {user.name.split(' ')[0]}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
