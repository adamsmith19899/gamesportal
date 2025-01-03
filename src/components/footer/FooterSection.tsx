import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-900 font-semibold relative inline-block">
        {title}
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-400/50 to-transparent" />
      </h3>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  );
}