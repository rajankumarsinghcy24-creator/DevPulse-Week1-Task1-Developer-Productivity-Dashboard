import React from 'react';
import { Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import Badge from '../common/Badge';
import ProgressBar from './ProgressBar';

export const ProjectCard = ({ project, onSelect }) => {
  const {
    name,
    description,
    category,
    progress,
    completedTasks,
    totalTasks,
    status,
    priority,
    dueDate,
    team = [],
    techStack = []
  } = project;

  return (
    <div className="bg-white border border-[#E7E7E0] hover:border-stone-300 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-xs hover:shadow-sm flex flex-col justify-between group">
      <div>
        {/* Top bar: Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono font-medium text-[#535D6C] uppercase tracking-wider bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
            {category}
          </span>
          <div className="flex items-center gap-2">
            <Badge variant={status} size="sm" dot>
              {status}
            </Badge>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-base sm:text-lg font-bold text-[#1F2933] group-hover:text-[#0F8B6D] transition-colors line-clamp-1">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-[#667085] mt-1.5 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Pills */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#FAFBF9] border border-[#E7E7E0] text-[#535D6C]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Progress Section */}
        <div className="mt-5 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#667085] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B6D]" />
              Tasks: <span className="font-mono text-[#1F2933] font-semibold">{completedTasks}/{totalTasks}</span>
            </span>
            <span className="font-mono font-semibold text-[#1F2933]">{progress}%</span>
          </div>
          <ProgressBar progress={progress} showLabel={false} showPercentage={false} size="md" />
        </div>
      </div>

      {/* Footer: Team Avatars, Due Date & Action */}
      <div className="mt-6 pt-4 border-t border-[#E7E7E0] flex items-center justify-between gap-3 text-xs">
        {/* Team Avatars */}
        <div className="flex items-center -space-x-2 overflow-hidden">
          {team.slice(0, 3).map((member, i) => (
            <img
              key={i}
              src={member.avatar}
              alt={member.name}
              title={member.name}
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover shadow-2xs"
            />
          ))}
          {team.length > 3 && (
            <div className="h-6 w-6 rounded-full bg-stone-100 ring-2 ring-white flex items-center justify-center text-[10px] text-[#667085] font-mono font-medium border border-stone-200">
              +{team.length - 3}
            </div>
          )}
        </div>

        {/* Due Date & Action */}
        <div className="flex items-center gap-2.5">
          <span className="text-[#667085] flex items-center gap-1 text-[11px]">
            <Calendar className="w-3.5 h-3.5 text-stone-400" />
            <span>{dueDate}</span>
          </span>

          <button
            type="button"
            onClick={() => onSelect && onSelect(project)}
            className="p-1 rounded-lg text-stone-400 hover:text-[#0F8B6D] hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0F8B6D]"
            aria-label={`View details of ${name}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
