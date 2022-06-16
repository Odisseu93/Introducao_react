import React from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/form';
import Lista from '../components/lista';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;