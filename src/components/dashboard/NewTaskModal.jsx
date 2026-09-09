import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { useDashboard } from '../../context/DashboardContext';

export const NewTaskModal = ({ isOpen, onClose, defaultProjectId }) => {
  const { projects, addTask } = useDashboard();

  const [formData, setFormData] = useState({
    title: '',
    projectId: defaultProjectId || (projects[0] ? projects[0].id : ''),
    priority: 'Medium',
    status: 'Todo',
    dueDate: 'In 3 days',
    tags: 'Feature, Sprint'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    addTask(formData);
    onClose();
    setFormData({
      title: '',
      projectId: defaultProjectId || (projects[0] ? projects[0].id : ''),
      priority: 'Medium',
      status: 'Todo',
      dueDate: 'In 3 days',
      tags: 'Feature, Sprint'
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Task"
      subtitle="Define an actionable engineering task and assign it to a project."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
            Task Title *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g. Implement refresh token rotation"
            className="w-full px-3.5 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] placeholder-[#8C95A6] focus:outline-none focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
            Target Project *
          </label>
          <select
            value={formData.projectId}
            onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
            className="w-full px-3 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] focus:outline-none focus:border-[#0F8B6D] cursor-pointer"
          >
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.category})
              </option>
            ))}
          </select>
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
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] focus:outline-none focus:border-[#0F8B6D] cursor-pointer"
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
              Due Date Description
            </label>
            <input
              type="text"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              placeholder="e.g. In 2 days / Next week"
              className="w-full px-3 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] placeholder-[#8C95A6] focus:outline-none focus:border-[#0F8B6D]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#535D6C] uppercase tracking-wider mb-1.5">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="e.g. Security, Auth, Testing"
              className="w-full px-3 py-2 text-sm bg-white border border-[#D9D9D2] rounded-xl text-[#1F2933] placeholder-[#8C95A6] focus:outline-none focus:border-[#0F8B6D]"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E7E0]">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" type="submit">
            Add Task
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
