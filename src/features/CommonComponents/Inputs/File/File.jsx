import React from 'react';
import Label from '../Label/Label';

import styles from './File.module.css'

function File(props) {
  /**
  *  Компонент с инпутом типа "file".
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
      <Label name={label} HTMLfor={name} isRequired={isRequired} />
    }
      <input type='date' name={name} 
              id={name}
              value={value} className={styles.input_date}
              onChange={event => onChangeFunction(event)} />
    </div>
  )
};

InputDate.defaultProps = {
  label: '<field_name>',
  showLabel: true,
  name: 'date',
  isRequired: false,
  value: '',
  onChangeFunction: () => {},
};

export default File;
