import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'Profil', href: '#profil' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'CV', href: '#cv' },
    { name: 'Compétences', href: '#competences' },
  ];

  return (
    <>
      <header className="w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-300/50 dark:border-gray-800/50 sticky top-0 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Portfolio
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-600 dark:text-gray-300 font-medium border-2 border-transparent hover:border-blue-500/50 hover:text-blue-600 rounded-xl transition-all duration-300 hover:scale-105 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}

              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 rounded-lg transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <a
                href="#contact"
                className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95"
              >
                <span className="relative z-10">Me contacter</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </nav>

            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 rounded-lg transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-l border-gray-300/50 dark:border-gray-800/50 z-50 transform transition-all duration-300 ease-in-out md:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 rounded-lg transition-colors duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" /> }
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-600 dark:text-gray-300 border-2 border-transparent hover:border-blue-500/50 hover:text-blue-600 rounded-xl transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="relative mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10">Me contacter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}