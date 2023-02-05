import React from 'react';

import styles from './InputLabel.module.css'

function InputLabel(props) {
  /**
  *  Подпись поля формы.
  *
  *  @param {string} for Имя поля, к которому относится подпись
  *  @param {string} name Текст подписи
  *  @param {bool} isRequired Флаг обязательности
  */

  const { HTMLfor, name, isRequired } = props;
 
  return (
    <label htmlFor={HTMLfor} className={styles.label}>
      {name} {isRequired ? '*' : ''}
    </label>
  )
};

InputLabel.defaultProps = { for: 'name', name: '<field_name>', isRequired: false};

export default InputLabel;
