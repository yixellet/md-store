import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../../store/reducers/appSlice';

import styles from './TabLabel.module.css'

function TabLabel({id, label, isActive}) {
  const dispatch = useDispatch();

  return (
    <li className={styles.tablabel_wrapper}>
      <button className={isActive ? `${styles.tabLabel} ${styles.active}` : `${styles.tabLabel} ${styles.inactive}`}
              onClick={() => {dispatch(setActiveTab(id))}}
              disabled={isActive}>{label}</button>
    </li>
  )
};

export default TabLabel;
