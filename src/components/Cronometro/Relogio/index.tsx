import React from "react";
import style from "./Relogio.module.scss";

interface Props {
  tempo: number | undefined
}

export  default function Relogio( { tempo  = 0 }: Props ) {

  const minutos = Math.floor (tempo / 60);
  const segundos = tempo % 60; //retornna o resto
  const [minutoDezena, minutoUnidade] = String
  (minutos).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String
  (segundos).padStart(2, '0');


  // exportar o  component se ter o elemento pai  
  // 1ª forma
  return (
    //   <React.Fragment>
    //     <span>0</span>
    //     <span>0</span>
    //   </React.Fragment>
    // ...
    // 2ª forma tag em branco
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>

  )
}