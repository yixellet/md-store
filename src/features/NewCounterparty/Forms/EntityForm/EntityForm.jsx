import React from 'react';
import InputText from '../../../Tools/NewMd/InputText/InputText';

import styles from './EntityForm.module.css'

function EntityForm() {
  
  return (
    <div className={styles.newcp_form}>
      <InputText label='Сокращенное наименование' />
    </div>
  )
};

export default EntityForm;
