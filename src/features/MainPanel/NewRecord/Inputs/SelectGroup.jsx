import React, { useState } from 'react';
import { useGetGroupsQuery } from '../../../../api/dictionaries/groups';
import Select from '../../../CommonComponents/Inputs/Select/Select';

function SelectGroup(props) {
  
  const { data, isSuccess } = useGetGroupsQuery();

  return (
    isSuccess &&
    <Select label='Тип пространственных данных' 
            showLabel={true}
            name='group'
            isRequired={true}
            options={data}
            defaultOption={props.defaultOption}
            onChangeFunction={props.onChangeFunction} />
  );
};

export default SelectGroup;
