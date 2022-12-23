import React, { useState } from 'react';
import InputText from '../../../Tools/NewMd/InputText/InputText';

import styles from './PersonForm.module.css'
import AddressFieldset from '../AddressFieldset/AddressFieldset';
import InputSubmit from '../../../Tools/NewMd/InputSubmit/InputSubmit';
import InputReset from '../../../Tools/NewMd/InputReset/InputReset';
import { openCloseNewCounterpartyForm } from '../../../../store/reducers/appSlice';
import { useDispatch } from 'react-redux';
import Contacts from '../Contacts/Contacts';

function PersonForm() {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [patronym, setPatronym] = useState('');
  const [surname, setSurname] = useState('');
  const [inn, setInn] = useState('');
  const [regaddress_ref, setRegaddress_ref] = useState(null); // objectid дома или квартиры в ГАР
  const [regaddress_text, setRegaddress_text] = useState(''); // Адрес в виде текста (для адресов за пределами Астр. обл.)
  const [postaddress_ref, setPostaddress_ref] = useState(null);
  const [postaddress_text, setPostaddress_text] = useState('');
  

  const handlerReset = () => {
    dispatch(openCloseNewCounterpartyForm());
  };

  return (
    <form>
      <div className={styles.all_fields}>
        <div className={styles.fields_column}>
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
          <AddressFieldset label='Адрес регистрации'
                          name='reg'
                          textAddress={regaddress_text}
                          getTextAddress={setRegaddress_text}
                          getGARAddress={setRegaddress_ref} />
          <AddressFieldset label='Почтовый адрес'
                          name='post'
                          textAddress={postaddress_text}
                          getTextAddress={setPostaddress_text}
                          getGARAddress={setPostaddress_ref} />
        </div>
        <div className={styles.fields_column}>
          <Contacts type='phone' />
          <Contacts type='email' />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button_wrapper}>
          <InputSubmit value='Сохранить' onClickFunction={handlerReset} />
        </div>
        <div className={styles.button_wrapper}>
          <InputReset value='Отменить и закрыть' onClickFunction={handlerReset} />
        </div>
      </div>
    </form>
  )
};

export default PersonForm;
