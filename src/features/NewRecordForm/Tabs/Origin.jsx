import React from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import InputDate from '../../CommonComponents/Inputs/InputDate/InputDate';
import styles from './Tabs.module.css';

function Origin(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { values, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);

  return (
    <div className={styles.fields}>
      <div className={styles.two_fields}>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('13')) &&
            <InputDate label={fields[13].description} name={fields[13].name} 
                       isRequired={fields[13].mandatory}
                       value={values[fields[13].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('14')) &&
            <InputDate label={fields[14].description} name={fields[14].name} 
                       isRequired={fields[14].mandatory}
                       value={values[fields[14].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
      </div>
      <div className={styles.two_fields}>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('12')) &&
            <InputDate label={fields[12].description} name={fields[12].name} 
                       isRequired={fields[12].mandatory}
                       value={values[fields[12].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('6')) &&
            <InputDate label={fields[6].description} name={fields[6].name} 
                       isRequired={fields[6].mandatory}
                       value={values[fields[6].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
      </div>
    </div>
  )
};

export default Origin;
