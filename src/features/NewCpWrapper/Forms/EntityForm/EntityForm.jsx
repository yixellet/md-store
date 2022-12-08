import React from 'react';
import InputText from '../../../Tools/NewMd/InputText/InputText';

import styles from './EntityForm.module.css'

function EntityForm() {
  
  return (
    <form className={styles.newcp_form}>
      <InputText label='Сокращенное наименование' />
    </form>
  )
};

export default EntityForm;
