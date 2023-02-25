import React from 'react';

import styles from './Fieldset.module.css'

function Fieldset (props) {
  /**
  *  Обертка для полей формы
  * 
  *  @param {string} label подпись
  *  @param {node} children дочерние объекты
  */

  const { label, children } = props;
 
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{ label }</legend>
      { children }
    </fieldset>
  )
};

export default Fieldset;
