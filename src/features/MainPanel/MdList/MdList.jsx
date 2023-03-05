import React from 'react';

import styles from './MdList.module.css'
import MdListItem from './MdListItem/MdListItem';

function MdList() {

  const rec1 = {
    group_ref: {
      id:1,
    },
    subtype_ref: {
      id:1,
      name: 'Цифровой план города'
    },
    nomenclature: 'R-38-83-А-в',
    scale: {
      id:1,
      name: '1:10 000'
    },
    referencesystem_ref: {
      id:12,
      name: 'Местная система координат'
    },
  };

  const rec2 = {
    group_ref: {
      id:2,
    },
    subtype_ref: {
      id:1,
      name: 'Технический отчет по картографическим работам в цифровом виде'
    },
    name: 'Топоплан Астрахани'
  };

  const rec3 = {
    group_ref: {
      id:3,
    },
    subtype_ref: {
      id:1,
      name: 'Дежурные экземпляры справочников административно-территориального деления субъектов Российской Федерации'
    }
  };

  const rec4 = {
    group_ref: {
      id:4,
    },
    subtype_ref: {
      id:1,
      name: 'Прочие цифровые материалы по созданию и ведению государственных нивелирных сетей, геодезических сетей всех классов и разрядов, гравиметрических фундаментальной и первого класса сетей'
    }
  };

  const rec5 = {
    group_ref: {
      id:5,
    },
    subtype_ref: {
      id:1,
      name: 'Цифровые технические и научно-технические отчеты по созданию, развитию и поддержанию в рабочем состоянии государственных нивелирных, геодезических сетей всех классов и разрядов, гравиметрических фундаментальной и 1-го класса сетей, а также астрономических пунктов и пунктов базисных сетей'
    }
  };
  
  return (
    <ul className={styles.list}>
      <MdListItem record={rec1} />
      <MdListItem record={rec2} />
      <MdListItem record={rec3} />
      <MdListItem record={rec4} />
      <MdListItem record={rec5} />
      <MdListItem />
      <MdListItem />
      <MdListItem />
      <MdListItem />
      <MdListItem />
      <MdListItem />
      <MdListItem />
    </ul>
  )
};

export default MdList;
