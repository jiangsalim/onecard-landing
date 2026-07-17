"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DemoVideo() {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  return (
    <section
      ref={ref}
      id="demo"
      className="relative bg-white dark:bg-navy py-24 lg:py-32 overflow-hidden"
    >
      <motion.div style={{ y }} className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal/5 border border-teal/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-teal rounded-full" />
            <span className="text-teal text-sm font-medium tracking-wide">
              See It In Action
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6"
          >
            Watch <span className="text-teal">OneCard</span> Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            See how staff scan cards, check fees, and track attendance — all in seconds.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-navy-light"
        >
          {/* Placeholder / Thumbnail */}
          {!isPlaying && (
            <div
              className="relative bg-navy-light aspect-video flex items-center justify-center cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
              
              {/* Play Button */}
              <div className="relative z-10 w-20 h-20 bg-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal/30">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <p className="absolute bottom-6 text-gray-400 text-sm">
                Click to watch demo
              </p>
            </div>
          )}

          {/* Video Embed (replace with actual video URL) */}
          {isPlaying && (
            <div className="aspect-video bg-navy-dark">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-teal/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625h1.5a1.125 1.125 0 001.125-1.125m0 0V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 0h-1.5A1.125 1.125 0 0118 14.625M18 5.625v.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-.75M18 5.625h1.5A1.125 1.125 0 0120.625 6.75M18 5.625V3.375M20.625 6.75h.75a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-.75m-12.75 0h.75a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H6.75m0 0V3.375m0 0H3.375M6.75 9.75v-3m0 0V3.375M6.75 9.75h.75a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-.75m12.75 0h-.75a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h.75m0 0v3m0-3V3.375" />
                  </svg>
                  <p className="text-lg font-medium">Demo Video</p>
                  <p className="text-sm mt-1">
                    Replace with actual OneCard screen recording
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload to YouTube or Vimeo and embed here
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-gray-500 dark:text-gray-500 text-sm mt-4"
        >
          OneCard scanning demonstration at Jinja Senior Secondary School
        </motion.p>
      </motion.div>
    </section>
  );
}