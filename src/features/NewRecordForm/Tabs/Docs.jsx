import React from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import SelectSubtype from '../Inputs/SelectSubtype';
import styles from './Tabs.module.css';

function Docs(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { group, subtype_ref, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(group);

  return (
    <div className={styles.fields}>
    </div>
  )
};

export default Docs;
