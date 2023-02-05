import React from 'react';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import styles from './Contacts.module.css'

function Contacts(props) {

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        {props.type === 'phoneNumber' ? 'Телефонные номера' : 'Электронная почта'}
      </legend>
      <ul className={styles.fields_list}>
        <InputText name={props.type} 
                   value={props.value} 
                   onChangeFunction={(event) => props.onChangeFunction(event)} />
      </ul>
    </fieldset>
  )
};

export default Contacts;
