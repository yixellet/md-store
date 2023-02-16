import React, { useState } from 'react';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import Button from '../../CommonComponents/Button/Button';
import SelectGroup from './Inputs/SelectGroup';

import styles from './NewRecord.module.css'
import selectWidget from './selectWidget';

function NewRecord() {

  const [common, setCommon] = useState({
    group: 1,
    storageformat_ref: 1,
    subtype_ref: 1,
    scale: -1,
    minscale: -1,
    referencesystem_ref: -1,
    heightsystem_ref: -1,
    secretclass_ref: -1,
    accesscondition_ref: -1,
    name: '',
    nomenclature: '',
    comment: '',
    guid: '',
    objectquantity: '',
    regions_ref: 12
  });

  const chooseGroup = (event) => {
    const copy = Object.assign({}, common)
    copy[event.target.name] = event.target.value;
    setCommon(copy);
  };

  const { data: fields, isSuccess } = useGetFieldsQuery(common.group);


  return (
    <form className={styles.newMdForm}>
      <div className={styles.fields}>
        <SelectGroup defaultOption={common.group} onChangeFunction={chooseGroup} />
        {
          isSuccess &&
          Object.values(fields).map((field) => {
            return selectWidget(field, chooseGroup, common);
          })
        }
      </div>
      <div className={styles.button_wrapper}>
        <Button label='Сохранить' />
      </div>
    </form>
  );
};

export default NewRecord;
