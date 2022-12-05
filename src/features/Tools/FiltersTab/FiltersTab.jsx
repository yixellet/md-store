import React from 'react';

import styles from './FiltersTab.module.css'

function FiltersTab() {
  return (
    <form className={styles.filters_wrapper}>
      <div>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldset_legend}>Типы данных</legend>
        <div className={styles.checkbox_wrapper}>
          <input type='checkbox' id='dmap' name='dmap' value='dmap' />
          <label htmlFor='dmap' className={styles.checkbox_label}>Цифровая картографическая продукция</label>
        </div>
        <div className={styles.checkbox_wrapper}>
          <input type='checkbox' id='ders' name='ders' value='ders' />
          <label htmlFor='ders' className={styles.checkbox_label}>Цифровые данные ДЗЗ</label>
        </div>
        <div className={styles.checkbox_wrapper}>
          <input type='checkbox' id='geodesy' name='geodesy' value='geodesy' />
          <label htmlFor='geodesy' className={styles.checkbox_label}>Геодезические материалы</label>
        </div>
        <div className={styles.checkbox_wrapper}>
          <input type='checkbox' id='amap' name='amap' value='amap' />
          <label htmlFor='amap' className={styles.checkbox_label}>Карты, атласы и границы</label>
        </div>
        <div className={styles.checkbox_wrapper}>
          <input type='checkbox' id='nsi' name='nsi' value='nsi' />
          <label htmlFor='nsi' className={styles.checkbox_label}>Нормативные документы и иное</label>
        </div>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldset_legend}>Дата состояния местности</legend>
        <div className={styles.checkbox_wrapper}><input type="date" className={styles.input_date}/> - <input type="date" className={styles.input_date} /></div>
      </fieldset>
      </div>
      <input type="submit" className={styles.new_md_button} value='Поиск ...' />
    </form>
  )
};

export default FiltersTab;
