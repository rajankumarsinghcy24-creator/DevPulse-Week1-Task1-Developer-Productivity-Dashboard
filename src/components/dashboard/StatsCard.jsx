import React from 'react';
import {
  FolderKanban,
  Clock,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const StatsCard = ({
  icon: Icon,
  label,
  value,
  subtext,
  trend,
  trendType = 'positive',
  accentColor = 'emerald'
}) => {
  const accentStyles = {
    emerald: 'border-emerald-200 bg-emerald-50 text-[#0F8B6D]',
    teal: 'border-teal-200 bg-teal-50 text-[#1D7E73]',
    amber: 'border-amber-200 bg-amber-50 text-[#B45309]',
    rose: 'border-rose-200 bg-rose-50 text-[#C94C4C]',
    stone: 'border-stone-200 bg-stone-100 text-[#535D6C]',
  };

  return (
    <div className="bg-white border border-[#E7E7E0] hover:border-stone-300 rounded-2xl p-5 transition-all duration-200 shadow-xs hover:shadow-sm flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-[#8C95A6] uppercase tracking-wider">
            {label}
          </p>
          <p className="text-2xl sm:text-3xl font-bold font-mono text-[#1F2933] mt-2">
            {value}
          </p>
        </div>
        <div className={`p-2.5 rounded-xl border ${accentStyles[accentColor]} shrink-0 shadow-2xs`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#E7E7E0] flex items-center justify-between text-xs">
        <span className="text-[#667085] truncate">{subtext}</span>
        {trend && (
          <span
            className={`flex items-center gap-0.5 font-semibold shrink-0 ${
              trendType === 'positive'
                ? 'text-[#0F8B6D]'
                : trendType === 'neutral'
                ? 'text-[#667085]'
                : 'text-[#C94C4C]'
            }`}
          >
            {trendType === 'positive' ? (
              <ArrowUpRight className="w-3.5 h-3.5" />
            ) : (
              <ArrowDownRight className="w-3.5 h-3.5" />
            )}
            {trend}
          </span>
        )}
      </div>
    </div>
  );
};

export const StatsGrid = () => {
  const { stats, projects, tasks } = useDashboard();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Total Projects */}
      <StatsCard
        icon={FolderKanban}
        label="Total Projects"
        value={stats.totalProjects}
        subtext={`${projects.filter(p => p.status === 'In Progress').length} active sprint`}
        trend="+2 this month"
        trendType="positive"
        accentColor="emerald"
      />

      {/* 2. Active Tasks */}
      <StatsCard
        icon={Clock}
        label="Active Tasks"
        value={stats.activeTasks}
        subtext={`${tasks.filter(t => t.priority === 'High' && t.status !== 'Done').length} high priority`}
        trend="-3 from yesterday"
        trendType="positive"
        accentColor="amber"
      />

      {/* 3. Completed Tasks */}
      <StatsCard
        icon={CheckCircle2}
        label="Completed Tasks"
        value={stats.completedTasks}
        subtext={`${stats.completionRate}% sprint resolution rate`}
        trend="+14% vs avg"
        trendType="positive"
        accentColor="teal"
      />

      {/* 4. Productivity Score */}
      <StatsCard
        icon={Zap}
        label="Productivity Score"
        value={`${stats.productivityScore}%`}
        subtext="Velocity: 94 pts / week"
        trend="Top 5% sprint pace"
        trendType="positive"
        accentColor="emerald"
      />
    </div>
  );
};

export default StatsGrid;
