import React from 'react';
import { useSelector } from 'react-redux';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import InputTextArea from '../../../Tools/NewMd/InputTextArea/InputTextArea';
import SubmitButton from '../../../Tools/SubmitButton/SubmitButton';

import styles from './PersonForm.module.css'

function PersonForm() {
  const formContent = useSelector((state) => state.newCp.personFormFields);
  
  return (
    <form className={styles.newcp_form}>
      {
        Object.values(formContent).map((field) => {
          return <InputText key={field.id} label={field.label} data={field} />
        })
      }
      <SubmitButton value='Сохранить' />
    </form>
  )
};

export default PersonForm;
