import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../CommonComponents/Header/Header';
import MdList from './MdList/MdList';
import NewMetadataItemForm from './NewMd/NewMetadataItemForm';
import TabLabel from './TabLabel/TabLabel';

import styles from './MainPanel.module.css'
import Filters from './Filters/Filters';

function MainPanel() {
  /**
  * Главная панель приложения.
  * Имеет заголовок и состоит из трех вкладок:
  *   1. "Фильтры" - для поиска записей метаданных,
  *   2. "Метаданные" - для отображения отфильтрованных записей метаданных
  *   3. "Новая запись" - форма ввода новой записи метаданных
  * 
  */

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
      panel = <NewMetadataItemForm />;
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
        <ul className={styles.tabLabels_wrapper}>
          {
            Object.values(tabs).map((item) => {
              return <TabLabel key={item.id} label={item.label} isActive={item.id === activeTab} id={item.id} />
            })
          }
        </ul>
        { panel }
      </div>
    </div>
  )
};

export default MainPanel;
