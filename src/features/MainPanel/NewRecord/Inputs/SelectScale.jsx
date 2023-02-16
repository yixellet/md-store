import React from 'react';
import { useGetScalesQuery } from '../../../../api/dictionaries/scales';
import Select from '../../../CommonComponents/Inputs/Select/Select';

function SelectScale(props) {
  
  const { data, isSuccess } = useGetScalesQuery();
  
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

export default SelectScale;
