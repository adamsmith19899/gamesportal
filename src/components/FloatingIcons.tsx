import React from 'react';
import { MouseFollower } from './icons/MouseFollower';
import { BackgroundIcon } from './icons/BackgroundIcon';
import { generateIconConfig } from './icons/config';

export function FloatingIcons() {
  const floatingIcons = Array.from({ length: 24 }, (_, i) => generateIconConfig(i));

  return (
    <>
      <MouseFollower />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {floatingIcons.map((iconConfig, index) => (
          <BackgroundIcon key={index} {...iconConfig} />
        ))}
      </div>
    </>
  );
}