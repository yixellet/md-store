import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputSearchField.module.css'

function InputSearchField(props) {
  
  return (
    <div className={styles.input_wrapper}>
      <InputLabel name={props.label} for={props.name} isRequired={props.isRequired} />
      <div className={styles.input_with_results}>
        <input type='text' 
              name={props.name} 
              id={props.name} 
              className={styles.text_input}
              value={props.value}
              placeholder={props.placeholder}
              onChange={event => props.onChangeFunction(event.target.value)} />
        <ul className={styles.search_results}>
          {
            props.results &&
            props.results.map((item) => {
              return <li className={styles.results_item} 
                         key={item.objectid}
                         onClick={() => props.onClickFunction(item)}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
};

export default InputSearchField;
