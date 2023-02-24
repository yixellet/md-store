import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css'

function Button (props) {
  /**
  * Большая кнопка с текстом.
  *
  * @param {String} label Подпись кнопки
  * @param {String} color Цвет кнопки (два варианта - green и grey)
  * @callback onClickFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** @type {onClickFunction} */

  const { label, color, onClickFunction } = props;

  return (
    <button className={color === 'green' ? `${styles.button} ${styles.green}` : `${styles.button} ${styles.grey}`}
    onClick={(e) => onClickFunction(e)}>{label}</button>
  )
};

Button.defaultProps = {
  label: '<button_name>',
  color: 'green',
  onClickFunction: () => {},
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onClickFunction: PropTypes.func,
};

export default Button;
