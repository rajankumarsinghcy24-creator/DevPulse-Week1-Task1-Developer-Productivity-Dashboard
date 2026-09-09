import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  User,
  Zap,
  Activity
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const Sidebar = () => {
  const { user, stats } = useDashboard();

  const navItems = [
    { label: 'Dashboard', path: '/', icon: LayoutDashboard, badge: null },
    { label: 'Projects', path: '/projects', icon: FolderKanban, badge: stats.totalProjects },
    { label: 'Tasks', path: '/tasks', icon: CheckSquare, badge: stats.activeTasks },
    { label: 'Profile', path: '/profile', icon: User, badge: null },
  ];

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-[#F2F2EC] border-r border-[#E5E5DE] z-30 select-none">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-[#E5E5DE] justify-between bg-[#EDEDE6]/60">
        <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-8 h-8 rounded-xl bg-[#0F8B6D] flex items-center justify-center shadow-xs group-hover:bg-[#0B7057] transition-all">
            <Zap className="w-4 h-4 text-white fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-[#1F2933] group-hover:text-[#0F8B6D] transition-colors">
                DevPulse
              </span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#0F8B6D]/10 text-[#0F8B6D] border border-[#0F8B6D]/20">
                v1.0
              </span>
            </div>
            <p className="text-[10px] text-[#667085] font-medium">Developer Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 px-3.5 py-6 space-y-7 overflow-y-auto">
        <div>
          <p className="px-3 text-[11px] font-semibold text-[#8C95A6] uppercase tracking-wider mb-2.5">
            Core Workspace
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group ${
                      isActive
                        ? 'bg-[#0F8B6D]/10 text-[#0F8B6D] font-semibold shadow-2xs border-l-3 border-[#0F8B6D]'
                        : 'text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-200/50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isActive ? 'text-[#0F8B6D]' : 'text-[#667085] group-hover:text-[#1F2933]'
                          }`}
                        />
                        <span>{item.label}</span>
                      </div>
                      {item.badge !== null && (
                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                            isActive
                              ? 'bg-[#0F8B6D]/15 text-[#0F8B6D] font-semibold'
                              : 'bg-[#E5E5DE] text-[#667085] group-hover:text-[#1F2933]'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sprint Quick Snapshot Widget */}
        <div className="bg-white border border-[#E5E5DE] rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#667085] mb-2">
            <span className="flex items-center gap-1.5 font-medium text-[#1F2933]">
              <Activity className="w-3.5 h-3.5 text-[#0F8B6D]" />
              Sprint Velocity
            </span>
            <span className="font-mono text-[#0F8B6D] font-bold">{stats.productivityScore}%</span>
          </div>
          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden mb-2">
            <div
              className="bg-[#0F8B6D] h-full rounded-full transition-all duration-500"
              style={{ width: `${stats.productivityScore}%` }}
            />
          </div>
          <p className="text-[11px] text-[#667085]">
            {stats.completedTasks} completed out of {stats.activeTasks + stats.completedTasks} tasks
          </p>
        </div>
      </div>

      {/* Bottom User Profile Section */}
      <div className="p-3.5 border-t border-[#E5E5DE] bg-[#EDEDE6]/40">
        <Link
          to="/profile"
          className="flex items-center gap-3 p-2 rounded-xl hover:bg-white hover:shadow-2xs transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F8B6D]"
        >
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-9 h-9 rounded-xl object-cover border border-[#D9D9D2]"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#0F8B6D] ring-2 ring-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#1F2933] truncate group-hover:text-[#0F8B6D] transition-colors">
              {user.name}
            </p>
            <p className="text-[11px] text-[#667085] truncate">
              {user.role}
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
