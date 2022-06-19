import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';


interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

// ITarefas foi importa de ../../types/tarefa
function Lista({ tarefas, selecionaTarefa }: Props) {
 
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
          selecionaTarefa={selecionaTarefa}
          key={item.id} 
          {...item}
          />

        ))}
      </ul>
    </aside>
  )
}

export default Lista;