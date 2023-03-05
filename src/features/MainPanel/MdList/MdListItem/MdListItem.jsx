import React from 'react';
import PropTypes from 'prop-types';

import styles from './MdListItem.module.css'

function MdListItem(props) {
  /**
   * Краткая информация о записи метаданных
   * (для отображения результатов поиска)
   * 
   * @callback editCallback
   * @callback copyCallback
   * @param {Object} record - Запись метаданных
   *  @param {Object} record.group_ref - Тип данных
   *    @param {Number} record.group_ref.id - Идентификатор типа
   *    @param {String} record.group_ref.name - Название типа
   *  @param {Object} record.subtype_ref - Вид (подтип) пространственных данных
   *    @param {Number} record.subtype_ref.id - Идентификатор подтипа
   *    @param {String} record.subtype_ref.name - Название подтипа
   *  @param {String=} record.nomenclature - Номенклатура (для типов "Цифровая картографическая продукция",
   *                                         "Карты, атласы и границы" и "Данные ДЗЗ")
   *  @param {String=} record.name - Название объекта
   *  @param {Object=} record.scale - Масштаб (для типов "Цифровая картографическая продукция",
   *                                         "Карты, атласы и границы" и "Данные ДЗЗ")
   *    @param {Number} record.scale.id - Идентификатор масштаба
   *    @param {String} record.scale.name - Значение масштаба
   *  @param {Object=} record.referencesystem_ref - Система координат
   *    @param {Number} record.referencesystem_ref.id - Идентификатор СК
   *    @param {String} record.referencesystem_ref.name - Название СК
   *  @param {Date=} record.areastatedate - Дата состояния местности (для всех типов, кроме "Геодезические материалы")
   *  @param {Date=} record.objectcreatedat - Дата создания (для типа "Геоезические материалы")
   *  @param {Object=} record.secretclass_ref - Гриф секретности
   *    @param {Number} record.secretclass_ref.id - Идентификатор грифа
   *    @param {String} record.secretclass_ref.name - Название грифа
   *  @param {Object=} record.storageformat_ref - Формат хранения
   *    @param {Number} record.storageformat_ref.id - Идентификатор формата
   *    @param {String} record.storageformat_ref.name - Название формата
   */

  /**
   * @param {editCallback}
   * @param {copyCallback}
   */
  
  const { record, editCallback, copyCallback } = props;

  const backgroundColor = `group${record.group_ref.id}`;
  
  return (
    <li className={`${styles.item_wrapper} ${styles[backgroundColor]}`}>
      <div className={styles.desc_wrapper}>
        <p className={styles.subtype}>{record.subtype_ref.name}</p>
        <p className={styles.nomenclature}>{record.nomenclature || record.name}</p>
        <div className={styles.scale_refsys}>
          {
            record.scale && <p className={styles.scale}>{record.scale.name}</p>
          }
          {
            record.referencesystem_ref && <p className={styles.scale}>{record.referencesystem_ref.name}</p>
          }
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttons_top}>
          <button className={styles.button}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.button_svg_wrapper} viewBox="0 0 528.899 528.899">
              <path className={styles.button_svg} d="m328.883 89.125 107.59 107.589-272.34 272.34L56.604 361.465l272.279-272.34zm189.23-25.948-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zM.3 512.69c-1.958 8.812 5.998 16.708 14.811 14.565l119.891-29.069L27.473 390.597.3 512.69z"/>
            </svg>
          </button>
          <button className={styles.button}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.button_svg_wrapper}>
              <path d="M1.688.519h8.125v11.215H1.688Z" className={styles.copy_icon}/>
              <path d="M9.802 2.43h3.362v12.05H5.051v-2.582" className={styles.copy_icon}/>
            </svg>
          </button>
          <button className={styles.button}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.button_svg_wrapper} viewBox="0 0 3.969 3.969">
              <circle cx="2.361" cy="1.608" r="1.409" className={styles.find_icon_circle}/>
              <path d="M.205 3.785 1.4 2.535" className={styles.find_icon_stroke}/>
            </svg>
          </button>
        </div>
        <button className={styles.button}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.button_svg_wrapper}>
            <path className={styles.button_svg} d="M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z"/>
          </svg>
        </button>
      </div>
    </li>
  )
};

MdListItem.propTypes = {
  record: PropTypes.shape({
    group_ref: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    subtype_ref: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    nomenclature: PropTypes.string,
    name: PropTypes.string,
    scale: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    referencesystem_ref: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    areastatedate: PropTypes.string,
    objectcreatedat: PropTypes.string,
    secretclass_ref: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    storageformat_ref: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
  editCallback: PropTypes.func,
  copyCallback: PropTypes.func,
};

MdListItem.defaultProps = {
  record: {
    group_ref: {
      id: 1,
      name: 'Цифровая картографическая продукция',
    },
    subtype_ref: {
      id: 1,
      name: 'Технические и научно-технические отчеты по созданию, развитию и поддержанию в рабочем состоянии государственных нивелирных, геодезических сетей всех классов и разрядов, гравиметрических фундаментальной и 1-го класса сетей, а также астрономических пунктов и пунктов базисных сетей',
    },
    nomenclature: '<nomenclature>',
    name: '<name>',
    scale: {
      id: -1,
      name: 'Не установлено',
    },
    referencesystem_ref: {
      id: -1,
      name: 'Не установлено',
    },
    areastatedate: '<areastatedate>',
    objectcreatedat: '<objectcreatedat>',
    secretclass_ref: {
      id: -1,
      name: 'Не установлено',
    },
    storageformat_ref: {
      id: -1,
      name: 'Не установлено',
    },
  },
  editCallback: () => {},
  copyCallback: () => {},
}

export default MdListItem;
