import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../CommonComponents/Header/Header';
import MdList from './MdList/MdList';

import styles from './MainPanel.module.css'
import Filters from './Filters/Filters';
import NewRecord from './NewRecord/NewRecord';
import Tabs from '../CommonComponents/Tabs/Tabs';
import { setActiveTab } from '../../store/reducers/appSlice';

function MainPanel() {
  /**
  * Главная панель приложения.
  * Имеет заголовок и состоит из трех вкладок:
  *   1. "Фильтры" - для поиска записей метаданных,
  *   2. "Метаданные" - для отображения отфильтрованных записей метаданных
  *   3. "Новая запись" - форма ввода новой записи метаданных
  * 
  */
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.app.tabs);
  const activeTab = useSelector((state) => state.app.activeTab);

  let panel;
  switch (activeTab) {
    case 1:
      panel = <Filters />;
      break;
    case 2:
      panel = <MdList />;
      break;
    case 3:
      panel = <NewRecord />;
      break;
    default:
      panel = null;
  }
  
  return (
    <div className={styles.tools_container}>
      <div className={styles.header_wrapper}>
        <Header name='Metadata Manager' />
      </div>
      <div className={styles.tabs_wrapper}>
        <Tabs tabsSet={tabs} activeTab={activeTab}
              setActiveTabFunction={(id) => dispatch(setActiveTab(id))}>
          { panel }
        </Tabs>
      </div>
    </div>
  )
};

export default MainPanel;
