import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputSelect.module.css'

class InputSelect extends React.Component {
  render() {
    return (
      <div className={styles.input_wrapper}>
        <InputLabel name={this.props.label} for={this.props.name} isRequired={this.props.isRequired} />
        <select name={this.props.name} id={this.props.name} required className={styles.comboBox} value={this.props.defaultOption} onChange={event=>this.props.onChangeFunction(event.target.value)}>
          {
            Object.values(this.props.options).map((option) => {
              return <option key={option.id} value={option.id}>{option.name}</option>
            })
          }
        </select>
      </div>
    )
  }
};

export default InputSelect;
