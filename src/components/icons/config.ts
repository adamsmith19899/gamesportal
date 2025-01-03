import { Brain, Book, PenTool, Lightbulb, Sparkles } from 'lucide-react';

export const icons = [Brain, Book, PenTool, Lightbulb, Sparkles];
export const colors = ['indigo-600', 'purple-600', 'pink-600', 'blue-600', 'cyan-600'];

export const generateIconConfig = (index: number) => ({
  Icon: icons[index % icons.length],
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${20 + Math.random() * 10}s`,
  color: colors[Math.floor(Math.random() * colors.length)]
});