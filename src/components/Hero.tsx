"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

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
      // Ease out cubic for smooth deceleration
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

// Animated stat item
function StatItem({
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
      <div className="text-2xl sm:text-3xl font-heading font-bold text-teal">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-gray-medium mt-1">{label}</div>
    </div>
  );
}

export default function OneCardHero() {
  const ref = useRef(null);
  const [startCounting, setStartCounting] = useState(false);
  const [hasScrolledAway, setHasScrolledAway] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Track when hero is in view to trigger recount
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Hero is back in view — reset and recount
          setHasScrolledAway(false);
          const timer = setTimeout(() => {
            setStartCounting(true);
          }, 300);
          return () => clearTimeout(timer);
        } else {
          // Hero scrolled away — mark and reset
          setHasScrolledAway(true);
          setStartCounting(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Initial count on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCounting(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/onecard-hero.jpg')",
          }}
        />
      </motion.div>

      {/* Overlay Gradient */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute inset-0 z-[1] bg-hero-gradient"
      />

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity: heroOpacity }}
        className="container-custom relative z-10 text-center text-white pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 bg-teal rounded-full animate-pulse-soft" />
          <span className="text-teal text-sm font-medium tracking-wide">
            Powering Jinja Senior Secondary School
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
        >
          OneCard —{" "}
          <span className="text-gradient">Smarter School</span> Management
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-medium text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          One permanent card. Instant fee checks. Automated attendance. Total
          control — all from any device, anywhere.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="#features" className="btn-primary text-lg">
            See How It Works
          </Link>
          <a
            href="https://onecard-jinja-sss.onrender.com/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light text-lg"
          >
            Login to Your School
          </a>
        </motion.div>

        {/* Quick Stats Row with Count-Up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 pt-12 border-t border-white/10"
        >
          <StatItem
            endValue={29560}
            suffix="+"
            label="Students Managed"
            startCounting={startCounting}
          />
          <StatItem
            endValue={5}
            suffix=""
            label="Staff Roles"
            startCounting={startCounting}
          />
          <StatItem
            endValue={24}
            suffix="/7"
            label="Cloud Access"
            startCounting={startCounting}
          />
          <StatItem
            endValue={250}
            suffix="+"
            label="Student Photos"
            startCounting={startCounting}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-1.5 bg-teal rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}