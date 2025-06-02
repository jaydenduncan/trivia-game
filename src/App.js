import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/mainmenu';
import Categories from './pages/categories';
import Stats from './pages/stats';
import Settings from './pages/settings';
import Help from './pages/help';
import Confirm from './pages/confirm';
import Quiz from './pages/quiz';
import Rules from './pages/rules';

function App() {
  const [theme, setTheme] = useState("");
  
  const initializeTheme = async () => {
      await fetch("/settings")
      .then(res => res.json())
      .then(data => setTheme(data[0].theme))
      .catch(err => console.log(err));
  };

  const changeTheme = () => {
      document.querySelector('body').setAttribute('data-theme', theme);
  }

  useEffect(() => {
      initializeTheme();
  }, []);

  useEffect(() => {
      changeTheme();
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainMenu />} />
        <Route path='categories' element={<Categories />} />
        <Route path='categories/:category/confirm' element={<Confirm />} />
        <Route path='quiz/:category' element={<Quiz />} />
        <Route path='stats' element={<Stats />} />
        <Route path='settings' element={<Settings />} />
        <Route path='help' element={<Help />} />
        <Route path='rules' element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
