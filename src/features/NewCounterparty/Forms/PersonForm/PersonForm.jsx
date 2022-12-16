import React from 'react';
import { useSelector } from 'react-redux';
import InputText from '../../../Tools/NewMd/InputText/InputText';

import styles from './PersonForm.module.css'

function PersonForm() {
  const formContent = useSelector((state) => state.newCp.personFormFields);
  
  return (
    <div className={styles.newcp_form}>
      {
        Object.values(formContent).map((field) => {
          return <InputText key={field.id} label={field.label} data={field} />
        })
      }
    </div>
  )
};

export default PersonForm;
