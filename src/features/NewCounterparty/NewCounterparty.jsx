import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCpType } from '../../store/reducers/newCpSlice';
import InputSubmit from '../Tools/NewMd/InputSubmit/InputSubmit';
import InputReset from '../Tools/NewMd/InputReset/InputReset';
import EntityForm from './Forms/EntityForm/EntityForm';
import PersonForm from './Forms/PersonForm/PersonForm';

import styles from './NewCounterparty.module.css'
import { openCloseNewCounterpartyForm } from '../../store/reducers/appSlice';

function NewCounterparty() {
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
  };

  const handlerReset = () => {
    dispatch(openCloseNewCounterpartyForm());
  }
  
  return (
    <div className={styles.background}>
      <form className={styles.newcp_form_wrapper}>
        <div>
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
        <div className={styles.buttons}>
          <div className={styles.button_wrapper}>
            <InputSubmit value='Сохранить' onClickFunction={handlerReset} />
          </div>
          <div className={styles.button_wrapper}>
            <InputReset value='Отменить и закрыть' onClickFunction={handlerReset} />
          </div>
        </div>
      </form>
    </div>
  )
};

export default NewCounterparty;
