import React from 'react';
import { SearchX, FolderKanban, CheckSquare, Plus, RotateCcw } from 'lucide-react';
import Button from '../common/Button';

export const EmptyState = ({
  type = 'search',
  title,
  description,
  actionLabel,
  onAction,
  className = ''
}) => {
  const getDefaults = () => {
    switch (type) {
      case 'projects':
        return {
          icon: <FolderKanban className="w-9 h-9 text-[#0F8B6D]" />,
          title: title || 'No projects found',
          description: description || 'Get started by creating your first project to organize your development workflow.',
          actionLabel: actionLabel || 'Create New Project',
          actionIcon: <Plus className="w-4 h-4" />
        };
      case 'tasks':
        return {
          icon: <CheckSquare className="w-9 h-9 text-[#0F8B6D]" />,
          title: title || 'No tasks found',
          description: description || 'All caught up! No active tasks match this criteria.',
          actionLabel: actionLabel || 'Create New Task',
          actionIcon: <Plus className="w-4 h-4" />
        };
      case 'search':
      default:
        return {
          icon: <SearchX className="w-9 h-9 text-[#535D6C]" />,
          title: title || 'No matching results',
          description: description || 'We couldn\'t find any records matching your search or active filter settings.',
          actionLabel: actionLabel || 'Reset Filters',
          actionIcon: <RotateCcw className="w-4 h-4" />
        };
    }
  };

  const defaults = getDefaults();

  return (
    <div className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-white border border-dashed border-[#D9D9D2] rounded-2xl shadow-xs ${className}`}>
      <div className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E7E7E0] mb-4 shadow-2xs">
        {defaults.icon}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-[#1F2933] mb-1.5">
        {defaults.title}
      </h3>
      <p className="text-sm text-[#667085] max-w-sm mb-6 leading-relaxed">
        {defaults.description}
      </p>
      {onAction && (
        <Button
          variant="secondary"
          size="sm"
          onClick={onAction}
          leftIcon={defaults.actionIcon}
        >
          {defaults.actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
