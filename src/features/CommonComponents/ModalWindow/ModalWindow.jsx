import React from 'react';

import styles from './ModalWindow.module.css';

function ModalWindow(props) {
  /**
  * Обёртка модального окна. Затемненный фон, контейнер окна
  * Закрытие осуществляется по ЛКМ на фоне.
  *
  * @param {Any} children Содержимое окна
  * @callback closeFunction функция для закрытия окна
  */

  /** @type {closeFunction} */

  const { children, closeFunction } = props;

  const closeWindow = (event) => {
    if (event.currentTarget === event.target) {
      closeFunction();
    }
  }

  return (
    <div className={styles.background} onClick={(e) => closeWindow(e)}>
      <div className={styles.window}>
        {children}
      </div>
    </div>
  )
};

ModalWindow.defaultProps = {
  children: null,
  closeFunction: () => {},
};

export default ModalWindow;
