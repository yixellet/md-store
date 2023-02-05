import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAddPersonMutation } from '../../../../api/cpApi';
import { openCloseNewCounterpartyForm } from '../../../../store/reducers/appSlice';
import InputReset from '../../../Tools/NewMd/InputReset/InputReset';
import InputSubmit from '../../../Tools/NewMd/InputSubmit/InputSubmit';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import Confirm from '../../Confirm/Confirm';
import AddressFieldset from '../AddressFieldset/AddressFieldset';
import Contacts from '../Contacts/Contacts';

import styles from './EntityForm.module.css'

function EntityForm() {

  const dispatch = useDispatch();

  const [isConfirmOpened, setConfirm] = useState(false);

  const initialState = {
    name: null,
    patronym: null,
    surname: null,
    inn: null,
    regaddress_ref: null,
    regaddress_text: null,
    postaddress_ref: null,
    postaddress_text: null,
    phoneNumber: null,
    email: null
  };

  const [formValues, setFormValues] = useState(initialState);
  // const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [addPerson, { data, isLoading }] = useAddPersonMutation();

  const handleSubmit = () => {
    setConfirm(true)
  };
  
  const handleSubmitTrue = async() => {
    setConfirm(false);
    await addPerson(formValues).unwrap();
    dispatch(openCloseNewCounterpartyForm());
  };
  
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
                        value={formValues.name === null ? '' : formValues.name} 
                        onChangeFunction={handleChange} />
            </div>
            <div className={styles.field_wrapper}>
              <InputText label='Отчество (при наличии)'
                        name='patronym' 
                        isRequired={false}
                        value={formValues.patronym === null ? '' : formValues.patronym} 
                        onChangeFunction={handleChange} />
            </div>
          </div>
          <div className={styles.field_pair}>
            <div className={styles.field_wrapper}>
              <InputText label='Фамилия'
                        name='surname' 
                        isRequired={true}
                        value={formValues.surname === null ? '' : formValues.surname} 
                        onChangeFunction={handleChange} />
            </div>
            <div className={styles.field_wrapper}>
              <InputText label='ИНН'
                        name='inn' 
                        isRequired={false}
                        value={formValues.inn === null ? '' : formValues.inn} 
                        onChangeFunction={handleChange} />
            </div>
          </div>
          <AddressFieldset label='Адрес регистрации'
                          name='reg'
                          textAddress={formValues.regaddress_text === null ? '' : formValues.regaddress_text}
                          onChangeFunction={handleChange} />
          <AddressFieldset label='Почтовый адрес'
                          name='post'
                          textAddress={formValues.postaddress_text === null ? '' : formValues.postaddress_text}
                          onChangeFunction={handleChange} />
        </div>
        <div className={styles.fields_column}>
          <Contacts type='phoneNumber' 
                    value={formValues.phoneNumber === null ? '' : formValues.phoneNumber} 
                    onChangeFunction={handleChange} />
          <Contacts type='email' 
                    value={formValues.email === null ? '' : formValues.email} 
                    onChangeFunction={handleChange} />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button_wrapper}>
          <InputSubmit value='Сохранить' onClickFunction={() => handleSubmit()} />
        </div>
        <div className={styles.button_wrapper}>
          <InputReset value='Отменить и закрыть' onClickFunction={handlerReset} />
        </div>
      </div>
      {
        isConfirmOpened &&
        <Confirm data={formValues} resetFunction={() => setConfirm(false)} submitFunction={() => handleSubmitTrue()} />
      }
    </form>
  )
};

export default EntityForm;
