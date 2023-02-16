import React, { useState } from 'react';
import { useGetGroupsQuery } from '../../../api/dictionaries/groups';
import { useGetSubtypesQuery } from '../../../api/dictionaries/subtypes';
import dateFormater from '../../../common/dateFormatter';
import Button from '../../CommonComponents/Button/Button';
import Checkbox from '../../CommonComponents/Inputs/Checkbox/Checkbox';
import InputDate from '../../CommonComponents/Inputs/InputDate/InputDate';

import styles from './Filters.module.css'

function Filters() {

  const { data: groups, isSuccess: groupIsSuccess } = useGetGroupsQuery();

  const [checked, setChecked] = useState([]);
  const { data: subtypes } = useGetSubtypesQuery(checked.join(','));
  const [subtypesChecked, setSubtypesChecked] = useState([]);

  const handleCheckGroup = (groupId) => {
    let copy = Object.assign([], checked);
    if (copy.indexOf(groupId) === -1) {
      copy.push(groupId);
    } else {
      copy.splice(copy.indexOf(groupId), 1);
      let subtypesCopy = Object.assign([], subtypesChecked);
      Object.values(subtypes).forEach((subtype) => {
        if (subtype.group.id === groupId && subtypesCopy.indexOf(subtype.id) !== -1) {
          subtypesCopy.splice(subtypesCopy.indexOf(subtype.id),1);
        };
      });
      setSubtypesChecked(subtypesCopy);
    };
    setChecked(copy);
  };

  const handleCheckSubtype = (subtypeId) => {
    let copy = Object.assign([], subtypesChecked);
    if (copy.indexOf(subtypeId) === -1) {
      copy.push(subtypeId);
    } else {
      copy.splice(copy.indexOf(subtypeId), 1);
    };
    setSubtypesChecked(copy);
  };

  const dateNow = new Date();
  const [startDate, setStartDate] = useState('2021-01-01');
  const [endDate, setEndDate] = useState(dateFormater(dateNow, '-'));
  
  return (
    <form className={styles.filters_wrapper}>
      <div>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldset_legend}>Типы данных</legend>
          {
            groupIsSuccess && <Checkbox options={groups} name='group' isChecked={checked} onChangeFunction={handleCheckGroup} />
          }
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldset_legend}>Подтипы данных</legend>
          {
            checked.length !== 0 ?
            <Checkbox options={subtypes} name='subtype' isChecked={subtypesChecked} onChangeFunction={handleCheckSubtype} /> :
            <p className={styles.alert}>Выберите тип данных выше</p>
          }
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldset_legend}>Дата состояния местности</legend>
          <div className={styles.date_wrapper}>
            <div className={styles.date}>
              <InputDate showLabel={false} name='startDate' value={startDate} onChangeFunction={setStartDate} />
            </div>
            <div className={styles.date}>
              <InputDate showLabel={false} name='endDate' value={endDate} onChangeFunction={setEndDate} />
            </div>
          </div>
        </fieldset>
      </div>
      <div className={styles.button_wrapper}>
        <Button label='Поиск' />
      </div>
    </form>
  )
};

export default Filters;
