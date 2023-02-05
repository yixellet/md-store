import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputText.module.css'

function InputText(props) {
  /**
  *  Компонент с инпутом типа "текст".
  * 
  *  @param {string} label подпись поля
  *  @param {bool} showLabel флаг видимости подписи поля
  *  @param {string} name имя поля
  *  @param {bool} isRequired флаг обязательности
  *  @param {string} value значение поля
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
      <input type='text' 
             name={name} 
             id={name} 
             className={styles.text_input}
             value={value}
             onChange={(event) => onChangeFunction(event)} />
    </div>
  )
};

InputText.defaultProps = {
  label: '<field_name>',
  showLabel: true,
  name: 'name',
  isRequired: false,
  value: '<field_value>',
  onChangeFunction: () => {},
};

export default InputText;
