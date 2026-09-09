import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = ''
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-0.5 font-medium',
    lg: 'text-sm px-3 py-1 font-semibold'
  };

  const variantStyles = {
    // Project / Task Statuses
    'in progress': 'bg-teal-50 text-[#1D7E73] border border-teal-200',
    'done': 'bg-emerald-50 text-[#0F8B6D] border border-emerald-200',
    'completed': 'bg-emerald-50 text-[#0F8B6D] border border-emerald-200',
    'near completion': 'bg-emerald-50 text-[#0F8B6D] border border-emerald-200',
    'todo': 'bg-stone-100 text-[#535D6C] border border-stone-200',
    'planning': 'bg-amber-50 text-[#B45309] border border-amber-200',

    // Priorities
    'high': 'bg-rose-50 text-[#C94C4C] border border-rose-200',
    'medium': 'bg-amber-50 text-[#B45309] border border-amber-200',
    'low': 'bg-stone-100 text-[#667085] border border-stone-200',

    // Generic
    'default': 'bg-stone-100 text-stone-700 border border-stone-200',
    'primary': 'bg-emerald-50 text-[#0F8B6D] border border-emerald-200',
    'success': 'bg-emerald-50 text-[#0F8B6D] border border-emerald-200',
  };

  const dotColors = {
    'in progress': 'bg-[#2A9D8F]',
    'done': 'bg-[#0F8B6D]',
    'completed': 'bg-[#0F8B6D]',
    'near completion': 'bg-[#0F8B6D]',
    'todo': 'bg-stone-400',
    'planning': 'bg-amber-500',
    'high': 'bg-[#C94C4C]',
    'medium': 'bg-[#D97706]',
    'low': 'bg-stone-400',
    'default': 'bg-stone-400',
    'primary': 'bg-[#0F8B6D]',
    'success': 'bg-[#0F8B6D]'
  };

  const key = String(variant).toLowerCase();
  const currentVariant = variantStyles[key] || variantStyles.default;
  const currentDot = dotColors[key] || 'bg-stone-400';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full capitalize whitespace-nowrap ${sizeStyles[size]} ${currentVariant} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${currentDot}`} />}
      {children}
    </span>
  );
};

export default Badge;
