import React from 'react';
import FiltersTab from './FiltersTab/FiltersTab';
import MdList from './MdList/MdList';

import styles from './Tools.module.css'

function Tools() {
  return (
    <div className={styles.tools_container}>
      <h1 className={styles.header}>MD Manager</h1>
      <form className={styles.form}>
        <input type='search' name='search' className={styles.searchInput} placeholder={`Поиск ...`} />
      </form>
      <div className={styles.tabs_wrapper}>
        <ul className={styles.tabLabels_wrapper}>
          <li className={styles.tabLabelActive}><p>Фильтр</p></li>
          <li className={styles.tabLabel}><p>Метаданные</p></li>
          <li className={styles.tabLabel}><p>Новая запись</p></li>
        </ul>
        <MdList />
      </div>
    </div>
  )
};

export default Tools;
