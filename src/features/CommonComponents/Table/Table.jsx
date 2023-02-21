import React, { useState } from 'react';
import { useDeletePersonMutation } from '../../../api/counterparties/persons';

import styles from './Table.module.css';

function Table(props) {
  /**
  * Таблица для отображения различных данных
  *
  * @param {Object} fields Столбцы таблицы в формате 
  *                         {'id': Number, 'name': String, 'description': String}
  * @param {Array} data Данные для отображения
  * @param {Number, String} openInfoId Id открытого для просмотра элемента таблицы
  * @callback editFunction функция, срабатывающая
  *                                на событие onClick по кнопке редактирования
  * @callback viewFunction функция, срабатывающая
  *                                на событие onClick по кнопке просмотра
  */

  /**
   * @type {editFunction}
   * @type {viewFunction} 
   */

  
  const { fields, data, openInfoId, editFunction, viewFunction } = props;

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
    } else {
      setSelectedItem(null);
    };
  };

  const handleView = (event, id) => {
    event.stopPropagation();
    viewFunction(id);
  };

  const { deletePerson, result } = useDeletePersonMutation();

  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          {
            Object.values(fields).map((field) => {
              return <th key={field.id} className={styles.head_cell}>{field.description}</th>
            })
          }
          <th className={styles.head_cell}>
            <div className={styles.icon_wrapper}>
              <svg width="15" height="15" viewBox="0 0 528.899 528.899">
                <path d="m328.883 89.125 107.59 107.589-272.34 272.34L56.604 361.465l272.279-272.34zm189.23-25.948-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zM.3 512.69c-1.958 8.812 5.998 16.708 14.811 14.565l119.891-29.069L27.473 390.597.3 512.69z"/>
              </svg>
            </div>
            <div className={styles.icon_wrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                <path fill="#000" d="M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z"/>
              </svg>
            </div>
            <div className={styles.icon_wrapper}>
              <svg width="15" height="15" viewBox="0 0 24 24">
                <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => {
            return <tr key={item.id} 
                       className={item.id === selectedItem ? `${styles.row} ${styles.selected_row}` : styles.row}
                       onClick={() => handleClick(item.id)}>
              <td className={styles.cell}>{item.surname} {item.name} {item.patronym}</td>
              <td className={styles.cell}>{item.inn}</td>
              <td className={styles.cell}>{item.address.regaddress.text}</td>
              <td className={styles.cell}>
                <div className={styles.buttons_wrapper}>
                  <button className={styles.button} onClick={() => {editFunction()}}>
                    <svg width="15" height="15" viewBox="0 0 528.899 528.899">
                      <path className={styles.svg_polygon} d="m328.883 89.125 107.59 107.589-272.34 272.34L56.604 361.465l272.279-272.34zm189.23-25.948-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zM.3 512.69c-1.958 8.812 5.998 16.708 14.811 14.565l119.891-29.069L27.473 390.597.3 512.69z"/>
                    </svg>
                  </button>
                  <button className={item.id === openInfoId ? styles.button_open : styles.button} 
                          onClick={() => deletePerson(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                      <path className={item.id === openInfoId ? styles.svg_polygon_open : styles.svg_polygon} 
                            d="M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z"/>
                    </svg>
                  </button>
                  <button className={item.id === openInfoId ? styles.button_open : styles.button} 
                          onClick={(e, id) => handleView(e, item.id)}>
                    <svg width="15" height="15" viewBox="0 0 24 24">
                      <path className={item.id === openInfoId ? styles.svg_polygon_open : styles.svg_polygon} 
                            d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
};

Table.defaultProps = {
  fields: {
    1: {
      id: 1,
      name: '<field_1>',
      description: '<field_1>'
    },
    2: {
      id: 2,
      name: '<field_2>',
      description: '<field_2>'
    },
    3: {
      id: 3,
      name: '<field_3>',
      description: '<field_3>'
    },
  },
  data: [],
  openInfoId: null,
  editFunction: () => {},
  viewFunction: () => {}
};

export default Table;
