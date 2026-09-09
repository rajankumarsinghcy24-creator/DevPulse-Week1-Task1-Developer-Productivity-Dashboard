import React, { useState } from 'react';
import { CheckSquare, Plus } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';
import TaskCard from '../components/dashboard/TaskCard';
import { TaskFilterControls } from '../components/filters/FilterControls';
import SearchBar from '../components/filters/SearchBar';
import LoadingState from '../components/states/LoadingState';
import EmptyState from '../components/states/EmptyState';
import ErrorState from '../components/states/ErrorState';
import NewTaskModal from '../components/dashboard/NewTaskModal';
import Button from '../components/common/Button';

export const Tasks = () => {
  const {
    filteredTasks,
    tasks,
    projects,
    searchQuery,
    setSearchQuery,
    taskStatusFilter,
    setTaskStatusFilter,
    taskPriorityFilter,
    setTaskPriorityFilter,
    taskProjectFilter,
    setTaskProjectFilter,
    isLoading,
    isError,
    errorMessage,
    retryFetch
  } = useDashboard();

  const [modalOpen, setModalOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-48 bg-stone-200 rounded-xl animate-pulse" />
        <LoadingState variant="tasks" count={6} />
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to Load Tasks"
        message={errorMessage}
        onRetry={retryFetch}
        className="my-12"
      />
    );
  }

  const hasActiveFilters =
    taskStatusFilter !== 'All' ||
    taskPriorityFilter !== 'All' ||
    taskProjectFilter !== 'All' ||
    searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSearchQuery('');
    setTaskStatusFilter('All');
    setTaskPriorityFilter('All');
    setTaskProjectFilter('All');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E7E7E0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1F2933] flex items-center gap-2.5">
            <CheckSquare className="w-7 h-7 text-[#0F8B6D]" />
            Task Management
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Track, filter, and transition developer tasks across sprints and active projects.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => setModalOpen(true)}
          leftIcon={<Plus className="w-4 h-4 text-white" />}
          className="shrink-0"
        >
          New Task
        </Button>
      </div>

      {/* Search and Filters Box */}
      <div className="bg-white p-4 rounded-2xl border border-[#E7E7E0] space-y-3 shadow-xs">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search tasks by title, project, or tags (e.g. Auth, CSS)..."
        />

        <TaskFilterControls
          statusFilter={taskStatusFilter}
          onStatusChange={setTaskStatusFilter}
          priorityFilter={taskPriorityFilter}
          onPriorityChange={setTaskPriorityFilter}
          projectFilter={taskProjectFilter}
          onProjectChange={setTaskProjectFilter}
          projects={projects}
          onReset={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Meta Counter & Guidance */}
      <div className="flex items-center justify-between text-xs text-[#667085] px-1">
        <span>
          Showing <strong className="text-[#1F2933]">{filteredTasks.length}</strong> of{' '}
          {tasks.length} total tasks
        </span>
        <span className="hidden sm:inline-block text-[11px] text-[#667085] bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
          💡 Tip: Click status circle or badge to cycle task (Todo ➔ In Progress ➔ Done)
        </span>
      </div>

      {/* Task List or Empty State */}
      {filteredTasks.length === 0 ? (
        <EmptyState
          type="tasks"
          title="No tasks match criteria"
          description="We couldn't find any engineering tasks matching your selected filters and search query."
          actionLabel="Reset All Filters"
          onAction={handleResetFilters}
        />
      ) : (
        <div className="space-y-2.5">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}

      {/* Modal */}
      <NewTaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Tasks;
