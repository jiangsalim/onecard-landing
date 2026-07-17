"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
    title: "Student Gets a Card",
    description:
      "Each student receives a permanent PVC card with a unique QR code and photo — color-coded, durable, and lasts until graduation.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM11.25 6.75h.75v.75h-.75v-.75zM15.75 6.75h.75v.75h-.75v-.75zM6.75 12h.75v.75h-.75V12zM11.25 12h.75v.75h-.75V12zM15.75 12h.75v.75h-.75V12zM6.75 17.25h.75v.75h-.75v-.75zM11.25 17.25h.75v.75h-.75v-.75zM15.75 17.25h.75v.75h-.75v-.75zM4.5 21.75h15a2.25 2.25 0 002.25-2.25V4.5A2.25 2.25 0 0019.5 2.25h-15A2.25 2.25 0 002.25 4.5v15A2.25 2.25 0 004.5 21.75z" />
      </svg>
    ),
    title: "Staff Scans the QR Code",
    description:
      "Using any device with a camera — phone, tablet, or webcam. Works even offline. No special hardware or app install needed.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
      </svg>
    ),
    title: "System Processes Instantly",
    description:
      "In 2 seconds: fee balance checked, attendance marked, meal access verified, movement logged — all updated in real time.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Reports & Dashboards Update",
    description:
      "Teachers see dashboards. Bursar gets fee reports. Daily automated emails at 5 PM. Everyone has the data they need.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0]"
        style={{
          backgroundImage:
            "linear-gradient(#0A1F3F 1px, transparent 1px), linear-gradient(90deg, #0A1F3F 1px, transparent 1px)",
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
            className="inline-flex items-center gap-2 bg-teal/5 border border-teal/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-teal rounded-full" />
            <span className="text-teal text-sm font-medium tracking-wide">
              Simple & Fast
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            How <span className="text-teal">OneCard</span> Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            From card to classroom — four simple steps that replace paper,
            eliminate fraud, and give your school total visibility.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="text-6xl lg:text-7xl font-heading font-bold text-gray-light/50 mb-4 lg:mb-6 select-none">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-16 h-16 bg-teal/10 text-teal rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-teal group-hover:text-white transition-all duration-300 relative z-10">
                  {step.icon}
                </div>

                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://onecard-jinja-sss.onrender.com/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg"
          >
            Try It Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
