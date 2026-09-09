import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FolderKanban,
  CheckSquare,
  ArrowRight,
  Plus
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';
import WelcomeHeader from '../components/dashboard/WelcomeHeader';
import StatsGrid from '../components/dashboard/StatsCard';
import ProductivityOverview from '../components/dashboard/ProductivityOverview';
import RecentActivity from '../components/dashboard/RecentActivity';
import ProjectCard from '../components/dashboard/ProjectCard';
import TaskCard from '../components/dashboard/TaskCard';
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';
import EmptyState from '../components/states/EmptyState';
import NewProjectModal from '../components/dashboard/NewProjectModal';
import NewTaskModal from '../components/dashboard/NewTaskModal';
import Button from '../components/common/Button';

export const Dashboard = () => {
  const {
    filteredProjects,
    filteredTasks,
    isLoading,
    isError,
    errorMessage,
    retryFetch,
    searchQuery,
    setSearchQuery
  } = useDashboard();

  const [newProjectModalOpen, setNewProjectModalOpen] = useState(false);
  const [newTaskModalOpen, setNewTaskModalOpen] = useState(false);

  // Handle Loading Skeleton State
  if (isLoading) {
    return <LoadingState variant="full" />;
  }

  // Handle Error State with Retry
  if (isError) {
    return (
      <ErrorState
        title="Productivity Sync Unavailable"
        message={errorMessage}
        onRetry={retryFetch}
        className="my-12"
      />
    );
  }

  const hasSearch = searchQuery.trim().length > 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Welcome Header */}
      <WelcomeHeader
        onOpenNewProject={() => setNewProjectModalOpen(true)}
        onOpenNewTask={() => setNewTaskModalOpen(true)}
      />

      {/* 4 Productivity Statistics Cards */}
      <StatsGrid />

      {/* Search match banner if active */}
      {hasSearch && (
        <div className="flex items-center justify-between p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-[#0F8B6D] shadow-2xs">
          <span>
            Showing search results matching "<span className="font-bold">{searchQuery}</span>"
          </span>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-[#0F8B6D] hover:underline font-semibold ml-2"
          >
            Clear search
          </button>
        </div>
      )}

      {/* 2-Column Split: Productivity Chart & Recent Activity */}
      {!hasSearch && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProductivityOverview />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1F2933] flex items-center gap-2">
              <FolderKanban className="w-5 h-5 text-[#0F8B6D]" />
              My Projects
            </h2>
            <p className="text-xs text-[#667085] mt-0.5">
              Active engineering projects and milestone velocity
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setNewProjectModalOpen(true)}
              leftIcon={<Plus className="w-3.5 h-3.5" />}
              className="hidden sm:inline-flex"
            >
              Add Project
            </Button>
            <Link
              to="/projects"
              className="text-xs font-semibold text-[#0F8B6D] hover:text-[#0B7057] flex items-center gap-1 group py-1"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <EmptyState
            type="projects"
            title="No projects found"
            description={
              hasSearch
                ? `No projects matching "${searchQuery}". Try a different keyword.`
                : 'No projects currently tracked in this workspace.'
            }
            onAction={hasSearch ? () => setSearchQuery('') : () => setNewProjectModalOpen(true)}
            actionLabel={hasSearch ? 'Clear Search' : 'Create Project'}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* Recent Tasks Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1F2933] flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-[#0F8B6D]" />
              Recent Tasks
            </h2>
            <p className="text-xs text-[#667085] mt-0.5">
              Sprint backlog items with interactive status transitions
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setNewTaskModalOpen(true)}
              leftIcon={<Plus className="w-3.5 h-3.5" />}
              className="hidden sm:inline-flex"
            >
              Add Task
            </Button>
            <Link
              to="/tasks"
              className="text-xs font-semibold text-[#0F8B6D] hover:text-[#0B7057] flex items-center gap-1 group py-1"
            >
              <span>Manage all tasks</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {filteredTasks.length === 0 ? (
          <EmptyState
            type="tasks"
            title="No tasks found"
            description={
              hasSearch
                ? `No tasks matching "${searchQuery}". Try a different search term.`
                : 'All tasks completed or none configured.'
            }
            onAction={hasSearch ? () => setSearchQuery('') : () => setNewTaskModalOpen(true)}
            actionLabel={hasSearch ? 'Clear Search' : 'Add Task'}
          />
        ) : (
          <div className="space-y-2.5">
            {filteredTasks.slice(0, 5).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </section>

      {/* Modals */}
      <NewProjectModal
        isOpen={newProjectModalOpen}
        onClose={() => setNewProjectModalOpen(false)}
      />
      <NewTaskModal
        isOpen={newTaskModalOpen}
        onClose={() => setNewTaskModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
