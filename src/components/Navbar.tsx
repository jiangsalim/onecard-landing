"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Stats", href: "#stats" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Roles", href: "#roles" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Small delay to let menu close animation start
    setTimeout(() => {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#")}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center font-bold text-navy text-sm">
              OC
            </div>
            <span className="text-white font-serif font-bold text-xl">
              OneCard
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`transition-colors duration-200 text-sm font-medium relative whitespace-nowrap ${
                    isActive
                      ? "text-teal"
                      : "text-gray-300 hover:text-teal"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="https://onecard-jinja-sss.onrender.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal hover:bg-teal-dark text-navy font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 text-sm whitespace-nowrap"
            >
              Login
            </a>
          </div>

          {/* Mobile Header Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-navy border-t border-navy-light"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full text-left block py-3 px-4 rounded-lg transition-all duration-200 text-base font-medium ${
                      isActive
                        ? "text-teal bg-teal/10"
                        : "text-gray-300 active:bg-teal/10 active:text-teal"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-2">
                <a
                  href="https://onecard-jinja-sss.onrender.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-teal hover:bg-teal-dark text-navy font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-base"
                >
                  Login to OneCard
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}