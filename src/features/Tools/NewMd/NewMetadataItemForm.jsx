import React, { useState } from 'react';

import styles from './NewMd.module.css'
import InputSubmit from './InputSubmit/InputSubmit';
import InputSelect from './InputSelect/InputSelect';
import { useGetGroupsQuery } from '../../../api/dictionaries/groups';
import { useGetDictionariesQuery } from '../../../api/dictionaries';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import InputText from './InputText/InputText';
import InputDate from './InputDate/InputDate';

function NewMetadataItemForm() {

  const [group, setGroup] = useState('1');
  const [skip, setSkip] = useState(true);
  const [values, setvalues] = useState({});

  const chooseGroup = (value) => {
    setGroup(value);
    setSkip(false);
  };

  const { data: dictionaries, isSuccess: dictionariesIsSuccess } = useGetDictionariesQuery();
  const { data: groups, isSuccess: groupsIsSuccess } = useGetGroupsQuery();

  const { data: fields, isSuccess: fieldsIsSuccess } = useGetFieldsQuery(group)

  return (
    <form className={styles.newMdForm}>
      <div className={styles.form_fields}>
        {
          (dictionariesIsSuccess && groupsIsSuccess) &&
          <InputSelect label={dictionaries[2].description} 
            showLabel={true} 
            name={dictionaries[2].name} 
            isRequired={true} 
            defaultOption={group}
            options={groups}
            onChangeFunction={chooseGroup} />
        }
        {
          fieldsIsSuccess &&
          Object.values(fields).map(field => {
            let component;
            switch (field.type.id) {
              case 8:
                component = <InputText key={field.id} label={field.description} showLabel={true} name={field.name} isRequired={field.mandatory} />;
                break;
              case 10:
                component = <InputDate key={field.id} label={field.description} showLabel={true} name={field.name} isRequired={field.mandatory} />;
                break;
              case 11:
                component = <InputSelect key={field.id} label={field.description} showLabel={true} name={field.name} isRequired={field.mandatory} />;
                break;
              default:
                component = null;
            };
            return component;
          })
        }
      </div>
      <InputSubmit value='Сохранить' />
    </form>
  )
};

export default NewMetadataItemForm;
