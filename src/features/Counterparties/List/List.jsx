import React, { useState } from 'react';

import styles from './List.module.css';
import { useGetTypesQuery } from '../../../api/counterparties/types';
import Header from '../../CommonComponents/Header/Header';
import Radio from '../../CommonComponents/Inputs/Radio/Radio';
import PersonsList from './PersonsList/PersonsList';
import ModalWindow from '../../CommonComponents/ModalWindow/ModalWindow';
import Button from '../../CommonComponents/Button/Button';
import PersonsInfo from '../Info/PersonsInfo/PersonsInfo';

function List(props) {

  const [activeType, setActiveType] = useState('1');
  const [openInfoId, setOpenInfoId] = useState(null);

  const handleOpenInfo = (id) => {
    if (id === openInfoId) {
      setOpenInfoId(null);
    } else {
      setOpenInfoId(id);
    };
  };

  const { data: types, isSuccess } = useGetTypesQuery();

  let table;
  let info;
  if (activeType === '1') {
    table = <PersonsList viewFunction={handleOpenInfo} openInfoId={openInfoId} />;
    info = <PersonsInfo id={openInfoId} />;
  } else {
    table = null;
    info = null;
  };

  return (
    <ModalWindow>
      <div className={styles.wrapper}>
        <div className={styles.window}>
          <Header name='Контрагенты' />
          <div className={styles.radio_add_wrapper}>
            {
              isSuccess &&
              <Radio name='type' isRequired={false} options={types} isChecked={activeType} onChangeFunction={setActiveType} />
            }
            <div className={styles.button_wrapper}>
              <Button label='+ Добавить' />
            </div>
          </div>
          { table }
        </div>
        { openInfoId && info }
      </div>
    </ModalWindow>
  )
};

export default List;
