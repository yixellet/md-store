import React from 'react';

import InputSelect from './InputSelect/InputSelect';
import InputText from './InputText/InputText';
import SubmitButton from '../SubmitButton/SubmitButton';

import styles from './NewMd.module.css'
import { useSelector } from 'react-redux';

function NewMd() {

  const props = useSelector((state) => state.app.mdProps)
  return (
    <form className={styles.newMdForm}>
      <div className={styles.form_fields}>
        <InputSelect label='Тип данных' name='type' options={props.type} />
        <InputText label='Номенклатура' name='nomenclature' />
        <InputSelect label='Масштаб' name='scale' options={props.scale} />
        <InputText label='Количество объектов' name='objectquantity' />
      </div>
      <SubmitButton value='Сохранить' />
    </form>
  )
};

export default NewMd;
