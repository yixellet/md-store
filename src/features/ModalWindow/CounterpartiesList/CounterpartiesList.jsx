import React, { useState } from 'react';
import ModalWindow from '../ModalWindow';

import styles from './CounterpartiesList.module.css';
import { useGetTypesQuery } from '../../../api/counterparties/types';
import Header from '../../CommonComponents/Header/Header';
import Radio from '../../CommonComponents/Inputs/Radio/Radio';

function CounterpartiesList(props) {

  const [activeType, setActiveType] = useState('1');

  const { data: types, isSuccess } = useGetTypesQuery();

  return (
    <ModalWindow>
      <div className={styles.window}>
        <Header name='Контрагенты' />
        {
          isSuccess &&
          <Radio name='type' isRequired={false} options={types} isChecked={activeType} onChangeFunction={setActiveType} />
        }
      </div>
    </ModalWindow>
  )
};

export default CounterpartiesList;
