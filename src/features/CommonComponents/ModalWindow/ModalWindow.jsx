import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { openCloseModalWindow } from '../../../store/reducers/appSlice';

import styles from './ModalWindow.module.css';

function ModalWindow(props) {

  const dispatch = useDispatch();
  const window = useRef(null);

  const closeWindow = (event) => {
    if (event.currentTarget === event.target) {
      dispatch(openCloseModalWindow());
    }
  }

  return (
    <div className={styles.background} onClick={(e) => closeWindow(e)}>
      <div ref={window} className={styles.window}>
        {props.children}
      </div>
    </div>
  )
};

export default ModalWindow;
