import React from 'react';
import Form from '../components/form';
import Lista from '../components/lista';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista />
    </div>
  );
}

export default App;
