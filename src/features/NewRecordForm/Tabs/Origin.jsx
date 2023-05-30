import React from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import InputDate from '../../CommonComponents/Inputs/InputDate/InputDate';
import TextWithButton from '../../CommonComponents/Inputs/TextWithButton/TextWithButton';
import styles from './Tabs.module.css';
import TextArea from '../../CommonComponents/Inputs/TextArea/TextArea';

function Origin(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { values, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);

  return (
    <div className={styles.fields}>
      {
        (fields && Object.keys(fields).includes('32')) &&
        <TextArea label={fields[32].description} name={fields[32].name} 
        isRequired={fields[32].mandatory}
        value={values[fields[32].name]} onChangeFunction={onChangeFunction} />
        /*<TextWithButton label={fields[18].description} name={fields[18].name} 
            isRequired={fields[18].mandatory}
            value={values[fields[18].name]} onChangeFunction={onChangeFunction} />*/
      }
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
      {
        (fields && Object.keys(fields).includes('33')) &&
        <TextArea label={fields[33].description} name={fields[33].name} 
        isRequired={fields[33].mandatory}
        value={values[fields[33].name]} onChangeFunction={onChangeFunction} />
        /*<TextWithButton label={fields[17].description} name={fields[17].name} 
                        isRequired={fields[17].mandatory}
                        value={values[fields[17].name]} onChangeFunction={onChangeFunction} />*/
      }
    </div>
  )
};

export default Origin;