import React from 'react';

import styles from './MdList.module.css'
import MdListItem from './MdListItem/MdListItem';

function MdList() {
  return (
    <ul className={styles.list}>
      <MdListItem />
      <MdListItem />
      <MdListItem />
      <MdListItem />
    </ul>
  )
};

export default MdList;
