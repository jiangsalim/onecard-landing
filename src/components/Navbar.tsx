"use client";

import { useState, useEffect, useCallback } from "react";
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

  // Close mobile menu when clicking a link
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileOpen && !target.closest("nav")) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

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

      // Find active section
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
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center font-bold text-navy text-sm">
              OC
            </div>
            <span className="text-white font-serif font-bold text-xl">
              OneCard
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
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
                </a>
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
              className="text-white p-2 z-50 relative"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy border-t border-navy-light overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 64px)" }}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block py-3 px-4 rounded-lg transition-all duration-200 text-base font-medium ${
                      isActive
                        ? "text-teal bg-teal/10"
                        : "text-gray-300 hover:text-teal hover:bg-teal/5 active:bg-teal/10"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href="https://onecard-jinja-sss.onrender.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-teal hover:bg-teal-dark text-navy font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-base"
                >
                  Login to OneCard
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}