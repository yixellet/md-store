import React from 'react';

import styles from './NewMd.module.css'
import InputSubmit from './InputSubmit/InputSubmit';
import InputSelect from './InputSelect/InputSelect';
import { useGetGroupsQuery } from '../../../api/dictionaries/groups';
import { useGetDictionariesQuery } from '../../../api/dictionaries';

function NewMetadataItemForm() {

  const { data: dictionaries, isLoading: dictionariesisLoading, isSuccess: dictionariesIsSuccess } = useGetDictionariesQuery();
  const { data: groups, isLoading: groupsIsLoading, isSuccess: groupsIsSuccess } = useGetGroupsQuery();

  return (
    <form className={styles.newMdForm}>
      <div className={styles.form_fields}>
        {
          dictionariesIsSuccess &&
          <InputSelect label={dictionaries[2].description} showLabel={true} name={dictionaries[2].name} isRequired={true} />
        }
      </div>
      <InputSubmit value='Сохранить' />
    </form>
  )
};

export default NewMetadataItemForm;
