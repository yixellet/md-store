import React from 'react';
import { useGetReferenceSystemsQuery } from '../../../api/dictionaries/referenceSystems';
import Select from '../../CommonComponents/Inputs/Select/Select';

function SelectRefSystem(props) {
  
  const { data, isSuccess } = useGetReferenceSystemsQuery();
  
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

export default SelectRefSystem;
