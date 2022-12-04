import React from 'react';

import styles from './Tools.module.css'

function Tools() {
  return (
    <div className={styles.tools_container}>
      <h1 className={styles.header}>MD Manager</h1>
      <button className={styles.new_md_button}>Новая запись</button>
      <form className={styles.form}>
        <input type='search' name='search' className={styles.searchInput} placeholder={`Поиск ...`} />
      </form>
      
    </div>
  )
};

export default Tools;
