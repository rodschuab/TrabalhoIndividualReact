import { useState } from 'react';
import './boas-vindas.css';
import { useNavigate } from 'react-router-dom';


export default function BoasVindas() {
  const [mensagem, setMensagem] = useState('Olá!');


  return (
    <div className="container">
      <p className="mensagem">{mensagem}</p>
      <button
        onClick={() => setMensagem('Seja Bem-vindo!')}
      >
        Entrar
      </button>
    </div>
  );
}
