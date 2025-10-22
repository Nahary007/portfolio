import { useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Realisations from './components/Realisation';
import Cv from './components/Cv';
import Competences from './components/Competence';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Header />

      <main>
        <Introduction />
        <Realisations />
        <Cv />
        <Competences />
        <Contact />
      </main>
    </div>
  );
}

export default App;