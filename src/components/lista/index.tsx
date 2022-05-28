import React from "react";
import Item from "./item";
import style from './Lista.module.scss';

function Lista() {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  }, {
    tarefa: 'Typecript',
    tempo: '03:00:00'
  }]
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tarefas.map((item,index) =>(
          <Item 
             // primeira maneira de  utilizar o pops
             
             // tarefa={item.tarefa}
             // tempo={item.tempo}
           
             // Segunda maneira: utiliza todos atributos dentro de um obejeto, como prop para o component
             key={index} 
             {...item}
          />

        ))}
      </ul>
    </aside>
  )
}

export default Lista;