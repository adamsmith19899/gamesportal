import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Benefit({ icon: Icon, title, description }: BenefitProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="bg-indigo-100 p-3 rounded-full mb-4">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}