# DevPulse — Developer Productivity Dashboard

> A responsive, frontend Developer Productivity Dashboard for project and task management built with **React**, **Vite**, **Tailwind CSS**, **React Router**, and **Lucide React** for the **Innovation Hacks Full Stack Internship — Week 1 / Task 1**.

---

## 📸 Application Preview

### Dashboard Overview
![DevPulse Dashboard](./screenshots/dashboard.png)

### Projects & Task Management
| **Engineering Projects View** | **Task Management Board** |
| :---: | :---: |
| ![DevPulse Projects](./screenshots/projects.png) | ![DevPulse Tasks](./screenshots/tasks.png) |

### Responsive Mobile Experience
<div align="center">
  <img src="./screenshots/mobile.png" alt="DevPulse Mobile Layout" width="360" />
</div>

---

## 📌 Project Overview

**DevPulse** is a modern frontend Developer Productivity Dashboard designed to streamline project and task management for software engineering workflows. Built for **Innovation Hacks Week 1 / Task 1**, DevPulse delivers a clean SaaS interface where developers can monitor active project milestones, manage sprint backlogs, track task progression through status and priority indicators, and review productivity metrics.

In compliance with the Week 1 requirements, this application is implemented as a **frontend-only** client utilizing normalized mock data structures and centralized React Context state management. The component hierarchy and custom hooks are purposefully architected to be **backend-ready**, ensuring seamless integration with a REST API in subsequent internship tasks.

---

## ✨ Implemented Features (Week 1 / Task 1)

- **📊 Dashboard Overview and Statistics**: KPI statistics cards tracking Total Projects, Active Tasks, Completed Tasks, and Productivity Score, paired with weekly velocity breakdown charts.
- **📁 Project Management UI**: Dedicated catalog displaying project cards with category tags, descriptions, tech stack pills, assigned team avatars, due dates, and completion status.
- **✅ Task Management UI**: Comprehensive task board displaying task titles, parent project associations, due dates, tags, and assignees.
- **🔄 Task Status and Priority**: Status progression across `Todo`, `In Progress`, and `Done` with color-coded status badges and priority tags (`Low`, `Medium`, `High`).
- **🔍 Project/Task Search and Filtering**: Instant client-side search across project names, task titles, descriptions, and tags, complemented by multi-criteria filter controls for status, priority, and project scope.
- **➕ Add Project and Add Task Functionality**: Modal dialog forms enabling users to create and add new projects and sprint tasks directly into local state with immediate UI feedback.
- **📈 Progress Indicators**: Reusable progress bars with dynamic color thresholds (`>=80%` Emerald, `>=40%` Sky, `<40%` Amber) reflecting completion percentages and delivery milestones.
- **🕒 Recent Activity**: Chronological activity feed logging task status transitions, task creations, and project updates.
- **🔄 Loading, Empty, and Error States**: Built-in state management including pulsing skeleton loaders for data fetching simulations, contextual empty states with a "Reset Filters" action, and an error alert banner with an interactive "Retry Connection" button.
- **📱 Responsive Desktop, Tablet, and Mobile Layouts**: Clean interface featuring a fixed desktop sidebar, tablet-optimized grid wrapping, and a touch-friendly mobile slide-over navigation drawer with zero horizontal overflow.
- **🧩 Reusable Component Architecture**: Highly modular design system built with reusable components (`Button`, `Badge`, `Modal`, `ProgressBar`, `StatsCard`, `ProjectCard`, `TaskCard`, `SearchBar`, `FilterControls`).
- **📦 Mock Frontend Data for Week 1**: Normalized sample data structures for user profiles, projects, tasks, and productivity metrics simulating production environments.
- **🔌 Backend-Ready Architecture**: Decoupled presentation and state management via React Context (`DashboardContext.jsx`) and custom hooks (`useDashboardData.js`), structured for straightforward REST API integration in future internship tasks.

---

## 🎮 Evaluator Controls (Built-in Demo Triggers)

The dashboard includes dedicated interactive controls in the header navigation for evaluators to test all edge cases and state transitions:

- **⚡ Instant Search**: Type in the top search bar to filter projects, tasks, and tags across the entire workspace in real time.
- **🔄 Simulate Load**: Click **"Simulate Load"** in the top navigation bar to preview the pulsing skeleton loaders.
- **⚠️ Simulate Error & Retry**: Click **"Simulate Error"** to trigger a simulated network failure state; click **"Retry Connection"** to recover the dashboard data.
- **🎯 Task Status Cycling**: Click the status indicator button or badge on any task card to transition it through `Todo ➔ In Progress ➔ Done`, which dynamically updates project progress percentages and productivity scores.
- **➕ Modal Dialogs**: Click **"New Project"** or **"Add Task"** in the top header or page views to test form validation and local state updates.

---

## 🛠️ Tech Stack

| Technology | Role in Project |
| :--- | :--- |
| **React 19** | Component-driven UI library for modern frontend development |
| **Vite 8** | High-performance build tool and local development server |
| **Tailwind CSS v4** | Modern utility-first styling with custom Warm Light and Emerald design system |
| **React Router v7** | Client-side routing with deep link navigation across views |
| **Lucide React** | Consistent, accessible icon system |
| **JavaScript (ESNext)** | State management and client-side filtering logic |

---

## 📂 Project Structure

```
InnovationHack/
├── screenshots/
│   ├── dashboard.png         # Screenshot: Main Dashboard Overview
│   ├── projects.png          # Screenshot: Engineering Projects Catalog
│   ├── tasks.png             # Screenshot: Task Management Board
│   └── mobile.png            # Screenshot: Responsive Mobile View
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx             # Reusable status & priority badges with accessible dots
│   │   │   ├── Button.jsx            # Reusable button with variants, sizes & loading states
│   │   │   └── Modal.jsx             # Accessible dialog with ESC dismissal & backdrop blur
│   │   ├── dashboard/
│   │   │   ├── NewProjectModal.jsx   # Project creation form modal
│   │   │   ├── NewTaskModal.jsx      # Task creation form modal
│   │   │   ├── ProductivityOverview.jsx # Velocity chart & productivity overview
│   │   │   ├── ProgressBar.jsx       # Visual progress bar with color thresholds
│   │   │   ├── ProjectCard.jsx       # Reusable project card with avatars & progress
│   │   │   ├── RecentActivity.jsx    # Chronological activity stream
│   │   │   ├── StatsCard.jsx         # KPI statistic cards with trend markers
│   │   │   ├── TaskCard.jsx          # Interactive task item with status cycling
│   │   │   └── WelcomeHeader.jsx     # Greeting header with quick action triggers
│   │   ├── filters/
│   │   │   ├── FilterControls.jsx    # Status, priority, and project filter pills
│   │   │   └── SearchBar.jsx         # Client-side search input
│   │   ├── layout/
│   │   │   ├── Layout.jsx            # Master shell linking sidebar, navbar & outlet
│   │   │   ├── MobileNavigation.jsx  # Touch-friendly slide-over drawer
│   │   │   ├── Navbar.jsx            # Header with search, evaluator demo triggers & profile
│   │   │   └── Sidebar.jsx           # Desktop navigation & user profile widget
│   │   └── states/
│   │       ├── EmptyState.jsx        # Contextual empty state with reset action
│   │       ├── ErrorState.jsx        # Error alert banner with live retry action
│   │       └── LoadingState.jsx      # Skeleton loaders for stats, cards, and tables
│   ├── context/
│   │   └── DashboardContext.jsx      # Centralized state provider, search & filter logic
│   ├── data/
│   │   └── mockData.js               # Normalized schemas (User, Projects, Tasks, Metrics)
│   ├── hooks/
│   │   └── useDashboardData.js       # Custom hook wrapper ready for REST API integration
│   ├── pages/
│   │   ├── Dashboard.jsx             # Primary dashboard overview
│   │   ├── Projects.jsx              # Dedicated projects catalog & filters
│   │   ├── Tasks.jsx                 # Task board & status transition engine
│   │   └── Profile.jsx               # Developer profile, stats, and verified skills
│   ├── App.css
│   ├── App.jsx                       # Route tree configuration
│   ├── index.css                     # Tailwind v4 theme styling & custom scrollbars
│   └── main.jsx                      # Application entrypoint
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ How to Run Locally

### Prerequisites
- **Node.js**: `v18.0.0` or higher (`v20.x` or `v22.x` recommended)
- **npm**: `v9.0.0` or higher

### Installation & Setup

1. **Clone or navigate to the repository:**
   ```bash
   git clone https://github.com/rajankumarsinghcy24-creator/DevPulse-Week1-Task1-Developer-Productivity-Dashboard.git
   cd DevPulse-Week1-Task1-Developer-Productivity-Dashboard
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

5. **Build for production preview:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📋 Task Requirements Mapping Matrix

| Requirement | Implementation in DevPulse | Status |
| :--- | :--- | :---: |
| **Dashboard Overview** | Overview view featuring `WelcomeHeader`, 4 `StatsCards`, `ProductivityOverview`, `RecentActivity`, `ProjectCard` grid, and `TaskCard` backlog | ✅ Completed |
| **Project Management UI** | Dedicated `Projects.jsx` view with reusable `ProjectCard` components, category tags, tech stack badges, and team member avatars | ✅ Completed |
| **Task Management UI** | Dedicated `Tasks.jsx` view with interactive `TaskCard` components, due dates, project affiliations, and assignee indicators | ✅ Completed |
| **Task Status & Priority** | Dynamic status cycling (`Todo ➔ In Progress ➔ Done`) and color-coded priority levels (`Low`, `Medium`, `High`) | ✅ Completed |
| **Search Functionality** | Client-side search filtering across project titles, descriptions, task names, and tags | ✅ Completed |
| **Filter Functionality** | Status pills (`All`, `Planning`, `In Progress`, `Completed`), task status filters, and priority filters | ✅ Completed |
| **Add Project / Add Task** | Modal dialogues (`NewProjectModal`, `NewTaskModal`) updating state with instant feedback | ✅ Completed |
| **Progress Indicators** | Visual `ProgressBar` with dynamic threshold coloring (`>=80%` Emerald, `>=40%` Sky, `<40%` Amber) and ARIA support | ✅ Completed |
| **Recent Activity** | Chronological activity feed reflecting state mutations (task completion, additions, updates) | ✅ Completed |
| **Loading States** | Pulsing skeleton loaders (`LoadingState.jsx`) replicating cards and metric blocks; testable via **"Simulate Load"** | ✅ Completed |
| **Empty States** | Reusable `EmptyState.jsx` with contextual iconography and an active **"Reset Filters"** action button | ✅ Completed |
| **Error States** | Reusable `ErrorState.jsx` with descriptive alert message and functional **"Retry Connection"** button | ✅ Completed |
| **Responsive Layout** | Mobile navigation drawer (`MobileNavigation.jsx`), responsive CSS grids tested across mobile (390px), tablet (768px), and desktop (1440px) | ✅ Completed |
| **Reusable Architecture** | Clean atomic components in `src/components/common/`, `src/components/dashboard/`, and `src/components/layout/` | ✅ Completed |
| **Mock Frontend Data** | Structured mock database in `src/data/mockData.js` representing realistic engineering workflows | ✅ Completed |
| **Backend-Ready Design** | Centralized `DashboardContext.jsx` and `useDashboardData.js` ready for REST API service swapping in Task 2 | ✅ Completed |

---

## 🔮 Backend Integration Roadmap (Task 2 & Beyond)

DevPulse was intentionally designed with a decoupled frontend architecture to prepare for upcoming internship tasks:

1. **REST API Integration (Task 2)**:
   - Replace the local mock data mutations in `src/context/DashboardContext.jsx` and `src/hooks/useDashboardData.js` with asynchronous HTTP service calls (`GET /api/projects`, `POST /api/tasks`, `PATCH /api/tasks/:id/status`).
2. **Backend Services (Task 2)**:
   - Build a Node.js / Express backend providing endpoints that adhere to the established schemas in `src/data/mockData.js`.
3. **Database Integration (Task 3)**:
   - Store relational project and task entities in PostgreSQL / MongoDB, preserving the foreign key link between `projects.id` and `tasks.projectId`.
4. **User Authentication**:
   - Integrate JWT or session-based authentication to connect the user profile header and sidebar widget to authenticated sessions.

---

## 👨‍💻 Author

**Rajan Kumar Singh**  
Full Stack Development Intern  
Innovation Hacks Internship Program  