import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-teal rounded-lg flex items-center justify-center font-bold text-navy text-xs">
              OC
            </div>
            <span className="text-white font-serif font-bold text-lg">
              OneCard
            </span>
          </a>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Herman Software Solutions. All Rights Reserved.
          </p>

          {/* Links + Language */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/terms"
              className="text-gray-500 hover:text-teal transition-colors text-sm"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-teal transition-colors text-sm"
            >
              Privacy
            </Link>
            <a
              href="https://github.com/jiangsalim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="mailto:jaingsalim@gmail.com"
              className="text-gray-500 hover:text-teal transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}