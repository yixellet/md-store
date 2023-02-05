import React, { useState } from 'react';
import { useAddressLiveSearchQuery, useGetApartmentsQuery, useGetHousesQuery } from '../../../../api/garApi';
import InputRadio from '../../../Tools/NewMd/InputRadio/InputRadio';
import InputSearchField from '../../../Tools/NewMd/InputSearchField/InputSearchField';
import InputSelectGAR from '../../../Tools/NewMd/InputSelectGAR/InputSelectGAR';
import InputTextArea from '../../../Tools/NewMd/InputTextArea/InputTextArea';
import styles from './AddressFieldset.module.css'

function AddressFieldset(props) {

  // Параметры адреса
  const [inputType, setInputType] = useState('text');                      // Метод ввода (текст или ссылка на ГАР)

  const initialAddress = {
    addr_obj: null,
    house: null,
    apartment: null
  };
  const [garAddress, setGarAddress] = useState(initialAddress);

  const handleChangeInputType = (event) => {
    setInputType(event.target.value);
    setGarAddress(initialAddress);
    setLiveSearchString('');
    props.onChangeFunction({
      target: {
        name: `${props.name}address_ref`, 
        value: null 
      }
    });
    props.onChangeFunction({
      target: {
        name: `${props.name}address_text`, 
        value: null 
      }
    });
  };

  const [liveSearchString, setLiveSearchString] = useState('');           // Поисковый запрос для живого поиска
  
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
    setGarAddress({ addr_obj: item.objectid, house: null, apartment: null });
  };

  const chooseHandle = (event) => {
    setGarAddress({ ...garAddress, [event.target.name]: event.target.value })
    props.onChangeFunction({
      target: {
        name: `${props.name}address_${inputType}`, 
        value: event.target.value 
      }
    });
  };
  
  // skip для домов
  let houseSkip;
  if(garAddress.addr_obj === null) {
    houseSkip = true;
  } else {
    houseSkip = false;
  };
  // Когда в стейте улицы значение не NULL, происходит запрос списка домов
  const {
    data: houses,
    isSuccess: housesSuccess
  } = useGetHousesQuery(garAddress.addr_obj, { skip: houseSkip });


  // skip для квартир
  let apartmentSkip;
  if(garAddress.house === null) {
    apartmentSkip = true;
  } else {
    apartmentSkip = false;
  };
  const {
    data: apartments,
    isSuccess: aprtsSuccess
  } = useGetApartmentsQuery(garAddress.house, { skip: apartmentSkip });

  let component;
  if (inputType === 'ref') {
    component = <div>
          <InputSearchField name={`${props.name}address_${inputType}`} 
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
                          value={garAddress.house === null ? -999 : garAddress.house}
                          options={housesSuccess ? houses : []}
                          onChangeFunction={chooseHandle} />
            </div>
            <div className={styles.houseSelect_wrapper}>
              <InputSelectGAR name='apartment'
                          placeholder='квартира'
                          value={garAddress.apartment === null ? -999 : garAddress.apartment}
                          options={aprtsSuccess ? apartments : []}
                          onChangeFunction={chooseHandle} />
            </div>
          </div>
        </div>
  } else {
    component = <InputTextArea name={`${props.name}address_${inputType}`} 
                              isRequired={false}
                              value={props.textAddress}
                              onChangeFunction={props.onChangeFunction} />
  }

  return (
    <fieldset className={styles.fieldset}>
      <legend>{props.label}</legend>
      <div className={styles.radio_block}>
        <div className={styles.radio_wrapper}>
          <InputRadio label='ГАР'
                      name={`${props.name}_addr_type`}
                      value='ref' 
                      isChecked={inputType}
                      onChangeFunction={handleChangeInputType} />
        </div>
        <div className={styles.radio_wrapper}>
          <InputRadio label='Текст'
                      name={`${props.name}_addr_type`}
                      value='text'
                      isChecked={inputType}
                      onChangeFunction={handleChangeInputType} />
        </div>
      </div>
      { component }
    </fieldset>
  )
};

export default AddressFieldset;
