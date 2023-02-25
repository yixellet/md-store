import React from 'react';
import Label from '../Label/Label';
import styles from './TextWithButton.module.css'

function TextWithButton(props) {
  /**
  *  Компонент с инпутом типа "текст".
  * 
  *  @param {string} label подпись поля
  *  @param {bool} showLabel флаг видимости подписи поля
  *  @param {string} name имя поля
  *  @param {bool} isRequired флаг обязательности
  *  @param {string} value значение поля
  *  @callback onChangeFunction функция, срабатывающая
  *                                на событие onChange
  *  @callback buttonClickFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** 
   * @type {onChangeFunction}
   * @type {buttonClickFunction}
   * 
   */

  const { label, showLabel, name, isRequired, value, onChangeFunction, buttonClickFunction } = props;

  const onClickHandler = (event) => {
    event.preventDefault();
    buttonClickFunction();
  }
  
  return (
    <div className={styles.input_wrapper}>
    {
      showLabel &&
      <Label name={label} HTMLfor={name} isRequired={isRequired} />
    }
      <div className={styles.input_with_button_wrapper}>
        <input type='text' 
              name={name} 
              id={name} 
              className={styles.text_input}
              value={value}
              onChange={(event) => onChangeFunction(event)} />
        <button className={styles.plus_button}
        onClick={onClickHandler}>+</button>
      </div>
    </div>
  )
};

TextWithButton.defaultProps = {
  label: '<field_name>',
  showLabel: true,
  name: 'name',
  isRequired: false,
  value: '<field_value>',
  onChangeFunction: () => {},
  buttonClickFunction: () => {},
};

export default TextWithButton;
