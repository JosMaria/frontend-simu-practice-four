import { Menu } from './components/Menu';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Mixed } from './pages/Mixed';
import { Multiplicative } from './pages/Multiplicative';
import { MultiplicativeBinary } from './pages/MultiplicativeBinary';

import './App.css';

export const App = () => {
  return (
    <div className='app-container'>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mixed' element={<Mixed />} />
        <Route path='/multiplicative/decimal' element={<Multiplicative />} />
        <Route path='/multiplicative/binary' element={<MultiplicativeBinary />} />
      </Routes>
    </div>
  );
}