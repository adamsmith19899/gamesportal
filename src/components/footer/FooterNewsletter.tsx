import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function FooterNewsletter() {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-900 font-semibold">Stay Updated</h3>
      <p className="text-gray-600">Subscribe to our newsletter for new games and updates.</p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Subscribe</span>
        </motion.button>
      </form>
    </div>
  );
}