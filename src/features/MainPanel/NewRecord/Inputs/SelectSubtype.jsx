import React, { useEffect } from 'react';
import { useGetSubtypesQuery } from '../../../../api/dictionaries/subtypes';
import Select from '../../../CommonComponents/Inputs/Select/Select';

function SelectSubtype(props) {
  
  const { data, isSuccess } = useGetSubtypesQuery(props.group);
  
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

export default SelectSubtype;
