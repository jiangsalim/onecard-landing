"use client";

import { motion } from "framer-motion";

export default function DeveloperBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[85]"
    >
      <a
        href="https://herman-software-website.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/80 dark:bg-navy-light/80 backdrop-blur-sm border border-gray-200 dark:border-navy-light rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          Powered by
        </span>
        <span className="text-xs font-semibold text-navy dark:text-white">
          Herman Software
        </span>
        <svg className="w-3 h-3 text-teal group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </motion.div>
  );
}