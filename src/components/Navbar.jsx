import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 lg:px-8  text-white">
      <a href="/" className="text-2xl font-bold">
        RedTilt
      </a>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full  flex flex-col items-start bg-red-900 z-50 space-y-4 p-4 md:hidden">
          <a
            href="/services"
            className="hover:border-b-4 border-b-4 hover:border-red-500 border-transparent py-3 rounded-sm"
          >
            Services
          </a>
          <a
            href="/reviews"
            className="hover:border-b-4 border-b-4 hover:border-red-500 border-transparent py-3 rounded-sm"
          >
            Reviews
          </a>
          <a
            href="/blog"
            className="hover:border-b-4 border-b-4 hover:border-red-500 border-transparent py-3 rounded-sm"
          >
            Blog
          </a>
          <a
            href="/jobs"
            className="hover:border-b-4 border-b-4 hover:border-red-500 border-transparent py-3 rounded-sm"
          >
            Jobs
          </a>
        </div>
      )}

      <div className="hidden md:flex space-x-5">
        <a
          href="/services"
          className="hover:border-b-4 border-b-4 hover:border-red-500 border-transparent py-3 rounded-sm"
        >
          Services
        </a>
        <a
          href="/reviews"
          className="hover:border-b-4 border-b-4 hover:border-red-500 border-transparent py-3 rounded-sm"
        >
          Reviews
        </a>
        <a
          href="/blog"
          className="hover:border-b-4 border-b-4 hover:border-red-500 border-transparent py-3 rounded-sm"
        >
          Blog
        </a>
        <a
          href="/jobs"
          className="hover:border-b-4 border-b-4 hover:border-red-500 border-transparent py-3 rounded-sm"
        >
          Jobs
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5 text-white" />
          )}
        </button>
        <button className="hidden md:block px-4 py-2 bg-red-600 rounded-md hover:bg-red-500">
          Start a project
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
