import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from './Lista.module.scss';


// ITarefas foi importa de ../../types/tarefa
function Lista({ tarefas }: { tarefas: ITarefa[] }) {
 
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudo do dia</h2>
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