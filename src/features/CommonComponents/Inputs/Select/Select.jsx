import React from 'react';
import Label from '../Label/Label';
import styles from './Select.module.css'

function Select (props) {
  /**
  *  Компонент с инпутом типа "select".
  * 
  *  @param {string} label подпись поля
  *  @param {bool} showLabel флаг видимости подписи поля
  *  @param {string} name имя поля
  *  @param {bool} isRequired флаг обязательности
  *  @param {string} defaulOption значение поля по умолчанию
  *  @param {Array} options список значений
  *  @callback onChangeFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** @type {onChangeFunction} */

  const { label, showLabel, name, isRequired, defaultOption, options, onChangeFunction } = props;
 
  return (
    <div className={styles.input_wrapper}>
      {
        showLabel &&
        <Label name={label} HTMLfor={name} isRequired={isRequired} />
      }
      <select name={name} 
              id={name}
              className={styles.comboBox} 
              value={defaultOption} 
              onChange={(event) => onChangeFunction(event)}>
        {
          options &&
          Object.values(options).map((option) => {
            return <option key={option.id} value={option.id}>{option.name}</option>
          })
        }
      </select>
    </div>
  )
};

export default Select;
