import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Graphic */}
        <div className="relative mb-10">
          {/* Hexagon shape */}
          <div className="w-32 h-32 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,5 90,28 90,72 50,95 10,72 10,28"
                fill="none"
                stroke="#00C2BA"
                strokeWidth="2"
                opacity="0.3"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-5xl font-bold text-teal">404</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-teal hover:bg-teal-dark text-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-teal/25 hover:shadow-teal/40"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="border-2 border-white/20 hover:border-teal text-white hover:text-teal font-semibold px-8 py-4 rounded-lg transition-all duration-200"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4">Quick Links</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#features"
              className="text-gray-400 hover:text-teal transition-colors text-sm"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-gray-400 hover:text-teal transition-colors text-sm"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              className="text-gray-400 hover:text-teal transition-colors text-sm"
            >
              FAQ
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-teal transition-colors text-sm"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-teal transition-colors text-sm"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}