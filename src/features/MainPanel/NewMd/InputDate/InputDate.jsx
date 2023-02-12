import React from 'react';
import InputLabel from '../InputLabel/InputLabel';

import styles from './InputDate.module.css'

function InputDate(props) {
  /**
  *  Компонент с инпутом типа "select".
  * 
  *  @param {string} label подпись поля
  *  @param {bool} showLabel флаг видимости подписи поля
  *  @param {string} name имя поля
  *  @param {bool} isRequired флаг обязательности
  *  @param {string} value значение поля по умолчанию
  *  @callback onChangeFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** @type {onChangeFunction} */

  const { label, showLabel, name, isRequired, value, onChangeFunction } = props;

  return (
    <div className={styles.input_wrapper}>
    {
      showLabel &&
      <InputLabel name={label} for={name} isRequired={isRequired} />
    }
      <input type='date' name={name} 
              id={name}
              value={value} className={styles.text_input}
              onChange={event => onChangeFunction(event.target.value)} />
    </div>
  )
};

export default InputDate;
