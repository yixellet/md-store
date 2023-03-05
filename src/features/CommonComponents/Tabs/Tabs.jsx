import React from 'react';

import TabLabel from './TabLabel/TabLabel';

import styles from './Tabs.module.css'

function Tabs(props) {
  /**
  * Панель вкладок
  * 
  */

  const { tabsSet, activeTab, children, setActiveTabFunction } = props;

  const tabsCount = Object.keys(tabsSet).length;
  
  return (
    <div className={styles.tabs_wrapper}>
      <ul className={styles.tabLabels_wrapper}>
        {
          Object.values(tabsSet).map((tab) => {
            return <TabLabel key={tab.id} label={tab.label} 
                             isActive={tab.id === activeTab} id={tab.id}
                             setActiveTabFunction={setActiveTabFunction}
                             tabsCount={tabsCount} />
          })
        }
      </ul>
      <div className={styles.children_wrapper}>
        { children }
      </div>
    </div>
  )
};

export default Tabs;
