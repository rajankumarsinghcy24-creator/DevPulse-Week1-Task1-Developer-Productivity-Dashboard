/**
 * Centralized Mock Data Source for DevPulse
 * Structured with normalized schemas ready for seamless REST API replacement in Task 2.
 */

export const INITIAL_USER = {
  id: 'usr_01',
  name: 'Alex Morgan',
  role: 'Full Stack Engineering Intern',
  email: 'alex.morgan@devpulse.io',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  department: 'Product & Platform Engineering',
  location: 'San Francisco, CA (Remote)',
  bio: 'Passionate developer building high-impact developer tooling and resilient cloud microservices. Week 1 Full Stack Intern.',
  joinedDate: 'September 2026',
  stats: {
    projectsCompleted: 8,
    tasksResolved: 142,
    pullRequestsMerged: 46,
    codeReviewsGiven: 39,
    streakDays: 6,
    velocityScore: '94 pts',
    productivityScore: 88,
  },
  skills: ['React.js', 'JavaScript (ESNext)', 'Tailwind CSS', 'Node.js', 'Vite', 'REST APIs', 'Git', 'Docker']
};

export const INITIAL_PROJECTS = [
  {
    id: 'proj_1',
    name: 'AI Task Manager',
    description: 'Autonomous task orchestration engine with smart priority estimation and contextual scheduling.',
    category: 'Machine Learning',
    progress: 78,
    completedTasks: 14,
    totalTasks: 18,
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-09-18',
    team: [
      { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
      { name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
      { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80' },
    ],
    techStack: ['React', 'Python', 'FastAPI'],
    updatedAt: '10 mins ago',
  },
  {
    id: 'proj_2',
    name: 'EcoRoute',
    description: 'Carbon-efficient navigation API minimizing transit emissions for commercial delivery fleets.',
    category: 'Sustainability',
    progress: 62,
    completedTasks: 10,
    totalTasks: 16,
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2026-09-24',
    team: [
      { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
      { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80' },
    ],
    techStack: ['Node.js', 'GeoJSON', 'PostgreSQL'],
    updatedAt: '2 hours ago',
  },
  {
    id: 'proj_3',
    name: 'Developer Portfolio',
    description: 'High-performance personal engineering portfolio featuring interactive 3D demos and live metrics.',
    category: 'Frontend',
    progress: 90,
    completedTasks: 18,
    totalTasks: 20,
    status: 'In Progress',
    priority: 'Low',
    dueDate: '2026-09-14',
    team: [
      { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    updatedAt: '4 hours ago',
  },
  {
    id: 'proj_4',
    name: 'Smart Productivity App',
    description: 'Focus timer and context-switch analyzer integrated with IDE activity logs and commit telemetry.',
    category: 'Productivity',
    progress: 35,
    completedTasks: 7,
    totalTasks: 20,
    status: 'Planning',
    priority: 'Medium',
    dueDate: '2026-10-02',
    team: [
      { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
      { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80' },
    ],
    techStack: ['Next.js', 'Tailwind', 'GraphQL'],
    updatedAt: 'Yesterday',
  },
  {
    id: 'proj_5',
    name: 'Cloud Infrastructure Automation',
    description: 'Terraform blueprints and GitHub Actions workflows for multi-region container orchestration.',
    category: 'DevOps',
    progress: 100,
    completedTasks: 12,
    totalTasks: 12,
    status: 'Completed',
    priority: 'High',
    dueDate: '2026-09-02',
    team: [
      { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80' },
      { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    ],
    techStack: ['Terraform', 'AWS', 'Docker'],
    updatedAt: '3 days ago',
  },
  {
    id: 'proj_6',
    name: 'API Gateway Redesign',
    description: 'High-throughput reverse proxy migration with JWT verification and rate limiting algorithms.',
    category: 'Architecture',
    progress: 15,
    completedTasks: 3,
    totalTasks: 20,
    status: 'Planning',
    priority: 'High',
    dueDate: '2026-10-15',
    team: [
      { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80' },
      { name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
    ],
    techStack: ['Go', 'Redis', 'Envoy'],
    updatedAt: '4 days ago',
  }
];

export const INITIAL_TASKS = [
  {
    id: 'task_1',
    title: 'Implement authentication',
    projectId: 'proj_1',
    projectName: 'AI Task Manager',
    status: 'Done',
    priority: 'High',
    dueDate: 'Yesterday',
    dueTimestamp: '2026-09-08',
    assignee: { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    tags: ['Security', 'OAuth2']
  },
  {
    id: 'task_2',
    title: 'Design dashboard UI',
    projectId: 'proj_4',
    projectName: 'Smart Productivity App',
    status: 'Done',
    priority: 'High',
    dueDate: 'Yesterday',
    dueTimestamp: '2026-09-08',
    assignee: { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    tags: ['UI/UX', 'Figma']
  },
  {
    id: 'task_3',
    title: 'Create project API',
    projectId: 'proj_2',
    projectName: 'EcoRoute',
    status: 'In Progress',
    priority: 'High',
    dueDate: 'In 2 days',
    dueTimestamp: '2026-09-11',
    assignee: { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    tags: ['Backend', 'Express']
  },
  {
    id: 'task_4',
    title: 'Fix responsive layout',
    projectId: 'proj_3',
    projectName: 'Developer Portfolio',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: 'Today',
    dueTimestamp: '2026-09-09',
    assignee: { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    tags: ['CSS', 'Mobile']
  },
  {
    id: 'task_5',
    title: 'Write project documentation',
    projectId: 'proj_5',
    projectName: 'Cloud Infrastructure Automation',
    status: 'Done',
    priority: 'Low',
    dueDate: 'Last week',
    dueTimestamp: '2026-09-02',
    assignee: { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80' },
    tags: ['Docs', 'Markdown']
  },
  {
    id: 'task_6',
    title: 'Implement search functionality',
    projectId: 'proj_1',
    projectName: 'AI Task Manager',
    status: 'In Progress',
    priority: 'High',
    dueDate: 'In 3 days',
    dueTimestamp: '2026-09-12',
    assignee: { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    tags: ['Search', 'Client-side']
  },
  {
    id: 'task_7',
    title: 'Test task filtering',
    projectId: 'proj_1',
    projectName: 'AI Task Manager',
    status: 'Todo',
    priority: 'Medium',
    dueDate: 'In 4 days',
    dueTimestamp: '2026-09-13',
    assignee: { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    tags: ['QA', 'Unit Test']
  },
  {
    id: 'task_8',
    title: 'Configure Redis caching layer',
    projectId: 'proj_6',
    projectName: 'API Gateway Redesign',
    status: 'Todo',
    priority: 'High',
    dueDate: 'Next week',
    dueTimestamp: '2026-09-16',
    assignee: { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80' },
    tags: ['Performance', 'Cache']
  },
  {
    id: 'task_9',
    title: 'Optimize bundle size and lazy loading',
    projectId: 'proj_3',
    projectName: 'Developer Portfolio',
    status: 'Todo',
    priority: 'Low',
    dueDate: 'Next week',
    dueTimestamp: '2026-09-17',
    assignee: { name: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
    tags: ['Webpack', 'Optimization']
  },
  {
    id: 'task_10',
    title: 'Setup CI/CD pipeline tests',
    projectId: 'proj_2',
    projectName: 'EcoRoute',
    status: 'Todo',
    priority: 'Medium',
    dueDate: 'Next week',
    dueTimestamp: '2026-09-19',
    assignee: { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80' },
    tags: ['DevOps', 'GitHub Actions']
  }
];

export const INITIAL_ACTIVITIES = [
  {
    id: 'act_1',
    type: 'completed',
    user: 'Alex Morgan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
    description: 'Completed task',
    target: 'Dashboard UI',
    project: 'Smart Productivity App',
    timestamp: '25 minutes ago'
  },
  {
    id: 'act_2',
    type: 'updated',
    user: 'Alex Morgan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
    description: 'Pushed 4 commits to',
    target: 'feature/emission-calc',
    project: 'EcoRoute',
    timestamp: '1 hour ago'
  },
  {
    id: 'act_3',
    type: 'created',
    user: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
    description: 'Created new task',
    target: 'Implement search functionality',
    project: 'AI Task Manager',
    timestamp: '3 hours ago'
  },
  {
    id: 'act_4',
    type: 'status_change',
    user: 'Alex Morgan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
    description: 'Changed status to Done on',
    target: 'Implement authentication',
    project: 'AI Task Manager',
    timestamp: 'Yesterday at 5:40 PM'
  },
  {
    id: 'act_5',
    type: 'milestone',
    user: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
    description: 'Reached 100% milestone on',
    target: 'Cloud Infrastructure Automation',
    project: 'Infrastructure',
    timestamp: '2 days ago'
  }
];

export const WEEKLY_PRODUCTIVITY_DATA = [
  { day: 'Mon', completed: 6, target: 5, active: 4 },
  { day: 'Tue', completed: 8, target: 5, active: 3 },
  { day: 'Wed', completed: 5, target: 5, active: 5 },
  { day: 'Thu', completed: 7, target: 5, active: 4 },
  { day: 'Fri', completed: 9, target: 5, active: 2 },
  { day: 'Sat', completed: 4, target: 3, active: 1 },
  { day: 'Sun', completed: 2, target: 2, active: 1 },
];
