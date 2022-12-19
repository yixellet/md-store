import React, { useState } from 'react';
import { useAddressLiveSearchQuery, useGetApartmentsQuery, useGetHousesQuery } from '../../../../api/garApi';
import InputRadio from '../../../Tools/NewMd/InputRadio/InputRadio';
import InputSearchField from '../../../Tools/NewMd/InputSearchField/InputSearchField';
import InputSelectGAR from '../../../Tools/NewMd/InputSelectGAR/InputSelectGAR';
import InputTextArea from '../../../Tools/NewMd/InputTextArea/InputTextArea';
import styles from './AddressFieldset.module.css'

function AddressFieldset(props) {

  // Параметры адреса
  const [inputType, setInputType] = useState('gar') // Метод ввода (текст или ссылка на ГАР)
  const [street, setStreet] = useState(null);       // Объект улицы
  const [house, setHouse] = useState({id:-999, name:'дом'});         // Объект дома
  const [apartment, setApartment] = useState({id:-999, name:'квартира'});         // Объект дома

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
    addrSkip = true;
    setLiveSearchString(item.name);
    setStreet(item);
  };

  // skip для домов
  let houseSkip;
  if(street === null) {
    houseSkip = true;
  } else {
    houseSkip = false;
  };
  // Когда в стейте улицы значение не NULL, происходит запрос списка домов
  const {
    data: houses,
    isSuccess: housesSuccess
  } = useGetHousesQuery(street, { skip: houseSkip });


  // skip для квартир
  let apartmentSkip;
  if(house === null) {
    apartmentSkip = true;
  } else {
    apartmentSkip = false;
  };
  const {
    data: apartments,
    isSuccess: aprtsSuccess
  } = useGetApartmentsQuery(house, { skip: apartmentSkip });

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
              <InputSelectGAR name='house'
                          placeholder='дом'
                          value={house}
                          options={housesSuccess ? houses : []}
                          onChangeFunction={setHouse} />
            </div>
            <div className={styles.houseSelect_wrapper}>
              <InputSelectGAR name='apartment'
                          placeholder='квартира'
                          value={apartment}
                          options={aprtsSuccess ? apartments : []}
                          onChangeFunction={setApartment} />
            </div>
          </div>
        </div>
  } else {
    component = <InputTextArea name='postaddress_text' 
                              isRequired={false}
                              value={props.textAddress}
                              onChangeFunction={props.getTextAddress} />
  }

  return (
    <fieldset className={styles.fieldset}>
      <legend>{props.label}</legend>
      <div className={styles.radio_block}>
        <div className={styles.radio_wrapper}>
          <InputRadio label='ГАР'
                      name={`${props.name}_addr_type`}
                      value='gar' 
                      isChecked={inputType}
                      onChangeFunction={setInputType} />
        </div>
        <div className={styles.radio_wrapper}>
          <InputRadio label='Текст'
                      name={`${props.name}_addr_type`}
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
