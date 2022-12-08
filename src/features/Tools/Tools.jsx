import React from 'react';
import { useSelector } from 'react-redux';
import NewCpWrapper from '../NewCpWrapper/NewCpWrapper';
import FiltersTab from './FiltersTab/FiltersTab';
import MdList from './MdList/MdList';
import NewMd from './NewMd/NewMd';
import TabLabel from './TabLabel/TabLabel';

import styles from './Tools.module.css'

function Tools(props) {
  const tabs = useSelector((state) => state.app.tabs);
  const activeTab = useSelector((state) => state.app.activeTab);

  let panel;
  switch (activeTab) {
    case 1:
      panel = <FiltersTab />;
      break;
    case 2:
      panel = <MdList />;
      break;
    case 3:
      panel = <NewMd />;
      break;
    default:
      panel = <FiltersTab />;
  }
  
  return (
    <div className={styles.tools_container}>
      <h1 className={styles.header}>MD Manager</h1>
      <form className={styles.form}>
        <input type='search' name='search' className={styles.searchInput} placeholder={`Поиск ...`} />
      </form>
      <div className={styles.tabs_wrapper}>
        <ul className={styles.tabLabels_wrapper}>
          {
            Object.values(tabs).map((item) => {
              return <TabLabel key={item.id} label={item.label} isActive={item.id === activeTab} id={item.id} />
            })
          }
        </ul>
        {panel}
      </div>
      <NewCpWrapper />
    </div>
  )
};

export default Tools;
