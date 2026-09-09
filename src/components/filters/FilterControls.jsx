import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';
import Button from '../common/Button';

export const ProjectFilterControls = ({
  statusFilter,
  onStatusChange,
  onReset,
  hasActiveFilters
}) => {
  const statuses = ['All', 'Planning', 'In Progress', 'Completed'];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
        <span className="text-xs font-semibold text-[#8C95A6] mr-1 flex items-center gap-1 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          Status:
        </span>
        {statuses.map((status) => {
          const isActive = statusFilter.toLowerCase() === status.toLowerCase();
          return (
            <button
              key={status}
              type="button"
              onClick={() => onStatusChange(status)}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#0F8B6D] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#D9D9D2] text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-50'
              }`}
            >
              {status}
            </button>
          );
        })}
      </div>

      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
          className="text-xs text-[#667085] hover:text-[#1F2933] shrink-0"
        >
          Reset Filters
        </Button>
      )}
    </div>
  );
};

export const TaskFilterControls = ({
  statusFilter,
  onStatusChange,
  priorityFilter,
  onPriorityChange,
  projectFilter,
  onProjectChange,
  projects = [],
  onReset,
  hasActiveFilters
}) => {
  const statuses = ['All', 'Todo', 'In Progress', 'Done'];
  const priorities = ['All', 'High', 'Medium', 'Low'];

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#FAFBF9] p-3.5 rounded-2xl border border-[#E7E7E0]">
      <div className="flex flex-wrap items-center gap-4">
        {/* Status Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-semibold text-[#8C95A6] mr-1 shrink-0">
            Status:
          </span>
          {statuses.map((status) => {
            const isActive = statusFilter.toLowerCase() === status.toLowerCase();
            return (
              <button
                key={status}
                type="button"
                onClick={() => onStatusChange(status)}
                className={`px-3 py-1 text-xs font-medium rounded-xl transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F8B6D] text-white font-semibold shadow-xs'
                    : 'bg-white border border-[#D9D9D2] text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-50'
                }`}
              >
                {status}
              </button>
            );
          })}
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#8C95A6] shrink-0">
            Priority:
          </span>
          <select
            value={priorityFilter}
            onChange={(e) => onPriorityChange(e.target.value)}
            className="px-2.5 py-1 text-xs bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] focus:outline-none focus:border-[#0F8B6D] cursor-pointer shadow-2xs"
          >
            {priorities.map((pri) => (
              <option key={pri} value={pri}>
                {pri}
              </option>
            ))}
          </select>
        </div>

        {/* Project Selector Filter */}
        {projects.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8C95A6] shrink-0">
              Project:
            </span>
            <select
              value={projectFilter}
              onChange={(e) => onProjectChange(e.target.value)}
              className="px-2.5 py-1 text-xs bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] focus:outline-none focus:border-[#0F8B6D] max-w-[170px] truncate cursor-pointer shadow-2xs"
            >
              <option value="All">All Projects</option>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          leftIcon={<RotateCcw className="w-3 h-3" />}
          className="text-xs text-[#667085] hover:text-[#1F2933] self-end lg:self-center shrink-0"
        >
          Clear All
        </Button>
      )}
    </div>
  );
};

export default { ProjectFilterControls, TaskFilterControls };
