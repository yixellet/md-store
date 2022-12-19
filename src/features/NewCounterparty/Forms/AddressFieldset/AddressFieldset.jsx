import { skipToken } from '@reduxjs/toolkit/dist/query';
import React, { useState } from 'react';
import { useAddressLiveSearchQuery, useGetApartmentsQuery, useGetHousesQuery } from '../../../../api/garApi';
import InputRadio from '../../../Tools/NewMd/InputRadio/InputRadio';
import InputSearchField from '../../../Tools/NewMd/InputSearchField/InputSearchField';
import InputSelect from '../../../Tools/NewMd/InputSelect/InputSelect';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import InputTextArea from '../../../Tools/NewMd/InputTextArea/InputTextArea';
import styles from './AddressFieldset.module.css'

function AddressFieldset(props) {

  // Параметры адреса
  const [inputType, setInputType] = useState('gar') // Метод ввода (текст или ссылка на ГАР)
  const [objectid, setObjectid] = useState('');     // Objectid конечного элемента, который идёт на выход
  const [street, setStreet] = useState(null);       // Объект улицы
  const [house, setHouse] = useState(null);         // Объект дома
  const [apartment, setApartment] = useState(null);         // Объект дома

  const [liveSearchString, setLiveSearchString] = useState(''); // Поисковый запрос для живого поиска
  
  // skip для живого поиска
  let addrSkip;
  if(liveSearchString.length < 3) {
    addrSkip = true;
  } else {
    addrSkip = false;
  };

  // Живой поиск улицы
  const {
    data: liveSearchResults,
    isSuccess: streetSuccess
  } = useAddressLiveSearchQuery(liveSearchString, { skip: addrSkip });

  const chooseStreetHandle = (item) => {
    // При выбооре улицы из найденных живым поиском
    // в строке поиска прописывается полный адрес найденной улицы,
    // skip ставится в значение TRUE,
    // а в стейт записывается объект улицы.
    setLiveSearchString(item.name);
    addrSkip = true;
    setStreet(item);
  };

  // Когда в стейте улицы значение не NULL, происходит запрос списка домов
  const {
    data: houses,
    isSuccess: housesSuccess
  } = useGetHousesQuery(street ?? skipToken);

  const {
    data: apartments,
    isSuccess: aprtsSuccess
  } = useGetApartmentsQuery(house ?? skipToken);

  let component;
  if (inputType === 'gar') {
    component = 
        <div>
          <InputSearchField name='regaddress_ref' 
                            isRequired={false}
                            value={liveSearchString}
                            placeholder='Населенный пункт или улица'
                            results={streetSuccess ? liveSearchResults : []}
                            onChangeFunction={setLiveSearchString}
                            onClickFunction={chooseStreetHandle} />
          <div className={styles.houses_aprt}>
            <div className={styles.houseSelect_wrapper}>
              <InputSelect name='house'
                          options={houses}
                          onChangeFunction={setHouse} />
            </div>
            <div className={styles.houseSelect_wrapper}>
              <InputSelect name='apartment'
                          options={apartments}
                          onChangeFunction={setApartment} />
            </div>
          </div>
        </div>
  } else {
    component = <InputTextArea name='postaddress_text' 
                              isRequired={false}
                              value={props.textAddress}
                              onChangeFunction={props.getTextAddressFunction} />
  }

  return (
    <fieldset className={styles.fieldset}>
      <legend>{props.label}</legend>
      <div className={styles.radio_block}>
        <div className={styles.radio_wrapper}>
          <InputRadio label='ГАР'
                      name='addr_type'
                      value='gar' 
                      isChecked={inputType}
                      onChangeFunction={setInputType} />
        </div>
        <div className={styles.radio_wrapper}>
          <InputRadio label='Текст'
                      name='addr_type'
                      value='text'
                      isChecked={inputType}
                      onChangeFunction={setInputType} />
        </div>
      </div>
      { component }
    </fieldset>
  )
};

export default AddressFieldset;
