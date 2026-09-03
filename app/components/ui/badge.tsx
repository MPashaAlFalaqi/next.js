import React from 'react';

type BadgeVariant = 'purple' | 'blue' | 'green' | 'yellow' | 'gray' | 'red';
type BadgeSize = 'default' | 'sm' | 'xs';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  purple: 'bg-[#ede9fe] text-[#7c3aed]',
  blue: 'bg-[#dbeafe] text-[#2563eb]',
  green: 'bg-[#d1fae5] text-[#059669]',
  yellow: 'bg-[#fef3c7] text-[#d97706]',
  gray: 'bg-[#f3f4f6] text-[#4b5563]',
  red: 'bg-[#fee2e2] text-[#dc2626]',
};

const sizeStyles: Record<BadgeSize, string> = {
  default: 'text-xs px-2.5 py-1',
  sm: 'text-xs px-2 py-0.5',
  xs: 'text-[10px] px-1.5 py-0.5',
};

export function Badge({
  children,
  variant = 'gray',
  size = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}