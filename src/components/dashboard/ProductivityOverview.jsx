import React, { useState } from 'react';
import { Flame, BarChart2 } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const ProductivityOverview = () => {
  const { user, stats, weeklyData } = useDashboard();
  const [hoveredDay, setHoveredDay] = useState(null);

  const maxVal = Math.max(...weeklyData.map(d => Math.max(d.completed, d.target)), 10);

  return (
    <div className="bg-white border border-[#E7E7E0] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-base font-bold text-[#1F2933] flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#0F8B6D]" />
              Weekly Productivity Velocity
            </h3>
            <p className="text-xs text-[#667085] mt-0.5">
              Task completion distribution compared against daily velocity target
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#B45309] text-xs font-semibold shrink-0">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>{user.stats.streakDays}-Day Streak</span>
          </div>
        </div>

        {/* Velocity Stats Bar */}
        <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#FAFBF9] border border-[#E7E7E0] mb-6 text-center">
          <div>
            <p className="text-[11px] text-[#667085] font-medium">Sprint Tasks</p>
            <p className="text-lg font-bold font-mono text-[#1F2933] mt-0.5">
              {stats.completedTasks + stats.activeTasks}
            </p>
          </div>
          <div className="border-x border-[#E7E7E0]">
            <p className="text-[11px] text-[#667085] font-medium">Done / Rate</p>
            <p className="text-lg font-bold font-mono text-[#0F8B6D] mt-0.5">
              {stats.completionRate}%
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#667085] font-medium">Remaining</p>
            <p className="text-lg font-bold font-mono text-[#2A9D8F] mt-0.5">
              {stats.activeTasks}
            </p>
          </div>
        </div>

        {/* CSS/SVG Bar Distribution */}
        <div className="space-y-2">
          <div className="flex items-end justify-between gap-2 sm:gap-4 h-36 pt-4 pb-1">
            {weeklyData.map((item, index) => {
              const heightPercent = Math.round((item.completed / maxVal) * 100);
              const isHovered = hoveredDay === item.day;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredDay(item.day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                >
                  {/* Tooltip on hover */}
                  {isHovered && (
                    <div className="absolute -top-10 bg-[#1F2933] text-white text-[11px] font-mono py-1 px-2.5 rounded-md shadow-lg whitespace-nowrap z-20 pointer-events-none">
                      {item.completed} completed ({item.target} target)
                    </div>
                  )}

                  {/* Target line watermark indicator */}
                  <div
                    className="w-full bg-[#0F8B6D]/15 group-hover:bg-[#0F8B6D]/25 rounded-t-md transition-all duration-300 relative flex flex-col justify-end"
                    style={{ height: `${heightPercent}%` }}
                  >
                    <div className="w-full bg-[#0F8B6D] group-hover:bg-[#0B7057] rounded-t-md h-full transition-all" />
                  </div>

                  <span className="text-[11px] font-mono text-[#667085] mt-2 font-medium group-hover:text-[#0F8B6D]">
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#667085] pt-2 border-t border-[#E7E7E0]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#0F8B6D]" />
                Completed Tasks
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#0F8B6D]/20" />
                Target Baseline (5/day)
              </span>
            </div>
            <span className="font-mono text-[#1F2933] font-medium">Pace: {user.stats.velocityScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityOverview;
