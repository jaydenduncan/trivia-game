import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/mainmenu';
import Categories from './pages/categories';
import Stats from './pages/stats';
import Settings from './pages/settings';
import Help from './pages/help';
import Confirm from './pages/confirm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainMenu />} />
        <Route path='categories' element={<Categories />} />
        <Route path='stats' element={<Stats />} />
        <Route path='settings' element={<Settings />} />
        <Route path='help' element={<Help />} />
        <Route path='categories/:category/confirm' element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
