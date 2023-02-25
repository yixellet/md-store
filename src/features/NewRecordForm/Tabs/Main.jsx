import React from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import SelectHeightSys from '../Inputs/SelectHeightSys';
import SelectRefSystem from '../Inputs/SelectRefSystem';
import SelectScale from '../Inputs/SelectScale';
import SelectSubtype from '../Inputs/SelectSubtype';
import Text from '../../../features/CommonComponents/Inputs/Text/Text';
import styles from './Tabs.module.css';
import TextArea from '../../CommonComponents/Inputs/TextArea/TextArea';

function Main(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { values, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);

  return (
    <div className={styles.fields}>
      <SelectSubtype group={values.group_ref} defaultOption={values.subtype_ref} 
                    onChangeFunction={onChangeFunction}
                    label='Вид пространственных данных (подтип)'
                    name='subtype_ref' isRequired={true} />
      {
        (fields && Object.keys(fields).includes('15')) &&
        <TextArea label={fields[15].description} name={fields[15].name} isRequired={fields[15].mandatory}
                      value={values[fields[15].name]} onChangeFunction={onChangeFunction} />
      }
      <div className={styles.two_fields}>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('1')) &&
            <Text label={fields[1].description} name={fields[1].name} isRequired={fields[1].mandatory}
                  value={values[fields[1].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('3')) &&
            <Text label={fields[3].description} name={fields[3].name} isRequired={fields[3].mandatory}
                  value={values[fields[3].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
      </div>
      <div className={styles.two_fields}>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('2')) &&
            <SelectScale label={fields[2].description} name={fields[2].name} isRequired={fields[2].mandatory}
                          defaultOption={values[fields[2].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('7')) &&
            <SelectScale label={fields[7].description} name={fields[7].name} isRequired={fields[7].mandatory}
                          defaultOption={values[fields[7].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
      </div>
      <div className={styles.two_fields}>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('16')) &&
            <SelectRefSystem label={fields[16].description} name={fields[16].name} isRequired={fields[16].mandatory}
                          defaultOption={values[fields[16].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
        <div className={styles.field_wrapper}>
          {
            (fields && Object.keys(fields).includes('30')) &&
            <SelectHeightSys label={fields[30].description} name={fields[30].name} isRequired={fields[30].mandatory}
                          defaultOption={values[fields[30].name]} onChangeFunction={onChangeFunction} />
          }
        </div>
      </div>
      {
        (fields && Object.keys(fields).includes('22')) &&
        <TextArea label={fields[22].description} name={fields[22].name} isRequired={fields[22].mandatory}
                      value={values[fields[22].name]} onChangeFunction={onChangeFunction} />
      }
    </div>
  )
};

export default Main;
