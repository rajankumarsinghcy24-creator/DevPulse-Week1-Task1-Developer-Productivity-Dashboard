import React from 'react';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Trash2,
  Tag
} from 'lucide-react';
import Badge from '../common/Badge';
import { useDashboard } from '../../context/DashboardContext';

export const TaskCard = ({ task, onSelect }) => {
  const { updateTaskStatus, deleteTask } = useDashboard();
  const {
    id,
    title,
    projectName,
    status,
    priority,
    dueDate,
    assignee,
    tags = []
  } = task;

  // Cycle status: Todo -> In Progress -> Done -> Todo
  const handleCycleStatus = (e) => {
    e.stopPropagation();
    if (status === 'Todo') {
      updateTaskStatus(id, 'In Progress');
    } else if (status === 'In Progress') {
      updateTaskStatus(id, 'Done');
    } else {
      updateTaskStatus(id, 'Todo');
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTask(id);
  };

  const getStatusIcon = () => {
    if (status === 'Done') {
      return <CheckCircle2 className="w-4 h-4 text-[#0F8B6D]" />;
    }
    if (status === 'In Progress') {
      return <Clock className="w-4 h-4 text-[#1D7E73]" />;
    }
    return <Circle className="w-4 h-4 text-stone-400" />;
  };

  return (
    <div className="bg-white border border-[#E7E7E0] hover:border-stone-300 rounded-xl p-4 transition-all duration-150 shadow-xs hover:shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
      {/* Left section: Checkbox/Status toggle & info */}
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <button
          type="button"
          onClick={handleCycleStatus}
          title={`Status: ${status}. Click to cycle.`}
          className="mt-0.5 p-1 rounded-lg text-stone-400 hover:text-[#0F8B6D] hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0F8B6D] shrink-0"
          aria-label={`Cycle status for ${title}`}
        >
          {getStatusIcon()}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4
              className={`text-sm font-semibold transition-colors ${
                status === 'Done' ? 'line-through text-stone-400' : 'text-[#1F2933] group-hover:text-[#0F8B6D]'
              }`}
            >
              {title}
            </h4>
          </div>

          <div className="flex items-center gap-2.5 mt-1.5 flex-wrap text-xs text-[#667085]">
            <span className="font-semibold text-[#1F2933]">
              {projectName}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-stone-400" />
              <span>{dueDate}</span>
            </span>

            {tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Tag className="w-3 h-3 text-stone-400" />
                  <span className="font-mono text-[11px] text-[#535D6C]">
                    {tags[0]}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right section: Badges, Assignee & Action */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 self-end sm:self-center">
        <Badge variant={priority} size="sm">
          {priority}
        </Badge>

        <button
          type="button"
          onClick={handleCycleStatus}
          className="cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0F8B6D] rounded-full"
          title="Click to cycle status"
        >
          <Badge variant={status} size="sm" dot>
            {status}
          </Badge>
        </button>

        {assignee && (
          <img
            src={assignee.avatar}
            alt={assignee.name}
            title={assignee.name}
            className="w-6 h-6 rounded-full object-cover border border-stone-200 shrink-0"
          />
        )}

        <button
          type="button"
          onClick={handleDelete}
          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-stone-400 hover:text-[#C94C4C] hover:bg-rose-50 transition-all focus:outline-none focus:opacity-100"
          title="Delete task"
          aria-label={`Delete task ${title}`}
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
