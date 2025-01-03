import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BackgroundIconProps {
  Icon: LucideIcon;
  top: string;
  left: string;
  delay: string;
  duration: string;
  color: string;
}

export function BackgroundIcon({ Icon, top, left, delay, duration, color }: BackgroundIconProps) {
  return (
    <div
      className={`absolute opacity-[0.05] text-${color} animate-float`}
      style={{
        top,
        left,
        animationDelay: delay,
        animationDuration: duration,
      }}
    >
      <Icon size={48} />
    </div>
  );
}