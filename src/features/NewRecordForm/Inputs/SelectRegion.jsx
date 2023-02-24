import React from 'react';
import { useGetRegionsQuery } from '../../../api/dictionaries/regions';
import Select from '../../CommonComponents/Inputs/Select/Select';

function SelectRegion(props) {
  
  const { data, isSuccess } = useGetRegionsQuery();
  
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

export default SelectRegion;
