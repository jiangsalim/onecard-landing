"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const metrics = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Lightning Fast",
    value: "< 1.5s",
    description: "Page load time on mobile and desktop",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Accessible",
    value: "WCAG AA",
    description: "Accessibility compliance rating",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Responsive",
    value: "100%",
    description: "Works on all screen sizes and devices",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Secure",
    value: "HTTPS",
    description: "Encrypted connection with SSL certificate",
  },
];

export default function PerformanceMetrics() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  return (
    <section
      ref={ref}
      className="relative bg-gray-light dark:bg-navy-dark py-16 lg:py-20 overflow-hidden"
    >
      <motion.div style={{ y }} className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-navy-light border border-gray-200 dark:border-navy-light rounded-xl p-5 lg:p-6 text-center hover:border-teal/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-teal/10 text-teal rounded-lg flex items-center justify-center mx-auto mb-3">
                {metric.icon}
              </div>
              <div className="text-xl lg:text-2xl font-heading font-bold text-navy dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                {metric.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}