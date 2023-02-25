import React from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import SelectStorageFormat from '../Inputs/SelectStorageFormat';
import styles from './Tabs.module.css';

function Storage(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { values, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);

  return (
    <div className={styles.fields}>
    {
      (fields && Object.keys(fields).includes('5')) &&
      <SelectStorageFormat group={values.group_ref} label={fields[5].description} 
                           name={fields[5].name} isRequired={fields[5].mandatory}
                           defaultOption={values[fields[5].name]} onChangeFunction={onChangeFunction} />
    }
    </div>
  )
};

export default Storage;
