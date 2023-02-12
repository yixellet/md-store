import React from 'react';

import styles from './Button.module.css'

function Button (props) {
  /**
  *  Большая кнопка с текстом.
  *
  *  @param {String} label Подпись кнопки
  *  @callback onClickFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** @type {onClickFunction} */

  const { label, onClickFunction } = props;

  return (
    <button className={styles.submit_button}
    onClick={() => onClickFunction()}>{label}</button>
  )
};

Button.defaultProps = {
  label: '<button_name>',
  onClickFunction: () => {},
};

export default Button;
