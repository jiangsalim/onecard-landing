"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What happens if a student loses their card?",
    answer:
      "The school admin can instantly deactivate the lost card and issue a replacement. Since all data is stored in the cloud, no information is lost — just print a new PVC card with the same QR code.",
  },
  {
    question: "Does OneCard work without internet?",
    answer:
      "Yes! Scanning works offline. The system stores scans locally and syncs automatically when the internet connection returns. No disruption to school operations.",
  },
  {
    question: "How do parents check fee balances?",
    answer:
      "Parents visit the school website and enter their unique payment code — no login required. They can instantly see the current fee balance for their child.",
  },
  {
    question: "Is student data secure?",
    answer:
      "Absolutely. OneCard uses role-based access control — each staff member only sees what they need. Data is encrypted in transit and at rest. The system is cloud-hosted with regular backups.",
  },
  {
    question: "What devices do we need to scan cards?",
    answer:
      "Any device with a camera works — smartphones, tablets, or webcams. No special scanners or hardware required. The system is fully browser-based with no app to install.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      id="faq"
      className="relative bg-gray-light py-24 lg:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0]"
        style={{
          backgroundImage:
            "linear-gradient(#0A1F3F 1px, transparent 1px), linear-gradient(90deg, #0A1F3F 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y }} className="container-custom relative z-10 max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-teal rounded-full" />
            <span className="text-teal text-sm font-medium tracking-wide">
              Got Questions?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-navy"
          >
            Frequently Asked <span className="text-teal">Questions</span>
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-navy pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 flex-shrink-0 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
