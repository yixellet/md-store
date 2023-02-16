import React, { useEffect } from 'react';
import { useGetStorageFormatsQuery } from '../../../../api/dictionaries/storageFormats';
import Select from '../../../CommonComponents/Inputs/Select/Select';

function SelectStorageFormat(props) {
  
  const { data, isSuccess, isFetching, isLoading } = useGetStorageFormatsQuery(props.group);
  useEffect(() => {
    isSuccess && props.onChangeFunction({ target: { name: [props.name], value: Object.values(data)[0].id } });
  }, [props.group, isSuccess])
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

export default SelectStorageFormat;
