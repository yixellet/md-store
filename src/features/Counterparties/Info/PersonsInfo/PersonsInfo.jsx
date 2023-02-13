import React from 'react';
import { useGetPersonQuery } from '../../../../api/counterparties/persons';
import Info from '../../../CommonComponents/Info/Info';

import styles from './PersonsInfo.module.css';

function PersonsInfo(props) {
  /**
  *  Адаптация панели информации для отображения физ.лица
  *
  *  @param {Number, String} id Id физ.лица
  */

  const { data, isSuccess } = useGetPersonQuery(props.id);

  return (
    isSuccess && <Info data={data} />
  )
};

PersonsInfo.defaultProps = {
  id: 1,
};

export default PersonsInfo;
