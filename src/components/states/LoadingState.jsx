import React from 'react';

export const SkeletonBox = ({ className = '' }) => (
  <div className={`bg-stone-200/80 rounded-lg animate-pulse ${className}`} />
);

export const LoadingState = ({ variant = 'full', count = 3 }) => {
  if (variant === 'stats') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" aria-label="Loading statistics">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white border border-[#E7E7E0] rounded-2xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <SkeletonBox className="h-4 w-24" />
              <SkeletonBox className="h-8 w-8 rounded-xl" />
            </div>
            <SkeletonBox className="h-8 w-20" />
            <SkeletonBox className="h-3 w-32" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'projects') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" aria-label="Loading projects">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-white border border-[#E7E7E0] rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <SkeletonBox className="h-5 w-36" />
              <SkeletonBox className="h-5 w-20 rounded-full" />
            </div>
            <SkeletonBox className="h-10 w-full" />
            <div className="space-y-2 pt-2">
              <div className="flex justify-between">
                <SkeletonBox className="h-3 w-16" />
                <SkeletonBox className="h-3 w-10" />
              </div>
              <SkeletonBox className="h-2 w-full rounded-full" />
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#E7E7E0]">
              <SkeletonBox className="h-6 w-20" />
              <SkeletonBox className="h-7 w-24 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'tasks') {
    return (
      <div className="space-y-3" aria-label="Loading tasks">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-white border border-[#E7E7E0] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="space-y-2 flex-1">
              <SkeletonBox className="h-5 w-48" />
              <div className="flex items-center gap-2">
                <SkeletonBox className="h-3 w-24" />
                <SkeletonBox className="h-4 w-14 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SkeletonBox className="h-6 w-20 rounded-full" />
              <SkeletonBox className="h-8 w-24 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Full dashboard skeleton
  return (
    <div className="space-y-8 animate-pulse" aria-label="Loading dashboard data">
      <div className="flex flex-col sm:flex-row justify-between gap-4 pb-2 border-b border-[#E7E7E0]">
        <div className="space-y-2">
          <SkeletonBox className="h-7 w-64" />
          <SkeletonBox className="h-4 w-80" />
        </div>
        <SkeletonBox className="h-9 w-32 rounded-xl" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white border border-[#E7E7E0] rounded-2xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <SkeletonBox className="h-4 w-24" />
              <SkeletonBox className="h-8 w-8 rounded-xl" />
            </div>
            <SkeletonBox className="h-8 w-20" />
            <SkeletonBox className="h-3 w-28" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#E7E7E0] rounded-2xl p-6 space-y-4 shadow-xs">
          <SkeletonBox className="h-6 w-44" />
          <SkeletonBox className="h-44 w-full rounded-xl" />
        </div>
        <div className="bg-white border border-[#E7E7E0] rounded-2xl p-6 space-y-4 shadow-xs">
          <SkeletonBox className="h-6 w-36" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-3 items-center">
                <SkeletonBox className="h-8 w-8 rounded-full shrink-0" />
                <div className="flex-1 space-y-1">
                  <SkeletonBox className="h-4 w-full" />
                  <SkeletonBox className="h-3 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
