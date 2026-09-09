import React, { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  X,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  User,
  Zap,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const MobileNavigation = ({ isOpen, onClose }) => {
  const { user, stats, triggerReload, simulateError } = useDashboard();
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navItems = [
    { label: 'Dashboard', path: '/', icon: LayoutDashboard, count: null },
    { label: 'Projects', path: '/projects', icon: FolderKanban, count: stats.totalProjects },
    { label: 'Tasks', path: '/tasks', icon: CheckSquare, count: stats.activeTasks },
    { label: 'Developer Profile', path: '/profile', icon: User, count: null },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-72 max-w-[85vw] bg-[#F7F7F2] border-r border-[#E5E5DE] flex flex-col h-full z-10 shadow-2xl animate-in slide-in-from-left duration-200">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-[#E5E5DE] bg-[#EDEDE6]/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0F8B6D] flex items-center justify-center text-white">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <span className="font-bold text-base text-[#1F2933] tracking-tight">
              DevPulse
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 rounded-lg text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-200/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          <div>
            <p className="px-3 text-[11px] font-semibold text-[#8C95A6] uppercase tracking-wider mb-2">
              Menu
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#0F8B6D]/10 text-[#0F8B6D] font-semibold border-l-3 border-[#0F8B6D]'
                          : 'text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-200/50'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.count !== null && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#E5E5DE] text-[#535D6C]">
                        {item.count}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Demo Controls inside Mobile Menu */}
          <div className="p-3.5 bg-white border border-[#E5E5DE] rounded-2xl space-y-2 shadow-2xs">
            <p className="text-[11px] font-semibold text-[#8C95A6] uppercase tracking-wider">
              State Simulation Demo
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => { triggerReload(); onClose(); }}
                className="flex items-center justify-center gap-1.5 p-2 text-xs font-medium text-[#1F2933] bg-stone-100 hover:bg-stone-200/80 rounded-xl transition-colors"
              >
                <RefreshCw className="w-3 h-3 text-[#0F8B6D]" />
                Load State
              </button>
              <button
                type="button"
                onClick={() => { simulateError(); onClose(); }}
                className="flex items-center justify-center gap-1.5 p-2 text-xs font-medium text-[#C94C4C] bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
              >
                <AlertTriangle className="w-3 h-3" />
                Error State
              </button>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="p-4 border-t border-[#E5E5DE] bg-[#EDEDE6]/40">
          <Link
            to="/profile"
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-white hover:shadow-2xs transition-all"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-xl object-cover border border-[#D9D9D2]"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#1F2933] truncate">
                {user.name}
              </p>
              <p className="text-xs text-[#667085] truncate">
                {user.role}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
