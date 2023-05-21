import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './NewRecord.module.css'

function NewRecord() {

  const dispatch = useDispatch();

  return (
    <div className={styles.new_record_wrapper}>
      <button className={styles.new_record_button}>+</button>
    </div>
  );

  /*
  return (
    <form className={styles.newMdForm}>
      <div className={styles.fields}>
        <SelectGroup defaultOption={group} onChangeFunction={selectType} />
      </div>
      <div className={styles.button_wrapper}>
        <Button label='Создать' onClickFunction={(e) => {e.preventDefault(); dispatch(openNewRecordWindow(group))}} />
      </div>
    </form>
  );*/
};

export default NewRecord;
