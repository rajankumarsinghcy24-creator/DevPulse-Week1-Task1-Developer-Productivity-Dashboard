import React from 'react';
import { Plus, Calendar, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useDashboard } from '../../context/DashboardContext';

export const WelcomeHeader = ({ onOpenNewProject, onOpenNewTask }) => {
  const { user, stats } = useDashboard();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-[#E7E7E0]">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0F8B6D] mb-1">
          <Calendar className="w-3.5 h-3.5 text-[#0F8B6D]" />
          <span>{formattedDate}</span>
          <span className="text-stone-300">•</span>
          <span className="flex items-center gap-1 font-mono text-[#0F8B6D] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <Sparkles className="w-3 h-3 text-[#0F8B6D]" />
            {user.stats.streakDays}-day streak active
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2933] flex items-center gap-2">
          {getGreeting()}, Developer <span className="inline-block">👋</span>
        </h1>
        <p className="text-sm text-[#667085] mt-1">
          Here's an overview of your projects and productivity.
        </p>
      </div>

      {/* Action CTA Buttons */}
      <div className="flex items-center gap-2.5 shrink-0">
        {onOpenNewTask && (
          <Button
            variant="secondary"
            size="sm"
            onClick={onOpenNewTask}
            leftIcon={<Plus className="w-4 h-4 text-[#535D6C]" />}
          >
            Add Task
          </Button>
        )}
        {onOpenNewProject && (
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenNewProject}
            leftIcon={<Plus className="w-4 h-4 text-white" />}
          >
            New Project
          </Button>
        )}
      </div>
    </div>
  );
};

export default WelcomeHeader;
