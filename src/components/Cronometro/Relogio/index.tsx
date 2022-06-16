import React from "react";
import style from "./Relogio.module.scss";

export  default function Relogio() {


  // exportar o  component se ter o elemento pai  
  // 1ª forma
  return (
    //   <React.Fragment>
    //     <span>0</span>
    //     <span>0</span>
    //     <span>:</span>
    //     <span>0</span>
    //     <span>0</span>
    //   </React.Fragment>

    // 2ª forma tag em branco
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>

  )
}