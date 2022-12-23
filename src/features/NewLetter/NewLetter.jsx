import React, { useState } from 'react';
import { useGetLetterTypesQuery } from '../../api/mdApi';
import InputDate from '../Tools/NewMd/InputDate/InputDate';
import InputSubmit from '../Tools/NewMd/InputSubmit/InputSubmit';
import InputText from '../Tools/NewMd/InputText/InputText';
import InputTextArea from '../Tools/NewMd/InputTextArea/InputTextArea';
import InputTextWithButton from '../Tools/NewMd/InputTextWithButton/InputTextWithButton';

import dateFormatter from '../../common/dateFormatter';

import styles from './NewLetter.module.css'
import { useAddLetterMutation } from '../../api/lettersApi';
import InputReset from '../Tools/NewMd/InputReset/InputReset';
import { useDispatch } from 'react-redux';
import { closeNewLetterWindow, openCloseNewCounterpartyForm } from '../../store/reducers/appSlice';

function NewLetter(props) {
  const dispatch = useDispatch();

  const [type_ref ,setLetterType] = useState(props.defaultType);
  const [number, setNumber] = useState('');
  const dateNow = new Date();
  const [date, setDate] = useState(dateFormatter(dateNow, '-'));
  const [theme, setTheme] = useState('');
  const [sender_ref, setSender] = useState('');
  const [addressee_ref, setAddressee] = useState('');

  const resetFormProps = () => {
    setLetterType(props.defaultType);
    setNumber('');
    setDate(dateFormatter(dateNow, '-'));
    setTheme('');
    setSender('');
    setAddressee('');
  }
  
  const {data: types, isSuccess: typesSuccess } = useGetLetterTypesQuery();
  const [addLetter, { isLoading }] = useAddLetterMutation();


  const handlerSubmit = async() => {
    await addLetter({ number, date, theme, type_ref, sender_ref, addressee_ref }).unwrap();
    resetFormProps();
    dispatch(closeNewLetterWindow());
  };

  const handlerReset = () => {
    resetFormProps();
    dispatch(closeNewLetterWindow());
  }

  let addresseeField;
  switch(type_ref) {
    case 1:
      addresseeField = <InputTextWithButton label='Отправитель' name='sender'
                        value={sender_ref} onChangeFunction={setSender}
                        onClickFunction={() => {dispatch(openCloseNewCounterpartyForm())}} />;
      break;
    case 2:
      addresseeField = <InputTextWithButton label='Получатель' name='sender'
                        value={addressee_ref} onChangeFunction={setAddressee}
                        onClickFunction={() => {dispatch(openCloseNewCounterpartyForm())}} />;
      break;
    default:
      addresseeField = <InputTextWithButton label='Отправитель' name='sender'
                        value={sender_ref} onChangeFunction={setSender}
                        onClickFunction={() => {dispatch(openCloseNewCounterpartyForm())}} />;
  }
  
  return (
    <div className={styles.background}>
      <form className={styles.newcp_form_wrapper}>
        <h1 className={styles.newcp_header}>Новый документ</h1>
        <div className={styles.type_radio_wrapper}>
          {
            typesSuccess &&
            Object.values(types).map((type) => {
              return <div key={type.id} className={styles.type_radio_with_label}>
                  <input className={styles.radio} type="radio" id={`entity${type.id}`} 
                        name="type" value={type.id} checked={type.id === type_ref}
                        onChange={(event) => setLetterType(Number(event.target.value))} />
                  <label htmlFor={`entity${type.id}`}>{type.name}</label>
                </div>
            })
          }
        </div>
        <InputText label='Номер' name='number' isRequired={true}
                   value={number} onChangeFunction={setNumber} />
        <InputDate label='Дата' name='date' isRequired={true}
                   value={date} onChangeFunction={setDate} />
        <InputTextArea label='Название (тема)' name='theme' isRequired={false}
                   value={theme} onChangeFunction={setTheme} />
        {addresseeField}
      <div className={styles.buttons}>
        <div className={styles.button_wrapper}>
          <InputSubmit value='Сохранить' onClickFunction={handlerReset} />
        </div>
        <div className={styles.button_wrapper}>
          <InputReset value='Отменить и закрыть' onClickFunction={handlerReset} />
        </div>
      </div>
      </form>
    </div>
  )
};

export default NewLetter;
