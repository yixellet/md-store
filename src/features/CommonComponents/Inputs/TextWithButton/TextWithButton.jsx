import React from 'react';
import Label from '../Label/Label';
import Button from '../../Button/Button';
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
  *  @callback button1ClickFunction функция, срабатывающая
  *                                на событие onChange
  *  @callback button2ClickFunction функция, срабатывающая
  *                                на событие onChange
  *  @callback button3ClickFunction функция, срабатывающая
  *                                на событие onChange
  */

  /** 
   * @type {button1ClickFunction}
   * @type {button2ClickFunction}
   * @type {button3ClickFunction}
   */

  const { label, showLabel, name, isRequired, value, button1ClickFunction, button2ClickFunction, button3ClickFunction } = props;

  const on1ClickHandler = (event) => {
    event.preventDefault();
    button1ClickFunction();
  };

  const on2ClickHandler = (event) => {
    event.preventDefault();
    button2ClickFunction();
  };

  const on3ClickHandler = (event) => {
    event.preventDefault();
    button3ClickFunction();
  };
  
  return (
    <div className={styles.input_wrapper}>
      {
        showLabel &&
        <Label name={label} HTMLfor={name} isRequired={isRequired} />
      }
      <textarea name={name} 
                id={name} 
                className={styles.text_input}
                value={value}
                disabled />
      <div className={styles.buttons_wrapper}>
        <div className={styles.two_buttons}>
          <div className={styles.button_wrapper}>
            <Button label='Создать' onClickFunction={on1ClickHandler} />
          </div>
          <div className={styles.button_wrapper}>
            <Button label='Очистить' color='grey' onClickFunction={on2ClickHandler} />
          </div>
        </div>
        <div className={styles.button_wrapper}>
          <Button label='Список   &raquo;' color='grey' onClickFunction={on3ClickHandler} />
        </div>
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
  button1ClickFunction: () => {},
  button2ClickFunction: () => {},
  button3ClickFunction: () => {},
};

export default TextWithButton;
