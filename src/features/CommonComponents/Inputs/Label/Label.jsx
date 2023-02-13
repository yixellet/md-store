import React from 'react';

import styles from './Label.module.css'

function Label(props) {
  /**
  *  Подпись поля формы.
  *
  *  @param {string} HTMLfor Имя поля, к которому относится подпись
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

Label.defaultProps = { HTMLfor: 'name', name: '<field_name>', isRequired: false};

export default Label;
