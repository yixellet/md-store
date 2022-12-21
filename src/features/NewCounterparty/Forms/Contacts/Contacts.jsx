import React, { useState } from 'react';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import InputSelect from '../../../Tools/NewMd/InputSelect/InputSelect';
import styles from './Contacts.module.css'
import { useGetPhoneTypesQuery } from '../../../../api/cpApi';

function Contacts(props) {

  const [phones, setPhones] = useState({1: {id: 1, number: '', type: '1'}});
  const [curNumber, setCurNumber] = useState('');
  const [curType, setCurType] = useState('1');
  
  let skip;
  if (props.type === 'phone') {
    skip = false;
  } else {
    skip = true;
  };

  const { data, isSuccess } = useGetPhoneTypesQuery(skip);

  const onChangeNumber = (number, phones, id) => {
    setPhones({...phones, id: {id: id, number: number}})
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{props.type === 'phone' ? 'Телефонные номера' : 'Электронная почта'}</legend>
      <ul className={styles.fields_list}>
        {
          Object.values(phones).map(item => {
            return <li className={styles.fields_string} key={item.id}>
                    <div className={styles.number}>
                      <InputText name={`phone${item.id}`} 
                                 value={item.number}
                                 onChangeFunction={() => onChangeNumber} />
                    </div>
                    {
                      (props.type === 'phone' && isSuccess) &&
                      <div className={styles.comment}>
                        <InputSelect options={data} value={item.type} />
                      </div>
                    }
                  </li>
          })
        }
        <button className={styles.add_button}>+ Добавить</button>
      </ul>
    </fieldset>
  )
};

export default Contacts;
