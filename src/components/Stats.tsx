"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Count-up hook
function useCountUp(end: number, duration: number = 2, startCounting: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!startCounting) {
      setCount(0); // Reset to 0 when not counting
      return;
    }

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, startCounting]);

  return count;
}

function AnimatedStat({
  endValue,
  suffix,
  label,
  startCounting,
}: {
  endValue: number;
  suffix: string;
  label: string;
  startCounting: boolean;
}) {
  const count = useCountUp(endValue, 2.5, startCounting);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-teal/80 text-sm sm:text-base font-medium">{label}</div>
    </div>
  );
}

const stats = [
  { value: 29560, suffix: "+", label: "Students Managed" },
  { value: 250, suffix: "+", label: "Student Photos Stored" },
  { value: 2, suffix: " sec", label: "Fee Verification Time" },
  { value: 5, suffix: "", label: "Role-Based Access Levels" },
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cost Savings",
    description: "Eliminated monthly card printing costs — one PVC card lasts the entire school life.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Fraud Prevention",
    description: "Meal double-serving blocked. Secure role-based access prevents unauthorized actions.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Real-Time Visibility",
    description: "Daily automated reports to all staff. Full picture of attendance, movement, and fees.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Works Anywhere",
    description: "Fully browser-based — no app install. Works on phones, tablets, and computers, even offline.",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  // Start counting when section comes into view, reset when it leaves
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section is in view — start counting
          setStartCounting(true);
        } else {
          // Section scrolled away — reset
          setStartCounting(false);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="stats" className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0]"
        style={{
          backgroundImage:
            "linear-gradient(#00C2BA 1px, transparent 1px), linear-gradient(90deg, #00C2BA 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y }} className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse-soft" />
            <span className="text-teal text-sm font-medium tracking-wide">
              Trusted at Jinja SSS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Real Impact,{" "}
            <span className="text-teal">Real Numbers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            OneCard is actively managing over 29,000 students at Jinja Senior
            Secondary School. Here&apos;s what that looks like.
          </motion.p>
        </div>

        {/* Big Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 pb-16 border-b border-white/10"
        >
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              endValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              startCounting={startCounting}
            />
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-14 h-14 bg-teal/10 text-teal rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal group-hover:text-navy transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}