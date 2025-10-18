import { useState, useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // ✅ Toujours commencer en dark

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Introduction />
      </main>
    </div>
  );
}

export default App;
