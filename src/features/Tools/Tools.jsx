import React from 'react';
import { useSelector } from 'react-redux';
import NewCounterparty from '../NewCounterparty/NewCounterparty';
import NewLetter from '../NewLetter/NewLetter';
import FiltersTab from './FiltersTab/FiltersTab';
import MdList from './MdList/MdList';
import NewMd from './NewMd/NewMd';
import TabLabel from './TabLabel/TabLabel';

import styles from './Tools.module.css'

function Tools(props) {
  const tabs = useSelector((state) => state.app.tabs);
  const activeTab = useSelector((state) => state.app.activeTab);
  const newLetterForm = useSelector(state => state.app.newLetterForm);
  const newCounterpartyForm = useSelector(state => state.app.newCounterpartyForm);

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
      { newLetterForm.isOpened && <NewLetter defaultType={newLetterForm.defaultType} /> }
      { newCounterpartyForm.isOpened && <NewCounterparty /> }
    </div>
  )
};

export default Tools;
