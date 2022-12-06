import React from 'react';
import { useGetGroupsQuery } from '../../../api/mdApi';

import SubmitButton from '../SubmitButton/SubmitButton';

import styles from './FiltersTab.module.css'

function FiltersTab() {

  const { data, isSuccess } = useGetGroupsQuery();
  
  return (
    <form className={styles.filters_wrapper}>
      <div>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldset_legend}>Типы данных</legend>
        {
          isSuccess &&
          data.map((item) => {
            return <div key={item.id} className={styles.checkbox_wrapper}>
              <input type='checkbox' id={item.controller} name={item.controller} value={item.id} />
              <label htmlFor={item.controller} className={styles.checkbox_label}>{item.name}</label>
            </div>
          })
        }
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldset_legend}>Дата состояния местности</legend>
        <div className={styles.checkbox_wrapper}><input type="date" className={styles.input_date}/> - <input type="date" className={styles.input_date} /></div>
      </fieldset>
      </div>
      <SubmitButton value='Поиск ...' />
    </form>
  )
};

export default FiltersTab;
