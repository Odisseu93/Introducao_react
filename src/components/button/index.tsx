import React from 'react';
import style from './Button.module.scss'

class Botao extends React.Component<{
  texto: String, type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}> {
  render() {
    const { type = "button", onClick} = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.texto}
      </button>
    )
  }
}

export default Botao;