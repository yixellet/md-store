import React from 'react';
import { useGetAccessConditionsQuery } from '../../../api/dictionaries/accessConditions';
import Select from '../../CommonComponents/Inputs/Select/Select';

function SelectAccessCond(props) {
  
  const { data, isSuccess } = useGetAccessConditionsQuery();
  
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

export default SelectAccessCond;
