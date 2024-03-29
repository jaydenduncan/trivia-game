import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/mainmenu';
import Categories from './pages/categories';
import Stats from './pages/stats';
import Settings from './pages/settings';
import Help from './pages/help';
import Confirm from './pages/confirm';
import Quiz from './pages/quiz';

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
