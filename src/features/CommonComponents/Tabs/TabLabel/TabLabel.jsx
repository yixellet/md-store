import React from 'react';

import styles from './TabLabel.module.css'

function TabLabel(props) {

  const {id, label, isActive, setActiveTabFunction, tabsCount} = props;

  const wrapperStyle = {
    width: `calc(100% / ${tabsCount})`,
    height: 40,
    padding: 0,
    margin: 0,
    display: 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
  };

  return (
    <li style={wrapperStyle}>
      <button className={isActive ? `${styles.tabLabel} ${styles.active}` : `${styles.tabLabel} ${styles.inactive}`}
              onClick={(e) => {e.preventDefault(); setActiveTabFunction(id)}}
              disabled={isActive}>
        {label}
      </button>
    </li>
  )
};

export default TabLabel;
