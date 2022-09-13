import { Menu } from './components/Menu';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Mixed } from './pages/Mixed';
import './App.css';
import { Multiplicative } from './pages/Multiplicative';

export const App = () => {
  return (
    <div className='app-container'>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mixed' element={<Mixed />} />
        <Route path='/multiplicative/decimal' element={<Multiplicative />} />
        <Route path='/multiplicative/binary' element={<div>Multiplicativo binario</div>} />
      </Routes>
    </div>
  );
}