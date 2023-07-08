import { Routes, Route } from 'react-router-dom';

import Home from './Pages/home.js';
import Detalhes from './Pages/detalhes.js';

export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='detalhes/:livro' element={<Detalhes />} />
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </Routes>
    );
  }