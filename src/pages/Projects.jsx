import React, { useState } from 'react';
import { FolderKanban, Plus } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';
import ProjectCard from '../components/dashboard/ProjectCard';
import { ProjectFilterControls } from '../components/filters/FilterControls';
import SearchBar from '../components/filters/SearchBar';
import LoadingState from '../components/states/LoadingState';
import EmptyState from '../components/states/EmptyState';
import ErrorState from '../components/states/ErrorState';
import NewProjectModal from '../components/dashboard/NewProjectModal';
import Button from '../components/common/Button';

export const Projects = () => {
  const {
    filteredProjects,
    projects,
    searchQuery,
    setSearchQuery,
    projectStatusFilter,
    setProjectStatusFilter,
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
        <LoadingState variant="projects" count={6} />
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to Load Projects"
        message={errorMessage}
        onRetry={retryFetch}
        className="my-12"
      />
    );
  }

  const hasActiveFilters = projectStatusFilter !== 'All' || searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSearchQuery('');
    setProjectStatusFilter('All');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E7E7E0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1F2933] flex items-center gap-2.5">
            <FolderKanban className="w-7 h-7 text-[#0F8B6D]" />
            Engineering Projects
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Browse and monitor status, tech stack, team, and delivery progress across all projects.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => setModalOpen(true)}
          leftIcon={<Plus className="w-4 h-4 text-white" />}
          className="shrink-0"
        >
          New Project
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E7E7E0] shadow-xs">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by project name, description, category..."
          className="max-w-md"
        />

        <ProjectFilterControls
          statusFilter={projectStatusFilter}
          onStatusChange={setProjectStatusFilter}
          onReset={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#667085] px-1">
        <span>
          Showing <strong className="text-[#1F2933]">{filteredProjects.length}</strong> of{' '}
          {projects.length} total projects
        </span>
        {hasActiveFilters && (
          <span className="text-[#0F8B6D] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
            Filtered View
          </span>
        )}
      </div>

      {/* Project Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          type="projects"
          title="No projects match criteria"
          description="We couldn't find any engineering projects matching your active search keywords or status filter."
          actionLabel="Reset Search & Filters"
          onAction={handleResetFilters}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Modal */}
      <NewProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Projects;
