import React from 'react';

import styles from './MdListItem.module.css'

function MdListItem() {
  return (
    <li className={styles.item_wrapper}>
      <div className={styles.image} />
      <div className={styles.desc_wrapper}>
        <p className={styles.nomenclature}>L-38-83-А-в <span className={styles.scale}>1:25 000</span></p>
        <p>ГСК-2011</p>
        <p>25.04.2020</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button_edit} />
        <button className={styles.button_edit} />
      </div>
    </li>
  )
};

export default MdListItem;
