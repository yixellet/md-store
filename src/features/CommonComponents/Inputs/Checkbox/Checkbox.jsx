import React from 'react';
import Label from '../Label/Label';
import styles from './Checkbox.module.css'

function Checkbox(props) {
  /**
  *  Группа чекбоксов.
  *
  *  @param {Object} options Опции для чекбоксов
  *  @param {String} name Имя группы чекбоксов
  *  @callback onChangeFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** @type {onChangeFunction} */

  const { options, name, isChecked, onChangeFunction } = props;
  
  return (
    <div className={styles.wrapper}>
      {
        Object.values(options).map((option) => {
          return <div className={styles.input_wrapper} key={option.id}>
            <input type='checkbox' 
                   name={name} 
                   id={option.id} 
                   className={styles.radio}
                   value={option.id}
                   checked={isChecked.indexOf(option.id) !== -1}
                   onChange={() => onChangeFunction(option.id)} />
            <Label name={option.name} HTMLfor={option.id} isRequired={false} />
          </div>
        })
      }
    </div>
  )
};

Checkbox.defaultProps = {
  options: {1: {id: 1, name: '<option_1>'}, 2: {id: 2, name: '<option_2>'}},
  name: '<default_options>',
  isChecked: [1],
  onChangeFunction: () => {},
};

export default Checkbox;
