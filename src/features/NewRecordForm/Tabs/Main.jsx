import React from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import SelectSubtype from '../Inputs/SelectSubtype';
import styles from './Tabs.module.css';

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
    </div>
  )
};

export default Main;
