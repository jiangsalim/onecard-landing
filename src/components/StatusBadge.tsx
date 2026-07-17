"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function StatusBadge() {
  const [status, setStatus] = useState<"online" | "checking" | "offline">("checking");

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch(
          "https://onecard-jinja-sss.onrender.com/login/",
          {
            method: "HEAD",
            mode: "no-cors",
          }
        );
        // If we get any response, system is reachable
        setStatus("online");
      } catch {
        setStatus("offline");
      }
    };

    checkStatus();

    // Re-check every 60 seconds
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const statusConfig = {
    online: {
      color: "bg-green-500",
      text: "System Online",
      dotColor: "bg-green-400",
      textColor: "text-green-400",
    },
    checking: {
      color: "bg-yellow-500",
      text: "Checking...",
      dotColor: "bg-yellow-400",
      textColor: "text-yellow-400",
    },
    offline: {
      color: "bg-red-500",
      text: "System Offline",
      dotColor: "bg-red-400",
      textColor: "text-red-400",
    },
  };

  const current = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="fixed bottom-6 left-6 z-[90]"
    >
      <div className="flex items-center gap-2 bg-white dark:bg-navy-light border border-gray-200 dark:border-navy-light rounded-full px-4 py-2 shadow-lg">
        <span className="relative flex h-2.5 w-2.5">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${current.dotColor} opacity-75`}
          />
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${current.color}`}
          />
        </span>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
          {current.text}
        </span>
      </div>
    </motion.div>
  );
}