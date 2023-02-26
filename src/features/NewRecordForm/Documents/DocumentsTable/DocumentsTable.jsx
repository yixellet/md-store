import React from 'react';
import PropTypes from 'prop-types';

import styles from './DocumentsTable.module.css'
import Pagination from '../../../CommonComponents/Pagination/Pagination';

function DocumentsTable (props) {
  /**
  * Таблица для выбора документа.
  *
  * @param {String} label Подпись кнопки
  * @param {String} color Цвет кнопки (два варианта - green и grey)
  * @callback onClickFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** @type {onClickFunction} */

  const { label, color, onClickFunction } = props;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Выберите документ</h2>
      <div className={styles.search_wrapper}>

      </div>
      <div className={styles.table}>

      </div>
      <Pagination totalPages={5} currentPage={1} />
    </div>
  )
};

DocumentsTable.defaultProps = {
  label: '<button_name>',
  color: 'green',
  onClickFunction: () => {},
};

DocumentsTable.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onClickFunction: PropTypes.func,
};

export default DocumentsTable;
