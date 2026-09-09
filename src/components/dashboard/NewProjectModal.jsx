import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { useDashboard } from '../../context/DashboardContext';

export const NewProjectModal = ({ isOpen, onClose }) => {
  const { addProject } = useDashboard();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Engineering',
    priority: 'Medium',
    status: 'In Progress',
    dueDate: '2026-10-15',
    progress: 0,
    totalTasks: 10,
    techStack: 'React, Node.js'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    addProject(formData);
    onClose();
    setFormData({
      name: '',
      description: '',
      category: 'Engineering',
      priority: 'Medium',
      status: 'In Progress',
      dueDate: '2026-10-15',
      progress: 0,
      totalTasks: 10,
      techStack: 'React, Node.js'
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Project"
      subtitle="Add a new engineering initiative to your productivity board."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
            Project Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Telemetry Streaming Pipeline"
            className="w-full px-3.5 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] placeholder-[#8C95A6] focus:outline-none focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
            Description
          </label>
          <textarea
            rows="2"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Brief overview of the technical requirements & deliverables..."
            className="w-full px-3.5 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] placeholder-[#8C95A6] focus:outline-none focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D] resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] focus:outline-none focus:border-[#0F8B6D] cursor-pointer"
            >
              <option value="Machine Learning">Machine Learning</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Frontend">Frontend</option>
              <option value="Productivity">Productivity</option>
              <option value="DevOps">DevOps</option>
              <option value="Architecture">Architecture</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
              Initial Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] focus:outline-none focus:border-[#0F8B6D] cursor-pointer"
            >
              <option value="Planning">Planning</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
              Priority
            </label>
            <select
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] focus:outline-none focus:border-[#0F8B6D] cursor-pointer"
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
              Target Due Date
            </label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] focus:outline-none focus:border-[#0F8B6D]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
            Tech Stack (comma-separated)
          </label>
          <input
            type="text"
            value={formData.techStack}
            onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
            placeholder="e.g. Next.js, Redis, Tailwind"
            className="w-full px-3.5 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] placeholder-[#8C95A6] focus:outline-none focus:border-[#0F8B6D]"
          />
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E7E0]">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" type="submit">
            Create Project
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default NewProjectModal;
