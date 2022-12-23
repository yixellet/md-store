import React, { useState } from 'react';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import InputSelect from '../../../Tools/NewMd/InputSelect/InputSelect';
import styles from './Contacts.module.css'
import { useGetPhoneTypesQuery } from '../../../../api/cpApi';

function Contacts(props) {

  const [phones, setPhones] = useState([{number: '', type: '1'}]);
  const [curNumber, setCurNumber] = useState('');
  const [curType, setCurType] = useState('1');
  
  let skip;
  if (props.type === 'phone') {
    skip = false;
  } else {
    skip = true;
  };

  const { data, isSuccess } = useGetPhoneTypesQuery(skip);

  const onChangeNumber = (number, idx) => {
    setPhones(phones[idx].number = number)
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{props.type === 'phone' ? 'Телефонные номера' : 'Электронная почта'}</legend>
      <ul className={styles.fields_list}>
        {
          phones.map((item, idx) => {
            return <li className={styles.fields_string} key={idx}>
                    <div className={styles.number}>
                      <InputText name={`phone${idx}`} 
                                 value={item.number}
                                 onChangeFunction={onChangeNumber(event.target.value, idx)} />
                    </div>
                    {
                      (props.type === 'phone' && isSuccess) &&
                      <div className={styles.comment}>
                        <InputSelect options={data} value={item.type} />
                      </div>
                    }
                    <button className={styles.delete_button}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path fill="#e47272" d="M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z"/>
                      </svg>
                    </button>
                  </li>
          })
        }
        <button className={styles.add_button}>+ Добавить</button>
      </ul>
    </fieldset>
  )
};

export default Contacts;
