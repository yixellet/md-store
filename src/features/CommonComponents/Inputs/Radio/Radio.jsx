import React from 'react';
import Label from '../Label/Label';
import styles from './Radio.module.css'

function Radio(props) {
  /**
  *  Группа радио кнопок.
  *
  *  @param {Object} options Опции для кнопок
  *  @param {string} name Имя группы радио кнопок
  *  @param {number} isChecked Значение активной кнопки
  *  @callback onChangeFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** @type {onChangeFunction} */
  
  return (
    <div className={styles.wrapper}>
      {
        Object.values(props.options).map((option) => {
          return <div className={styles.input_wrapper} key={option.id}>
            <input type='radio' 
                   name={props.name} 
                   id={option.id} 
                   className={styles.radio}
                   value={option.id}
                   checked={Number(props.isChecked) === option.id}
                   onChange={event => props.onChangeFunction(event.target.value)} />
            <Label name={option.name} HTMLfor={option.id} isRequired={false} />
          </div>
        })
      }
    </div>
  )
};

Radio.defaultProps = {
  options: {1: {id: 1, name: '<option_1>'}, 2: {id: 2, name: '<option_2>'}},
  name: '<default_options>',
  isChecked: 1,
  onChangeFunction: () => {},
};

export default Radio;
