import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../CommonComponents/Header/Header';

import styles from './MainPanel.module.css';
import { setActiveSortingOption } from '../../store/reducers/appSlice';
import MdListItem from './MdListItem/MdListItem';
import NewRecord from './NewRecord/NewRecord';

function MainPanel() {
  /**
  * Главная панель приложения. 
  */
  const dispatch = useDispatch();
  const sortingOptions = useSelector(state => state.app.sortingOptions);
  const activeSortingOption = useSelector(state => state.app.activeSortingOption);
  
  return (
    <div className={styles.tools_container}>
      <div className={styles.header_wrapper}>
        <Header name='Metadata Manager' />
        <NewRecord />
      </div>
      <div className={styles.controls}>
        <select className={styles.sorting} 
                name='sorting' id='sorting' 
                value={activeSortingOption}
                onChange={(event) => {event.preventDefault();dispatch(setActiveSortingOption(event.target.value))}}>
          {
            Object.values(sortingOptions).map((option) => {
              return <option className={styles.sorting_option} key={option.id} value={option.id}>{option.name}</option>
            })
          }
        </select>
        <button className={styles.filters_button}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
            <path className={styles.filters_svg} d="M122.774 16.459c0 5.393-4.412 9.805-9.805 9.805H92.202a21.652 21.652 0 0 0 2.278-9.697 21.64 21.64 0 0 0-2.387-9.913h20.876c5.393 0 9.805 4.412 9.805 9.805zm-33.468 84.798c0 9.15-7.418 16.567-16.568 16.567s-16.567-7.417-16.567-16.567c0-9.149 7.417-16.567 16.567-16.567s16.568 7.417 16.568 16.567zm33.563-.109c0 5.393-4.413 9.805-9.806 9.805H92.202a21.651 21.651 0 0 0 2.278-9.696 21.64 21.64 0 0 0-2.387-9.913h20.97c5.394 0 9.806 4.412 9.806 9.804zm-69.597 9.805H9.816c-5.393 0-9.805-4.412-9.805-9.805s4.412-9.805 9.805-9.805h43.565a21.653 21.653 0 0 0-2.387 9.913c0 3.485.821 6.778 2.278 9.697zM28.326 58.717c0 9.149 7.418 16.567 16.568 16.567 9.149 0 16.567-7.418 16.567-16.567 0-9.15-7.418-16.568-16.567-16.568-9.15-.001-16.568 7.417-16.568 16.568zM0 58.608c0 5.393 4.414 9.805 9.805 9.805H25.48a21.52 21.52 0 0 1-2.278-9.696c0-3.528.861-6.941 2.387-9.914H9.805C4.412 48.803 0 53.215 0 58.608zm64.409 9.805h48.666c5.392 0 9.805-4.412 9.805-9.805 0-5.394-4.412-9.806-9.805-9.806H64.301a21.794 21.794 0 0 1 2.387 9.914 21.52 21.52 0 0 1-2.279 9.697zm24.897-51.846c0 9.15-7.418 16.567-16.568 16.567S56.17 25.718 56.17 16.567C56.17 7.417 63.587 0 72.737 0s16.569 7.417 16.569 16.567zm-36.034 9.697H9.853c-5.393 0-9.805-4.413-9.805-9.805 0-5.393 4.412-9.805 9.805-9.805h43.528a21.653 21.653 0 0 0-2.387 9.913c0 3.485.821 6.778 2.278 9.697z"/>
          </svg>
        </button>
      </div>
      <ul className={styles.list}>
        <MdListItem />
        <MdListItem />
        <MdListItem />
        <MdListItem />
        <MdListItem />
        <MdListItem />
        <MdListItem />
      </ul>
    </div>
  )
};

export default MainPanel;
