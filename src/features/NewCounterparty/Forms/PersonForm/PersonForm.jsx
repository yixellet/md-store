import React, { useState } from 'react';
import InputText from '../../../Tools/NewMd/InputText/InputText';

import styles from './PersonForm.module.css'
import AddressFieldset from '../AddressFieldset/AddressFieldset';

function PersonForm() {

  const [name, setName] = useState('');
  const [patronym, setPatronym] = useState('');
  const [surname, setSurname] = useState('');
  const [inn, setInn] = useState('');
  const [regAddrType, setRegAddrType] = useState('reg_gar') // Метод ввода (ссылка на ГАР или текст)
  const [regaddress_ref, setRegaddress_ref] = useState(''); // objectid дома или квартиры в ГАР
  const [regaddress_text, setRegaddress_text] = useState(''); // Адрес в виде текста (для адресов за пределами Астр. обл.)
  const [postaddress_ref, setPostaddress_ref] = useState(null);
  const [postaddress_text, setPostaddress_text] = useState('');
  
  return (
    <>
      <div className={styles.contacts_button_wrapper}>
        <button className={styles.contacts_button}>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.107" height="21.837" data-name="Layer 1">
          <path d="M12.045 5.704a.895.895 0 0 1-.328-.1.878.878 0 0 1-.262-.217.855.855 0 0 1-.148-.28.873.873 0 0 1-.036-.31v-.07a.858.858 0 0 1 .314-.553.877.877 0 0 1 .28-.151.789.789 0 0 1 .31-.037h.062c.337.036.671.096.999.18a5.838 5.838 0 0 1 .917.313 5.01 5.01 0 0 1 1.545 1.044 5.054 5.054 0 0 1 1.055 1.544c.13.293.235.596.313.907.081.332.138.67.173 1.01a.863.863 0 0 1-.188.637.84.84 0 0 1-.258.21.858.858 0 0 1-.324.104.921.921 0 0 1-.32-.033.914.914 0 0 1-.303-.159.932.932 0 0 1-.21-.254.895.895 0 0 1-.114-.339 5.36 5.36 0 0 0-.126-.738 3.985 3.985 0 0 0-.221-.652 3.34 3.34 0 0 0-.697-1.036 3.251 3.251 0 0 0-.476-.387 3.52 3.52 0 0 0-.56-.302 4.327 4.327 0 0 0-.649-.22 5.264 5.264 0 0 0-.737-.13Zm.922-3.978h-.052a.826.826 0 0 1-.302-.091.903.903 0 0 1-.243-.193.895.895 0 0 1-.166-.29.814.814 0 0 1-.048-.328V.757a.88.88 0 0 1 .089-.298.895.895 0 0 1 .187-.247.863.863 0 0 1 .284-.163.844.844 0 0 1 .336-.047 11.736 11.736 0 0 1 1.75.236 9.34 9.34 0 0 1 1.567.475 7.627 7.627 0 0 1 1.376.737 7.004 7.004 0 0 1 2.082 2.15 7.782 7.782 0 0 1 .678 1.396 9.532 9.532 0 0 1 .424 1.582 11.928 11.928 0 0 1 .177 1.758v.033a.789.789 0 0 1-.059.32.878.878 0 0 1-.778.542h-.04a.878.878 0 0 1-.313-.062.844.844 0 0 1-.472-.45.84.84 0 0 1-.078-.331 10.096 10.096 0 0 0-.144-1.475 7.711 7.711 0 0 0-.339-1.293 6.13 6.13 0 0 0-.524-1.107 5.124 5.124 0 0 0-.707-.914 5.19 5.19 0 0 0-.888-.737 6.1 6.1 0 0 0-1.08-.56 7.184 7.184 0 0 0-1.261-.369 10.284 10.284 0 0 0-1.445-.192ZM5.595 9.917a16.957 16.957 0 0 0 2.495 3.495 14.295 14.295 0 0 0 3.952 2.915.414.414 0 0 0 .343 0 1.441 1.441 0 0 0 .475-.346 5.743 5.743 0 0 0 .45-.512c.634-.837 1.42-1.872 2.528-1.357l.07.037 3.686 2.13.037.023a1.678 1.678 0 0 1 .698 1.441 3.874 3.874 0 0 1-.547 1.843 3.73 3.73 0 0 1-1.78 1.574 8.04 8.04 0 0 1-2.212.597 7.372 7.372 0 0 1-3.354-.28 14.826 14.826 0 0 1-3.347-1.637L9 19.781a24.151 24.151 0 0 1-1.721-1.139 21.542 21.542 0 0 1-5.702-6.468C.393 10.03-.266 7.72.102 5.52a4.792 4.792 0 0 1 1.615-3.034 4.35 4.35 0 0 1 3.221-.859.461.461 0 0 1 .369.24l2.374 4.01a1.257 1.257 0 0 1 .2 1.345 2.625 2.625 0 0 1-.908 1.018c-.13.107-.28.217-.438.336-.535.368-1.136.829-.93 1.352Z"/>
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
    </>
  )
};

export default PersonForm;
