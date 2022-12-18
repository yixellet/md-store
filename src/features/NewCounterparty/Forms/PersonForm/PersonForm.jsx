import React, { useState } from 'react';
import { useAddressLiveSearchQuery } from '../../../../api/garApi';
import InputRadio from '../../../Tools/NewMd/InputRadio/InputRadio';
import InputSearchField from '../../../Tools/NewMd/InputSearchField/InputSearchField';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import InputTextArea from '../../../Tools/NewMd/InputTextArea/InputTextArea';

import styles from './PersonForm.module.css'

function PersonForm() {

  const [name, setName] = useState('');
  const [patronym, setPatronym] = useState('');
  const [surname, setSurname] = useState('');
  const [inn, setInn] = useState('');
  const [regAddrType, setRegAddrType] = useState('reg_gar')
  const [postAddrType, setPostAddrType] = useState('post_gar')
  const [regaddress_ref, setRegaddress_ref] = useState('');
  const [regaddress_text, setRegaddress_text] = useState('');
  const [regaddress_street, setRegaddress_street] = useState(null);
  const [postaddress_ref, setPostaddress_ref] = useState('');
  const [postaddress_text, setPostaddress_text] = useState('');

  const [regAddrString, setRegAddrString] = useState('');
  let skip;
  if(regAddrString.length < 3) {
    skip = true
  } else {
    skip = false
  }

  const rAddrHandle = (item) => {
    setRegAddrString(item.name);
    skip = false;
    setRegaddress_street(item.objectid);
  }

  const { data: liveSearchResults, isSuccess: regaddrsuccess } = useAddressLiveSearchQuery(regAddrString, { skip });

  let reg_addr_field;
  if (regAddrType === 'reg_gar') {
    reg_addr_field = <InputSearchField name='regaddress_ref' 
                                isRequired={false}
                                value={regAddrString}
                                placeholder='Населенный пункт или улица'
                                results={regaddrsuccess ? liveSearchResults : []}
                                onChangeFunction={setRegAddrString}
                                onClickFunction={rAddrHandle} />
  } else {
    reg_addr_field = <InputTextArea name='regaddress_text' 
                                isRequired={false}
                                value={regaddress_text} 
                                onChangeFunction={setRegaddress_text} />
  };

  let post_addr_field;
  if (postAddrType === 'post_gar') {
    post_addr_field = <InputText name='postaddress_ref' 
                                  isRequired={false}
                                  value={postaddress_ref} 
                                  onChangeFunction={setPostaddress_ref} />
  } else {
    post_addr_field = <InputTextArea name='postaddress_text' 
                                  isRequired={false}
                                  value={postaddress_text} 
                                  onChangeFunction={setPostaddress_text} />
  }
  
  return (
    <>
      <div className={styles.field_pair}>
        <div className={styles.field_wrapper}>
          <InputText label='Имя'
                    name='name' 
                    isRequired={true}
                    value={name} 
                    onChangeFunction={setName} />
        </div>
        <div className={styles.field_wrapper}>
          <InputText label='Отчество (при наличии)'
                    name='patronym' 
                    isRequired={false}
                    value={patronym} 
                    onChangeFunction={setPatronym} />
        </div>
      </div>
      <div className={styles.field_pair}>
        <div className={styles.field_wrapper}>
          <InputText label='Фамилия'
                    name='surname' 
                    isRequired={true}
                    value={surname} 
                    onChangeFunction={setSurname} />
        </div>
        <div className={styles.field_wrapper}>
          <InputText label='ИНН'
                    name='inn' 
                    isRequired={false}
                    value={inn} 
                    onChangeFunction={setInn} />
        </div>
      </div>
      <fieldset className={styles.fieldset}>
        <legend>Адрес регистрации</legend>
        <div className={styles.radio_block}>
          <div className={styles.radio_wrapper}>
            <InputRadio label='ГАР'
                        name='reg_addr_type'
                        value='reg_gar'
                        isChecked={regAddrType}
                        onChangeFunction={setRegAddrType} />
          </div>
          <div className={styles.radio_wrapper}>
            <InputRadio label='Текст'
                        name='reg_addr_type'
                        value='reg_text'
                        isChecked={regAddrType}
                        onChangeFunction={setRegAddrType} />
          </div>
        </div>
        { reg_addr_field }
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>Почтовый адрес</legend>
        <div className={styles.radio_block}>
          <div className={styles.radio_wrapper}>
            <InputRadio label='ГАР'
                        name='post_addr_type'
                        value='post_gar'
                        isChecked={postAddrType}
                        onChangeFunction={setPostAddrType} />
          </div>
          <div className={styles.radio_wrapper}>
            <InputRadio label='Текст'
                        name='post_addr_type'
                        value='post_text'
                        isChecked={postAddrType}
                        onChangeFunction={setPostAddrType} />
          </div>
        </div>
        { post_addr_field }
      </fieldset>
    </>
  )
};

export default PersonForm;
