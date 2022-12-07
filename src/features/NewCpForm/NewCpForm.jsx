import React from 'react';

import styles from './NewCpForm.module.css'

function NewCpForm() {
  
  return (
    <div className={styles.newcp_form_wrapper}>
      <h1 className={styles.newcp_header}>Новый контрагент</h1>
      <div className={styles.type_radio_wrapper}>
        <div className={styles.type_radio_with_label}>
          <input className={styles.radio} type="radio" id="entity" name="type" value="entity" checked />
          <label for="entity">Юридическое лицо</label>
        </div>
        <div className={styles.type_radio_with_label}>
          <input className={styles.radio} type="radio" id="person" name="type" value="person" />
          <label for="person">Физическое лицо</label>
        </div>
      </div>
      <form className={styles.newcp_form}>

      </form>
    </div>
  )
};

export default NewCpForm;
