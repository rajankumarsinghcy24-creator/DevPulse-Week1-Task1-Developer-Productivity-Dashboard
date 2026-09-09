import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import {
  INITIAL_USER,
  INITIAL_PROJECTS,
  INITIAL_TASKS,
  INITIAL_ACTIVITIES,
  WEEKLY_PRODUCTIVITY_DATA
} from '../data/mockData';

const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [user] = useState(INITIAL_USER);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);
  const [weeklyData] = useState(WEEKLY_PRODUCTIVITY_DATA);

  // Dynamic UI States
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Global & Dedicated Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [projectStatusFilter, setProjectStatusFilter] = useState('All');
  const [taskStatusFilter, setTaskStatusFilter] = useState('All');
  const [taskPriorityFilter, setTaskPriorityFilter] = useState('All');
  const [taskProjectFilter, setTaskProjectFilter] = useState('All');

  // Simulated initial network latency
  const loadData = useCallback((shouldFail = false) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMessage('');

    const timer = setTimeout(() => {
      if (shouldFail) {
        setIsError(true);
        setErrorMessage('Failed to establish connection with productivity sync server. Please verify your network and retry.');
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(false);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    loadData(false);
  }, [loadData]);

  // Retry action for Error State
  const retryFetch = () => {
    loadData(false);
  };

  // Demo tool to toggle simulated error state
  const simulateError = () => {
    loadData(true);
  };

  // Demo tool to trigger loading skeleton
  const triggerReload = () => {
    loadData(false);
  };

  // Mutator: Add Project
  const addProject = (newProjectData) => {
    const id = `proj_${Date.now()}`;
    const newProj = {
      id,
      name: newProjectData.name,
      description: newProjectData.description,
      category: newProjectData.category || 'Engineering',
      progress: Number(newProjectData.progress) || 0,
      completedTasks: 0,
      totalTasks: Number(newProjectData.totalTasks) || 5,
      status: newProjectData.status || 'Planning',
      priority: newProjectData.priority || 'Medium',
      dueDate: newProjectData.dueDate || '2026-10-01',
      team: [
        { name: user.name, avatar: user.avatar }
      ],
      techStack: newProjectData.techStack ? newProjectData.techStack.split(',').map(s => s.trim()) : ['React', 'JavaScript'],
      updatedAt: 'Just now'
    };

    setProjects(prev => [newProj, ...prev]);

    // Add activity
    setActivities(prev => [
      {
        id: `act_${Date.now()}`,
        type: 'created',
        user: user.name,
        avatar: user.avatar,
        description: 'Created new project',
        target: newProj.name,
        project: newProj.category,
        timestamp: 'Just now'
      },
      ...prev
    ]);
  };

  // Mutator: Add Task
  const addTask = (newTaskData) => {
    const id = `task_${Date.now()}`;
    const project = projects.find(p => p.id === newTaskData.projectId) || projects[0];

    const newTask = {
      id,
      title: newTaskData.title,
      projectId: project.id,
      projectName: project.name,
      status: newTaskData.status || 'Todo',
      priority: newTaskData.priority || 'Medium',
      dueDate: newTaskData.dueDate || 'Next week',
      dueTimestamp: '2026-09-20',
      assignee: { name: user.name, avatar: user.avatar },
      tags: newTaskData.tags ? newTaskData.tags.split(',').map(t => t.trim()) : ['Feature']
    };

    setTasks(prev => [newTask, ...prev]);

    setActivities(prev => [
      {
        id: `act_${Date.now()}`,
        type: 'created',
        user: user.name,
        avatar: user.avatar,
        description: 'Added task',
        target: newTask.title,
        project: project.name,
        timestamp: 'Just now'
      },
      ...prev
    ]);
  };

  // Mutator: Update Task Status
  const updateTaskStatus = (taskId, newStatus) => {
    let changedTask = null;

    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        changedTask = { ...task, status: newStatus };
        return changedTask;
      }
      return task;
    }));

    if (changedTask) {
      // Recalculate project progress if applicable
      setProjects(prev => prev.map(proj => {
        if (proj.id === changedTask.projectId) {
          const projectTasks = tasks.map(t => t.id === taskId ? changedTask : t).filter(t => t.projectId === proj.id);
          const completedCount = projectTasks.filter(t => t.status === 'Done').length;
          const totalCount = Math.max(projectTasks.length, proj.totalTasks);
          const newProgress = Math.round((completedCount / totalCount) * 100);
          return {
            ...proj,
            completedTasks: completedCount,
            progress: newProgress,
            updatedAt: 'Just now'
          };
        }
        return proj;
      }));

      // Log activity
      setActivities(prev => [
        {
          id: `act_${Date.now()}`,
          type: 'status_change',
          user: user.name,
          avatar: user.avatar,
          description: `Changed status to ${newStatus} on`,
          target: changedTask.title,
          project: changedTask.projectName,
          timestamp: 'Just now'
        },
        ...prev
      ]);
    }
  };

  // Mutator: Delete Task
  const deleteTask = (taskId) => {
    const taskToDelete = tasks.find(t => t.id === taskId);
    setTasks(prev => prev.filter(t => t.id !== taskId));
    if (taskToDelete) {
      setActivities(prev => [
        {
          id: `act_${Date.now()}`,
          type: 'deleted',
          user: user.name,
          avatar: user.avatar,
          description: 'Removed task',
          target: taskToDelete.title,
          project: taskToDelete.projectName,
          timestamp: 'Just now'
        },
        ...prev
      ]);
    }
  };

  // Filtered Projects (Search query matches name or description)
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery === '' || 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = projectStatusFilter === 'All' || project.status.toLowerCase() === projectStatusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [projects, searchQuery, projectStatusFilter]);

  // Filtered Tasks (Search query matches title, project name, or tag)
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = searchQuery === '' ||
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus = taskStatusFilter === 'All' || task.status.toLowerCase() === taskStatusFilter.toLowerCase();
      const matchesPriority = taskPriorityFilter === 'All' || task.priority.toLowerCase() === taskPriorityFilter.toLowerCase();
      const matchesProject = taskProjectFilter === 'All' || task.projectId === taskProjectFilter;

      return matchesSearch && matchesStatus && matchesPriority && matchesProject;
    });
  }, [tasks, searchQuery, taskStatusFilter, taskPriorityFilter, taskProjectFilter]);

  // Computed Dashboard Statistics
  const stats = useMemo(() => {
    const totalProjects = projects.length;
    const activeTasks = tasks.filter(t => t.status === 'In Progress' || t.status === 'Todo').length;
    const completedTasks = tasks.filter(t => t.status === 'Done').length;
    const totalTasks = tasks.length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    // Productivity score composite (weighted by completion rate, streak, etc)
    const productivityScore = Math.min(99, Math.round(70 + (completionRate * 0.2) + (user.stats.streakDays * 1.5)));

    return {
      totalProjects,
      activeTasks,
      completedTasks,
      productivityScore,
      completionRate
    };
  }, [projects, tasks, user]);

  const value = {
    user,
    projects,
    tasks,
    activities,
    weeklyData,
    isLoading,
    isError,
    errorMessage,
    retryFetch,
    simulateError,
    triggerReload,
    // Filters & Search
    searchQuery,
    setSearchQuery,
    projectStatusFilter,
    setProjectStatusFilter,
    taskStatusFilter,
    setTaskStatusFilter,
    taskPriorityFilter,
    setTaskPriorityFilter,
    taskProjectFilter,
    setTaskProjectFilter,
    // Filtered lists
    filteredProjects,
    filteredTasks,
    // Computed stats
    stats,
    // Actions
    addProject,
    addTask,
    updateTaskStatus,
    deleteTask
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
