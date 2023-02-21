import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetSubtypesQuery } from '../../api/dictionaries/subtypes';
import { closeNewRecordWindow } from '../../store/reducers/appSlice';
import Button from '../CommonComponents/Button/Button';
import Header from '../CommonComponents/Header/Header';
import Select from '../CommonComponents/Inputs/Select/Select';
import ModalWindow from '../CommonComponents/ModalWindow/ModalWindow';
import NewRecordFormMap from '../Map/NewRecordFormMap/NewRecordFormMap';

import styles from './NewRecordForm.module.css';

function NewRecordForm() {
  /**
  * Форма ввода новой записи метаданных.
  */

 const dispatch = useDispatch();
 const group = useSelector(state => state.app.newRecord.type);

 const { data: subtypes, isSuccess: subtypesSuccess } = useGetSubtypesQuery(group);

 const [subtype_ref, setSubtype] = useState(1);

  return (
    <ModalWindow closeFunction={() => {dispatch(closeNewRecordWindow())}}>
      <div className={styles.wrapper}>
        <div className={styles.form_wrapper}>
          <Header name='Новая запись' />
          <form className={styles.form}>
            <div className={styles.fields}>
              { subtypesSuccess && <Select label='Вид пространственных данных (подтип)'
                      showLabel={true} name='subtype_ref' isRequired={true}
                      defaultOption={subtype_ref}
                      onChangeFunction={(e) => {setSubtype(e.target.value)}} />}
            </div>
            <div className={styles.buttons_wrapper}>
              <div className={styles.button_wrapper}>
                <Button label='Сохранить' color='green' onClickFunction={(e) => {e.preventDefault()}} />
              </div>
              <div className={styles.button_wrapper}>
                <Button label='Отменить' color='grey' onClickFunction={() => {dispatch(closeNewRecordWindow())}} />
              </div>
            </div>
          </form>
        </div>
        <NewRecordFormMap />
      </div>
    </ModalWindow>
  )
};

export default NewRecordForm;
