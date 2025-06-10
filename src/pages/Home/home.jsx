import { Link } from 'react-router-dom'
import './home.css';

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Home</h1>
      <Link to="/tema" className="link">Tema Claro ou Escuro</Link>
      <Link to="/boas-vindas" className="link">Mensagem de Boas-Vindas</Link>
      <Link to="/lista-tarefas" className="link">Lista de Tarefas</Link>
    </div>
  );
}
