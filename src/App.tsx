import { Menu } from './components/Menu';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';

import './App.css';
import { Mixed } from './pages/Mixed';

export const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mixed' element={<Mixed />} />
        <Route path='/multiplicative/decimal' element={<div>Multiplicativo decimal</div>} />
        <Route path='/multiplicative/binary' element={<div>Multiplicativo binario</div>} />
      </Routes>
    </>
  );
}