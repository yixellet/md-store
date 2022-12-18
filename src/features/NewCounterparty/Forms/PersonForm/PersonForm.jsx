import React, { useState } from 'react';
import { useAddressLiveSearchQuery, useGetApartmentsQuery, useGetHousesQuery } from '../../../../api/garApi';
import InputRadio from '../../../Tools/NewMd/InputRadio/InputRadio';
import InputSearchField from '../../../Tools/NewMd/InputSearchField/InputSearchField';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import InputTextArea from '../../../Tools/NewMd/InputTextArea/InputTextArea';
import InputSelect from '../../../Tools/NewMd/InputSelect/InputSelect';

import styles from './PersonForm.module.css'

function PersonForm() {

  const [name, setName] = useState('');
  const [patronym, setPatronym] = useState('');
  const [surname, setSurname] = useState('');
  const [inn, setInn] = useState('');

  // Параметры адреса регистрации
  const [regAddrType, setRegAddrType] = useState('reg_gar') // Метод ввода (ссылка на ГАР или текст)
  const [regaddress_ref, setRegaddress_ref] = useState(''); // objectid дома или квартиры в ГАР
  const [regaddress_text, setRegaddress_text] = useState(''); // Адрес в виде текста (для адресов за пределами Астр. обл.)
  const [regaddress_street, setRegaddress_street] = useState(null); // objectid адресного объекта верхнего уровня
                                                                    // (населенного пункта, улицы или территории) в ГАР
  const [regaddress_house, setRegaddress_house] = useState(null); // objectid дома в ГАР

  const [regAddrString, setRegAddrString] = useState('');
  let regAddrStringSkip;
  if(regAddrString.length < 3) {
    regAddrStringSkip = true
  } else {
    regAddrStringSkip = false
  }

  const rAddrHandle = (item) => {
    setRegAddrString(item.name);
    regAddrStringSkip = false;
    setRegaddress_street(item.objectid);
  }

  const { data: liveSearchResults, isSuccess: regaddrsuccess } = useAddressLiveSearchQuery(regAddrString, { skip: regAddrStringSkip });
  const { data: houses, isSuccess: housesSuccess } = useGetHousesQuery(regaddress_street ?? regaddress_street );
  const { data: aprts, isSuccess: aprtsSuccess } = useGetApartmentsQuery(regaddress_house ?? regaddress_house );

  let reg_addr_field;
  if (regAddrType === 'reg_gar') {
    reg_addr_field = <div>
      <InputSearchField name='regaddress_ref' 
                        isRequired={false}
                        value={regAddrString}
                        placeholder='Населенный пункт или улица'
                        results={regaddrsuccess ? liveSearchResults : []}
                        onChangeFunction={setRegAddrString}
                        onClickFunction={rAddrHandle} />
      <div className={styles.houses_aprt}>
        <div className={styles.houseSelect_wrapper}>
          <InputSelect name='regaddress_house'
                       options={houses}
                       onChangeFunction={setRegaddress_house} />
        </div>
        <div className={styles.houseSelect_wrapper}>
          <InputSelect name='regaddress_aprt'
                       options={aprts} />
        </div>
      </div>
    </div>
  } else {
    reg_addr_field = <InputTextArea name='regaddress_text' 
                                isRequired={false}
                                value={regaddress_text} 
                                onChangeFunction={setRegaddress_text} />
  };

  // Параметры почтового адреса
  const [postAddrType, setPostAddrType] = useState('post_gar') // Метод ввода (ссылка на ГАР или текст)
  const [postaddress_ref, setPostaddress_ref] = useState('');
  const [postaddress_text, setPostaddress_text] = useState('');
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
      <div className={styles.contacts_button_wrapper}>
        <button className={styles.contacts_button}>
          <svg xmlns="http://www.w3.org/2000/svg" width="57.258" height="59.24" data-name="Layer 1">
            <path d="M32.677 15.474a2.43 2.43 0 0 1-.89-.27 2.38 2.38 0 0 1-.71-.59 2.32 2.32 0 0 1-.4-.76 2.37 2.37 0 0 1-.1-.84v-.19a2.33 2.33 0 0 1 .85-1.5c.227-.18.484-.32.76-.41a2.14 2.14 0 0 1 .84-.1h.17c.914.098 1.82.262 2.71.49a15.84 15.84 0 0 1 2.49.85 13.59 13.59 0 0 1 4.19 2.83 13.71 13.71 0 0 1 2.86 4.19c.354.794.638 1.617.85 2.46.22.902.376 1.817.47 2.74a2.34 2.34 0 0 1-.51 1.73 2.28 2.28 0 0 1-.7.57 2.33 2.33 0 0 1-.88.28 2.5 2.5 0 0 1-.87-.09 2.48 2.48 0 0 1-.82-.43 2.53 2.53 0 0 1-.57-.69 2.43 2.43 0 0 1-.31-.92 14.54 14.54 0 0 0-.34-2 10.81 10.81 0 0 0-.6-1.77 9.06 9.06 0 0 0-1.89-2.81 8.82 8.82 0 0 0-1.29-1.05 9.55 9.55 0 0 0-1.52-.82 11.74 11.74 0 0 0-1.76-.6 14.28 14.28 0 0 0-2-.35zm2.5-10.79h-.14a2.24 2.24 0 0 1-.82-.25 2.45 2.45 0 0 1-.66-.52 2.43 2.43 0 0 1-.45-.79 2.21 2.21 0 0 1-.13-.89v-.18a2.39 2.39 0 0 1 .24-.81 2.43 2.43 0 0 1 .51-.67 2.34 2.34 0 0 1 .77-.44 2.29 2.29 0 0 1 .91-.13 31.84 31.84 0 0 1 4.75.64 25.34 25.34 0 0 1 4.25 1.29 20.69 20.69 0 0 1 3.73 2 19 19 0 0 1 5.65 5.83 21.11 21.11 0 0 1 1.84 3.79 25.86 25.86 0 0 1 1.15 4.29 32.36 32.36 0 0 1 .48 4.77v.09a2.14 2.14 0 0 1-.16.87 2.38 2.38 0 0 1-2.11 1.47h-.11a2.381 2.381 0 0 1-.85-.17 2.29 2.29 0 0 1-1.28-1.22 2.28 2.28 0 0 1-.21-.9 27.39 27.39 0 0 0-.39-4 20.92 20.92 0 0 0-.92-3.51 16.63 16.63 0 0 0-1.42-3 13.9 13.9 0 0 0-1.92-2.48 14.08 14.08 0 0 0-2.41-2 16.55 16.55 0 0 0-2.93-1.52 19.49 19.49 0 0 0-3.42-1 27.9 27.9 0 0 0-3.92-.52zm-20 22.22a46 46 0 0 0 6.77 9.48 38.78 38.78 0 0 0 10.72 7.91c.296.134.635.134.93 0a3.91 3.91 0 0 0 1.29-.94 15.58 15.58 0 0 0 1.22-1.39c1.72-2.27 3.85-5.08 6.86-3.68l.19.1 10 5.78.1.06a4.55 4.55 0 0 1 1.89 3.91 10.51 10.51 0 0 1-1.48 5 10.12 10.12 0 0 1-4.83 4.27 21.81 21.81 0 0 1-6 1.62 20 20 0 0 1-9.1-.76 40.22 40.22 0 0 1-9.08-4.44l-.24-.16c-1.49-.92-3.09-1.92-4.67-3.09a58.44 58.44 0 0 1-15.47-17.55c-3.21-5.81-5-12.08-4-18.05a13 13 0 0 1 4.38-8.23 11.8 11.8 0 0 1 8.74-2.33 1.25 1.25 0 0 1 1 .65l6.44 10.88a3.41 3.41 0 0 1 .54 3.65 7.12 7.12 0 0 1-2.46 2.76c-.35.29-.76.59-1.19.91-1.45 1-3.08 2.25-2.52 3.67z"/>
          </svg>
        </button>
      </div>
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
