import React from 'react';
import { useGetSecretClassesQuery } from '../../../api/dictionaries/secretClasses';
import Select from '../../CommonComponents/Inputs/Select/Select';

function SelectSecretClass(props) {
  
  const { data, isSuccess } = useGetSecretClassesQuery();
  
  return (
    isSuccess &&
    <Select label={props.label}
            showLabel={true}
            name={props.name}
            isRequired={props.isRequired}
            options={data}
            defaultOption={props.defaultOption}
            onChangeFunction={props.onChangeFunction} />
  );
};

export default SelectSecretClass;
