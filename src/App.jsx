import { useState, useEffect } from 'react';
import HomePage from './Component/HomePage';
import Nav from './Component/Nav';
import { Route, Routes } from 'react-router-dom';
import ImageConvertorPage from './pages/ImageConvertor/ImageConvertorPage';
function App() {
  const [theme, setThemes] = useState('light');

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDarkScheme) {
      setThemes('dark');
    } else {
      setThemes('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleMode = () => {
    setThemes(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className="h-screen">
        <Nav handleMode={handleMode} theme={theme} />
        <Routes>
          <Route path="/imageConvertor" element={<ImageConvertorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
