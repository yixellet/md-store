import React from 'react';
import { useGetHeightSystemsQuery } from '../../../../api/dictionaries/heightSystems';
import Select from '../../../CommonComponents/Inputs/Select/Select';

function SelectHeightSys(props) {
  
  const { data, isSuccess } = useGetHeightSystemsQuery();
  
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

export default SelectHeightSys;
