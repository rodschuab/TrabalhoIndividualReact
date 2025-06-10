import { useState } from 'react';

export default function Tarefas() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarTarefa() {
    if (tarefa !== '') {
      setLista([...lista, tarefa]);
      setTarefa('');
    }
  }

  return (
    <div>
      <input
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
