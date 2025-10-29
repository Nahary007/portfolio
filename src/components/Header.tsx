import { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  lang: string;
  setLang: (lang: string) => void;
}

export default function Header({ isDark, setIsDark, lang, setLang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = (newLang: string) => {
    setLang(newLang);
    setLangMenuOpen(false);
  };

  const navLinks =
    lang === 'fr'
      ? [
          { name: 'Profil', href: '#profil' },
          { name: 'Réalisations', href: '#realisations' },
          { name: 'CV', href: '#cv' },
          { name: 'Compétences', href: '#competences' },
        ]
      : [
          { name: 'Profile', href: '#profil' },
          { name: 'Projects', href: '#realisations' },
          { name: 'CV', href: '#cv' },
          { name: 'Skills', href: '#competences' },
        ];

  const contactButtonText = lang === 'fr' ? 'Me contacter' : 'Contact Me';

  return (
    <>
      <header className="w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-300/50 dark:border-gray-800/50 sticky top-0 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* --- Desktop Nav --- */}
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

              {/* Bouton Thème */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 rounded-lg transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* --- Bouton Langue avec Dropdown --- */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:text-blue-600 rounded-lg transition-all duration-300"
                >
                  {lang.toUpperCase()}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      langMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
                    <button
                      onClick={() => toggleLang(lang === 'fr' ? 'en' : 'fr')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      {lang === 'fr' ? 'English' : 'Français'}
                    </button>
                  </div>
                )}
              </div>

              {/* Bouton Contact */}
              <a
                href="#contact"
                className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95"
              >
                <span className="relative z-10">{contactButtonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </nav>

            {/* --- Mobile Buttons --- */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 rounded-lg transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Dropdown Langue Mobile */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:text-blue-600 transition-all duration-300"
                >
                  {lang.toUpperCase()}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      langMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                    <button
                      onClick={() => toggleLang(lang === 'fr' ? 'en' : 'fr')}
                      className="block w-full text-left px-3 py-2 text-xs text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      {lang === 'fr' ? 'English' : 'Français'}
                    </button>
                  </div>
                )}
              </div>

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
    </>
  );
}
