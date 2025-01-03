import React from 'react';
import { Game } from '../../types/game';
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';

interface GameSocialProps {
  game: Game;
}

export function GameSocial({ game }: GameSocialProps) {
  const shareUrl = window.location.href;
  const shareText = `Play ${game.title} on Word Puzzle Games!`;

  const shareButtons = [
    {
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
      color: 'hover:text-blue-400',
    },
    {
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: 'hover:text-blue-600',
    },
    {
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      color: 'hover:text-blue-700',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Share This Game</h3>
      <div className="flex justify-around">
        {shareButtons.map(({ Icon, href, color }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-500 ${color} transition-colors p-2`}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="text-gray-500 hover:text-indigo-600 transition-colors p-2"
          title="Copy link"
        >
          <Link2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}