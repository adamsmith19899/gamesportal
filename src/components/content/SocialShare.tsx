import React from 'react';
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const shareButtons = [
    {
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      color: 'hover:text-blue-400',
    },
    {
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      color: 'hover:text-blue-600',
    },
    {
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      color: 'hover:text-blue-700',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex gap-4">
      {shareButtons.map(({ Icon, href, color }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-500 ${color} transition-colors`}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="text-gray-500 hover:text-indigo-600 transition-colors"
        title="Copy link"
      >
        <Link2 className="w-5 h-5" />
      </button>
    </div>
  );
}