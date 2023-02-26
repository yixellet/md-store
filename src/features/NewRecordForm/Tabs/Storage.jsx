import React from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import SelectStorageFormat from '../Inputs/SelectStorageFormat';
import TextWithButton from '../../CommonComponents/Inputs/TextWithButton/TextWithButton';
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
      (fields && Object.keys(fields).includes('4')) &&
      <TextWithButton label={fields[4].description} name={fields[4].name} 
                      isRequired={fields[4].mandatory}
                      value={values[fields[4].name]} onChangeFunction={onChangeFunction} />
    }
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
