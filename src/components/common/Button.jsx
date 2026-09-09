import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  type = 'button',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F8B6D] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-[#0F8B6D] hover:bg-[#0B7057] text-white font-semibold shadow-xs hover:shadow-sm transition-colors',
    secondary: 'bg-white hover:bg-stone-50 text-[#1F2933] border border-[#D9D9D2] shadow-xs hover:border-stone-400 transition-colors',
    outline: 'border border-[#D9D9D2] hover:border-stone-400 bg-transparent text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-100/70',
    ghost: 'text-[#535D6C] hover:text-[#1F2933] hover:bg-stone-100/80',
    danger: 'bg-rose-50 hover:bg-rose-100 text-[#C94C4C] border border-rose-200',
    subtle: 'bg-[#0F8B6D]/10 hover:bg-[#0F8B6D]/20 text-[#0F8B6D] border border-[#0F8B6D]/25 font-semibold',
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
