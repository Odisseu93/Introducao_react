import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';
import Form from '../components/form';
import Lista from '../components/lista';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;