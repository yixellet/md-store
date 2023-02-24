import React from 'react';

import SelectAccessCond from '../Inputs/SelectAccessCond';
import SelectSecretClass from '../Inputs/SelectSecretClass';

import styles from './Tabs.module.css';

function Access(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { values, onChangeFunction } = props;

  return (
    <div className={styles.fields}>
      <SelectSecretClass defaultOption={values.secretclass_ref} 
                    onChangeFunction={onChangeFunction}
                    label='Гриф секретности'
                    name='secretclass_ref' isRequired={true} />
      <SelectAccessCond defaultOption={values.accesscondition_ref} 
                    onChangeFunction={onChangeFunction}
                    label='Условия доступа'
                    name='accesscondition_ref' isRequired={true} />
    </div>
  )
};

export default Access;
