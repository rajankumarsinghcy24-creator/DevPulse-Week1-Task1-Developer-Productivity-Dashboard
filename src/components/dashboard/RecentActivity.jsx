import React from 'react';
import {
  CheckCircle2,
  GitCommit,
  PlusCircle,
  ArrowRightCircle,
  Award,
  Clock
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const RecentActivity = () => {
  const { activities } = useDashboard();

  const getActivityIcon = (type) => {
    switch (type) {
      case 'completed':
        return (
          <div className="w-7 h-7 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#0F8B6D] shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
        );
      case 'updated':
        return (
          <div className="w-7 h-7 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#1D7E73] shrink-0">
            <GitCommit className="w-3.5 h-3.5" />
          </div>
        );
      case 'created':
        return (
          <div className="w-7 h-7 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-[#535D6C] shrink-0">
            <PlusCircle className="w-3.5 h-3.5" />
          </div>
        );
      case 'status_change':
        return (
          <div className="w-7 h-7 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B45309] shrink-0">
            <ArrowRightCircle className="w-3.5 h-3.5" />
          </div>
        );
      case 'milestone':
        return (
          <div className="w-7 h-7 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
            <Award className="w-3.5 h-3.5" />
          </div>
        );
      default:
        return (
          <div className="w-7 h-7 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 shrink-0">
            <Clock className="w-3.5 h-3.5" />
          </div>
        );
    }
  };

  return (
    <div className="bg-white border border-[#E7E7E0] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E7E7E0]">
          <div>
            <h3 className="text-base font-bold text-[#1F2933] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0F8B6D]" />
              Recent Activity
            </h3>
            <p className="text-xs text-[#667085] mt-0.5">
              Live audit stream of developer actions & state mutations
            </p>
          </div>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-stone-100 text-[#535D6C] border border-stone-200">
            Realtime
          </span>
        </div>

        {/* Activity items list */}
        <div className="space-y-2.5">
          {activities.slice(0, 5).map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAFBF9] transition-colors group"
            >
              {getActivityIcon(activity.type)}

              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#1F2933] leading-snug">
                  <span className="font-semibold text-[#1F2933]">{activity.user}</span>{' '}
                  <span className="text-[#667085]">{activity.description}</span>{' '}
                  <span className="font-semibold text-[#0F8B6D]">{activity.target}</span>
                </p>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-[#8C95A6]">
                  <span className="truncate text-[#667085]">{activity.project}</span>
                  <span>•</span>
                  <span className="font-mono">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
