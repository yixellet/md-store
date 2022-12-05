import React from 'react';

import SubmitButton from '../SubmitButton/SubmitButton';

import styles from './NewMd.module.css'

function NewMd() {
  return (
    <form className={styles.newMdForm}>
      <div className={styles.form_fields}>
        <div className={styles.input_wrapper}>
          <label htmlFor='type' className={styles.label}>Тип данных</label>
          <select name='type' id='type' required className={styles.comboBox}>
            <option value="dmap">Цифровая картографическая продукция</option>
            <option value="ders">Цифровые данные ДЗЗ</option>
            <option value="geodesy">Геодезические материалы</option>
            <option value="amap">Карты, атласы и границы</option>
            <option value="nsi">Нормативные документы и иное</option>
          </select>
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor='nomenclature' className={styles.label}>Номенклатура</label>
          <input type='text' name='nomenclature' id='nomenclature' className={styles.text_input} />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor='scale' className={styles.label}>Масштаб</label>
          <select name='scale' id='scale' required className={styles.comboBox}>
            <option value="500">1:500</option>
            <option value="1000">1:1 000</option>
            <option value="2000">1:2 000</option>
            <option value="5000">1:5 000</option>
            <option value="10000">1:10 000</option>
          </select>
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor='objectquantity' className={styles.label}>Количество объектов</label>
          <input type='text' name='objectquantity' id='objectquantity' className={styles.text_input} />
        </div>
      </div>
      <SubmitButton />
    </form>
  )
};

export default NewMd;
