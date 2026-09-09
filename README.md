# DevPulse — Developer Productivity Dashboard

![DevPulse Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80)

> A production-grade, responsive **Developer Productivity Dashboard** built for **Full Stack Development Internship — Week 1 / Task 1**.

DevPulse provides software engineering teams and developers with real-time visibility into active project progress, sprint task velocity, workload distribution, and code streaks. Designed with a clean SaaS aesthetic, modular component architecture, and responsive layouts across desktop, tablet, and mobile devices.

---

## 🚀 Overview & Demo Capabilities

DevPulse is structured as an enterprise-grade developer productivity interface. In accordance with Week 1 requirements, this application is built as a **frontend-only** system utilizing normalized local data structures and state providers, allowing an effortless transition to a REST API in Week 2.

### Live Demo Controls (Built-in for Evaluators)
- **⚡ Interactive Search**: Live filtering across project names, descriptions, task titles, and tags with zero latency.
- **🔄 Skeleton Loading Simulation**: Click **"Simulate Load"** in the top navbar or mobile menu to preview the skeleton loaders.
- **⚠️ Error State & Functional Retry**: Click **"Simulate Error"** to trigger the simulated network failure state; click **"Retry Connection"** to recover live data.
- **📊 Realtime Task Status Cycling**: Click the status button or badge on any task to transition it across `Todo ➔ In Progress ➔ Done`, automatically updating project completion percentages and sprint velocity.
- **➕ Project & Task Creation Modals**: Add new initiatives and sprint backlog items with custom priority and tags directly in local state.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core UI library for component-driven development |
| **Vite 8** | Modern build tool and ultra-fast dev server |
| **JavaScript (ESNext)** | Clean logic and state pipelines |
| **Tailwind CSS v4** | Modern utility-first styling with Warm Light + Charcoal + Emerald aesthetic |
| **React Router v7** | Client-side routing with deep link navigation |
| **Lucide React** | Consistent, accessible icon system |

---

## 📂 Project Structure

```
InnovationHack/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx             # Reusable status & priority badges with accessible dots
│   │   │   ├── Button.jsx            # Reusable button with variants, sizes & loading states
│   │   │   └── Modal.jsx             # Accessible dialog with ESC dismissal & backdrop blur
│   │   ├── dashboard/
│   │   │   ├── NewProjectModal.jsx   # Project creation form modal
│   │   │   ├── NewTaskModal.jsx      # Task creation form modal
│   │   │   ├── ProductivityOverview.jsx # Velocity chart & streak indicator
│   │   │   ├── ProgressBar.jsx       # Visual progress bar with color thresholds
│   │   │   ├── ProjectCard.jsx       # Reusable project card with avatars & progress
│   │   │   ├── RecentActivity.jsx    # Realtime audit log stream
│   │   │   ├── StatsCard.jsx         # 4 KPI statistic cards with trend markers
│   │   │   ├── TaskCard.jsx          # Interactive task item with status cycling
│   │   │   └── WelcomeHeader.jsx     # Greeting header with streak highlight
│   │   ├── filters/
│   │   │   ├── FilterControls.jsx    # Status, priority, and project filter pills
│   │   │   └── SearchBar.jsx         # Debounced real-time search input
│   │   ├── layout/
│   │   │   ├── Layout.jsx            # Master shell linking sidebar, navbar & outlet
│   │   │   ├── MobileNavigation.jsx  # Touch-friendly slide-over drawer
│   │   │   ├── Navbar.jsx            # Header with search, notifications & demo triggers
│   │   │   └── Sidebar.jsx           # Fixed desktop navigation & user profile widget
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
│   │   ├── Dashboard.jsx             # Primary landing view
│   │   ├── Projects.jsx              # Dedicated projects catalog & filters
│   │   ├── Tasks.jsx                 # Sprint task board & status transition engine
│   │   └── Profile.jsx               # Developer profile, stats, and verified skills
│   ├── App.css
│   ├── App.jsx                       # Route tree setup
│   ├── index.css                     # Tailwind v4 configuration & scrollbars
│   └── main.jsx                      # App entrypoint
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ How to Run Locally

### Prerequisites
- **Node.js**: v18.0.0 or later (v24.x recommended)
- **npm**: v9.0.0 or later

### Installation Steps

1. Clone or open the repository folder:
```bash
cd InnovationHack
```

2. Install project dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

5. Build for production preview:
```bash
npm run build
npm run preview
```

---

## 📋 Task Requirements Mapping Matrix

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Responsive Dashboard** | Landing view featuring `WelcomeHeader`, 4 `StatsCards`, `ProductivityOverview`, `RecentActivity`, `ProjectCard` grid, and `TaskCard` backlog | ✅ Completed |
| **Navigation System** | Sticky desktop `Sidebar` + responsive `MobileNavigation` drawer with active route states, keyboard focus, and badges | ✅ Completed |
| **User / Profile Section** | Bottom sidebar profile widget, top header avatar pill, and full `Profile.jsx` page with developer metrics and skill tags | ✅ Completed |
| **Project & Task Cards** | Reusable `ProjectCard` with progress bar, team avatars, tags, and `TaskCard` with priority badges and interactive status toggle | ✅ Completed |
| **Progress Indicators** | Visual `ProgressBar` with dynamic thresholds (`>=80%` Emerald, `>=40%` Sky, `<40%` Amber) and ARIA attributes | ✅ Completed |
| **Search Functionality** | Instant client-side search filtering across project names, descriptions, task titles, and tags | ✅ Completed |
| **Filter Functionality** | Status filters (`Planning`, `In Progress`, `Completed`), task filters (`Todo`, `In Progress`, `Done`), and priority (`Low`, `Medium`, `High`) | ✅ Completed |
| **Responsive Layout** | Adaptive CSS grid wrapping tested across desktop (1440px), laptop (1024px), tablet (768px), and mobile (375px) with zero horizontal overflow | ✅ Completed |
| **Loading States** | Pulsing skeleton loaders (`LoadingState.jsx`) replicating card structures; interactive **"Simulate Load"** trigger in header | ✅ Completed |
| **Empty States** | Reusable `EmptyState.jsx` component with contextual icons, clear descriptions, and a functional "Reset Filters" action button | ✅ Completed |
| **Error States** | Reusable `ErrorState.jsx` component with error banner, descriptive message, and an active **"Retry Connection"** button | ✅ Completed |
| **Clean Architecture** | Separated UI components, custom hooks, and centralized context ready for API swapping | ✅ Completed |

---

## 🔮 Future Integration Blueprint (Task 2 & Beyond)

This application was intentionally architected to decouple the presentation layer from the data source:

1. **REST API Swap**:
   - `src/hooks/useDashboardData.js` and `src/context/DashboardContext.jsx` can seamlessly replace the local array mutations with standard `fetch()` or `axios` calls (`GET /api/projects`, `POST /api/tasks`, `PATCH /api/tasks/:id/status`).
2. **Backend Services (Task 2)**:
   - Node.js / Express or Fastify backend can serve the endpoints adhering to the exact schemas established in `src/data/mockData.js`.
3. **Database Integration (Task 3)**:
   - PostgreSQL or MongoDB schemas mirror the existing foreign-key relationship between `projects.id` and `tasks.projectId`.
4. **Authentication**:
   - The user session widget in `Sidebar.jsx` and `Profile.jsx` is structured for JWT / OAuth token consumption.

---

## 🛡️ License & Academic Integrity

Created for the **Full Stack Development Internship (Week 1 / Task 1)**.
No proprietary credentials, API keys, or secrets are committed.

## 👨‍💻 Author
Rajan Kumar Singh
B.Tech Computer Science and Engineering
RV College of Engineering, Bengaluru