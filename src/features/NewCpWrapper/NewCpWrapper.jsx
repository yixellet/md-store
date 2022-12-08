import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCpType } from '../../store/reducers/newCpSlice';
import EntityForm from './Forms/EntityForm/EntityForm';
import PersonForm from './Forms/PersonForm/PersonForm';

import styles from './NewCpWrapper.module.css'

function NewCpWrapper() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.newCp.cpTypes);
  const activeCpType = useSelector((state) => state.newCp.activeCpType);

  let form;
  switch (activeCpType) {
    case 1:
      form = <EntityForm />;
      break;
    case 2:
      form = <PersonForm />;
      break;
    default:
      form = <EntityForm />;
  }
  
  return (
    <div className={styles.newcp_form_wrapper}>
      <h1 className={styles.newcp_header}>Новый контрагент</h1>
      <div className={styles.type_radio_wrapper}>
        {
          Object.values(types).map((type) => {
            return <div key={type.id} className={styles.type_radio_with_label}>
                <input className={styles.radio} type="radio" id={`entity${type.id}`} 
                       name="type" value={type.id} checked={type.id === activeCpType}
                       onChange={() => {dispatch(setActiveCpType(type.id))}} />
                <label htmlFor={`entity${type.id}`}>{type.name}</label>
              </div>
          })
        }
      </div>
      {form}
    </div>
  )
};

export default NewCpWrapper;
