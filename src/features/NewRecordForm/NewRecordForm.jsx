import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeNewRecordWindow } from '../../store/reducers/appSlice';
import { setActiveTab } from '../../store/reducers/newRecord';
import Button from '../CommonComponents/Button/Button';
import Header from '../CommonComponents/Header/Header';
import ModalWindow from '../CommonComponents/ModalWindow/ModalWindow';
import Tabs from '../CommonComponents/Tabs/Tabs';
import NewRecordFormMap from '../Map/NewRecordFormMap/NewRecordFormMap';

import styles from './NewRecordForm.module.css';
import Access from './Tabs/Access';
import Main from './Tabs/Main';
import Place from './Tabs/Place';

function NewRecordForm() {
  /**
  * Форма ввода новой записи метаданных.
  */

  const dispatch = useDispatch();
  const group = useSelector(state => state.app.newRecord.type);
  const tabsSet = useSelector(state => state.newRecord.tabs);
  const activeTab = useSelector(state => state.newRecord.activeTab);

  const setInitialSubtype = (group) => {
  let value;
  switch (group) {
    case '1':
      value = '1';
      break;
    case '2':
      value = '27';
      break;
    case '3':
      value = '69';
      break;
    case '5':
      value = '46';
      break;
    case '12':
      value = '126';
      break;
    default:
      value = '42';
  };
  return value;
  };

  const [values, setValues] = useState({
    group_ref: group,
    subtype_ref: setInitialSubtype(group),
    accesscondition_ref: '2',
    secretclass_ref: '-1',
    region_ref: 12,
    extraregioninfo: '',
  });

  const handleSetValue = (event) => {
    const copy = Object.assign({}, values);
    const target = event.target;
    copy[target.name] = target.value;
    setValues(copy);
  };


  let panel;
  switch (activeTab) {
  case 1:
    panel = <Main values={values} onChangeFunction={handleSetValue} />;
    break;
  case 3:
    panel = <Place values={values} onChangeFunction={handleSetValue} />;
    break;
  case 5:
    panel = <Access values={values} onChangeFunction={handleSetValue} />;
    break;
  };
  return (
    <ModalWindow closeFunction={() => {dispatch(closeNewRecordWindow())}}>
      <div className={styles.wrapper}>
        <div className={styles.form_wrapper}>
          <div className={styles.header_wrapper}>
            <Header name='Новая запись' />
          </div>
          <form className={styles.form}>
            <Tabs tabsSet={tabsSet} activeTab={activeTab} 
                  setActiveTabFunction={(id) => dispatch(setActiveTab(id))}>
              { panel }
            </Tabs>
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
