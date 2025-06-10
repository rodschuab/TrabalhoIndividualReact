import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home';
import Tema from '../pages/Tema/tema';
import BoasVindas from '../pages/BoasVindas/boas-vindas';
import ListaTarefas from '../pages/ListaTarefas/lista-tarefas';

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tema" element={<Tema />} />
      <Route path="/boas-vindas" element={<BoasVindas />} />
      <Route path="/lista-tarefas" element={<ListaTarefas />} />
    </Routes>
  );
}
