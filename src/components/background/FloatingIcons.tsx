import React from 'react';
import { FloatingIcon } from './FloatingIcon';
import { backgroundIcons } from './icons';

export function FloatingIcons() {
  const iconInstances = React.useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const { Icon, color } = backgroundIcons[i % backgroundIcons.length];
      return {
        Icon,
        color,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        x: Math.random() * 90 + 5, // Keep icons within 5-95% of the screen
        y: Math.random() * 90 + 5,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {iconInstances.map((props, i) => (
        <FloatingIcon key={i} {...props} />
      ))}
    </div>
  );
}