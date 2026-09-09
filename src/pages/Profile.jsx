import React from 'react';
import {
  Mail,
  MapPin,
  Building,
  Calendar,
  GitPullRequest,
  CheckCircle2,
  FolderKanban,
  Flame,
  Code,
  ShieldCheck
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';
import Badge from '../components/common/Badge';

export const Profile = () => {
  const { user } = useDashboard();

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header Banner & Bio Card */}
      <div className="bg-white border border-[#E7E7E0] rounded-2xl overflow-hidden shadow-xs">
        {/* Cover Graphic Accent - Warm Linen & Sage */}
        <div className="h-32 bg-gradient-to-r from-stone-200 via-[#EDEDE6] to-emerald-100/50 border-b border-[#E7E7E0] relative">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0F8B6D_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        {/* Profile Info Row */}
        <div className="p-6 sm:p-8 -mt-16 sm:-mt-20 relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-white shadow-md border border-[#D9D9D2]"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0F8B6D] ring-4 ring-white" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold text-[#1F2933]">
                  {user.name}
                </h1>
                <Badge variant="in progress" size="sm">
                  Active Intern
                </Badge>
              </div>
              <p className="text-sm font-semibold text-[#0F8B6D]">
                {user.role}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#667085] flex-wrap pt-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  {user.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  {user.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-stone-400" />
                  {user.department}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAFBF9] border border-[#E7E7E0] shrink-0 self-stretch sm:self-auto justify-center shadow-2xs">
            <Calendar className="w-4 h-4 text-[#0F8B6D]" />
            <span className="text-xs text-[#535D6C] font-semibold">
              Joined {user.joinedDate}
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="px-6 sm:px-8 pb-6 border-t border-[#E7E7E0] pt-4">
          <p className="text-xs font-semibold text-[#8C95A6] uppercase tracking-wider mb-1.5">
            About Developer
          </p>
          <p className="text-sm text-[#535D6C] leading-relaxed max-w-3xl">
            {user.bio}
          </p>
        </div>
      </div>

      {/* Developer Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-[#E7E7E0] rounded-2xl p-5 text-center shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#0F8B6D] mx-auto mb-3 flex items-center justify-center">
            <FolderKanban className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold font-mono text-[#1F2933]">{user.stats.projectsCompleted}</p>
          <p className="text-xs text-[#667085] mt-1 font-medium">Projects Completed</p>
        </div>

        <div className="bg-white border border-[#E7E7E0] rounded-2xl p-5 text-center shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-[#1D7E73] mx-auto mb-3 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold font-mono text-[#1D7E73]">{user.stats.tasksResolved}</p>
          <p className="text-xs text-[#667085] mt-1 font-medium">Tasks Resolved</p>
        </div>

        <div className="bg-white border border-[#E7E7E0] rounded-2xl p-5 text-center shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B45309] mx-auto mb-3 flex items-center justify-center">
            <GitPullRequest className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold font-mono text-[#B45309]">{user.stats.pullRequestsMerged}</p>
          <p className="text-xs text-[#667085] mt-1 font-medium">PRs Merged</p>
        </div>

        <div className="bg-white border border-[#E7E7E0] rounded-2xl p-5 text-center shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#0F8B6D] mx-auto mb-3 flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold font-mono text-[#0F8B6D]">{user.stats.streakDays} Days</p>
          <p className="text-xs text-[#667085] mt-1 font-medium">Active Code Streak</p>
        </div>
      </div>

      {/* Skills & Competencies */}
      <div className="bg-white border border-[#E7E7E0] rounded-2xl p-6 sm:p-7 shadow-xs">
        <h3 className="text-base font-bold text-[#1F2933] flex items-center gap-2 mb-4">
          <Code className="w-4 h-4 text-[#0F8B6D]" />
          Technical Stack & Verified Competencies
        </h3>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-xl bg-[#FAFBF9] border border-[#E7E7E0] text-xs font-mono font-medium text-[#1F2933] hover:border-[#0F8B6D] hover:text-[#0F8B6D] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Internship Evaluation Readiness Note */}
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3 shadow-2xs">
        <ShieldCheck className="w-5 h-5 text-[#0F8B6D] shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed text-[#1F2933]">
          <p className="font-semibold text-[#0F8B6D] mb-0.5">
            Full Stack Internship — Week 1 Task Submission
          </p>
          <p className="text-[#535D6C]">
            This frontend is architected with modular React components, state-driven search/filter pipelines, and simulated loading/error/empty states. Ready for Week 2 REST API backend replacement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
