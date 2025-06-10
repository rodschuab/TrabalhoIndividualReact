import { useState } from 'react';
import './tema.css';

function Tema() {
  const [modoEscuro, setModoEscuro] = useState(false);

  return (
    <div className={modoEscuro ? 'tela escuro' : 'tela claro'}>
      <button onClick={() => setModoEscuro(!modoEscuro)}>
        {modoEscuro ? 'Usar Tema Claro' : 'Usar Tema Escuro'}
      </button>
    </div>
  );
}

export default Tema;
