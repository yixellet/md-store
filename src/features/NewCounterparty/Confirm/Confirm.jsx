import React, { useState } from 'react';
import { useGetObjectParentsQuery } from '../../../api/garApi';
import InputReset from '../../Tools/NewMd/InputReset/InputReset';
import InputSubmit from '../../Tools/NewMd/InputSubmit/InputSubmit';

import styles from './Confirm.module.css';

function Confirm(props) {
    
  return (
    <div className={styles.background}>
      <div className={styles.newcp_form_wrapper}>
        <h3 className={styles.confirm_header}>Внимательно проверьте введённые данные прежде, чем сохранить их</h3>
        <ul className={styles.data}>
          <li className={styles.data_item}><span className={styles.span}>ФИО: </span>
            {`${props.data.name || '***'} ${props.data.patronym || '***'} ${props.data.surname || '***'}`}
          </li>
          <li className={styles.data_item}><span className={styles.span}>ИНН: </span>
            {props.data.name || '***'}
          </li>
          <li className={styles.data_item}><span className={styles.span}>Адрес регистрации: </span>
            {props.data.regaddress_text || '***'}
          </li>
          <li className={styles.data_item}><span className={styles.span}>Почтовый адрес: </span>
            {props.data.postaddress_text || '***'}
          </li>
          <li className={styles.data_item}><span className={styles.span}>Телефон: </span>
            {props.data.phoneNumber || '***'}
          </li>
          <li className={styles.data_item}><span className={styles.span}>E-mail: </span>
            {props.data.email || '***'}
          </li>
        </ul>
        <div className={styles.buttons}>
          <div className={styles.button_wrapper}>
            <InputSubmit value='Всё верно' onClickFunction={props.submitFunction} />
          </div>
          <div className={styles.button_wrapper}>
            <InputReset value='Редактировать' onClickFunction={props.resetFunction} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Confirm;
