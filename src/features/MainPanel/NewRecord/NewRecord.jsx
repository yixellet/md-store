import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openNewRecordWindow } from '../../../store/reducers/appSlice';
import Button from '../../CommonComponents/Button/Button';
import SelectGroup from '../../NewRecordForm/Inputs/SelectGroup';

import styles from './NewRecord.module.css'

function NewRecord() {

  const dispatch = useDispatch();
  const [group, setGroup] = useState(1);

  const selectType = (e) => {
    setGroup(e.target.value);
  };

  return (
    <form className={styles.newMdForm}>
      <div className={styles.fields}>
        <SelectGroup defaultOption={group} onChangeFunction={selectType} />
      </div>
      <div className={styles.button_wrapper}>
        <Button label='Создать' onClickFunction={(e) => {e.preventDefault(); dispatch(openNewRecordWindow(group))}} />
      </div>
    </form>
  );
};

export default NewRecord;
