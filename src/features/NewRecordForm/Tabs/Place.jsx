import React from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import TextArea from '../../CommonComponents/Inputs/TextArea/TextArea';
import SelectRegion from '../Inputs/SelectRegion';
import styles from './Tabs.module.css';

function Place(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { values, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);

  return (
    <div className={styles.fields}>
      {
        (fields && Object.keys(fields).includes('26')) &&
        <SelectRegion label={fields[26].description} name={fields[26].name} isRequired={fields[26].mandatory}
                      defaultOption={values.region_ref} onChangeFunction={onChangeFunction} />
      }
      {
        (fields && Object.keys(fields).includes('20')) &&
        <TextArea label={fields[20].description} name={fields[20].name} isRequired={fields[20].mandatory}
                      value={values.extraregioninfo} onChangeFunction={onChangeFunction} />
      }
    </div>
  )
};

export default Place;
