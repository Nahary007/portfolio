import { useState, useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Realisations from './components/Realisation';
import Cv from './components/Cv';
import Competences from './components/Competence';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('lang') || 'fr';
    setLang(savedLang);
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className={`min-h-screen bg-gray-50 ${isDark ? 'dark:bg-gray-900' : ''} transition-colors duration-300`}>
      <Header 
        isDark={isDark} 
        setIsDark={setIsDark} 
        lang={lang} 
        setLang={setLang} 
      />

      <main>
        <Introduction lang={lang} />
        <Realisations lang={lang} />
        <Cv lang={lang} />
        <Competences lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}

export default App;