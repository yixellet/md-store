import React, { useState } from 'react';

import dateFormatter from '../../../common/dateFormatter';

import styles from './NewMd.module.css'
import InputSubmit from './InputSubmit/InputSubmit';
import InputSelect from './InputSelect/InputSelect';
import { useGetGroupsQuery } from '../../../api/dictionaries/groups';
import { useGetDictionariesQuery } from '../../../api/dictionaries';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import InputText from './InputText/InputText';
import InputDate from './InputDate/InputDate';

function NewMetadataItemForm() {

  const [group, setGroup] = useState('1');/*
  const [nomenclature, setNomenclature] = useState('');
  const [scale, setScale] = useState('-1');
  const [objectquantity, setObjectquantity] = useState('');
  const [subtype, setSubtype] = useState('');
  const [storageformat_ref, setStorageformat] = useState('');
  const [name, setName] = useState('');
  const [minscale, setMinscale] = useState('-1');
  const [referencesystem_ref, setReferencesystem] = useState('-1');
  const [heightsystem_ref, setHeightsystem] = useState('-1');
  const [district, setDistrict] = useState(203);
  const [regions_ref, setRegion] = useState('');
  const [extraregioninfo, setExtraregioninfo] = useState('');
  const dateNow = new Date();
  const [objectcreatedat, setObjectcreatedat] = useState(dateFormatter(dateNow, '-'));
  const [objectchangedat, setObjectchangedat] = useState(dateFormatter(dateNow, '-'));
  const [areastatedate, setAreastatedate] = useState(dateFormatter(dateNow, '-'));
  const [maxareastatedate, setMaxareastatedate] = useState(dateFormatter(dateNow, '-'));
  const [comment, setComment] = useState('');
  const [secretclass_ref, setSecretclass] = useState('-1');
  const [accesscondition_ref, setAccessconditions] = useState('2');
  const [guid, setGuid] = useState('');
  const [location_ref, setLocation] = useState('');
  const [creator_ref, setCreator] = useState('');
  const [rightholder_ref, setRightholder] = useState('');
  const [incomingdocguid, setIncomingdocguid] = useState('');
  const [outgoingdocguid, setOutgoingdocguid] = useState('');
  //const GeoJSONref = useRef(null);
  const [geomWKT, setGeomWKT] = useState('');
  */
  const [values, setValues] = useState({ nomenclature: '', name: '' });
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues({[name]: value, ...values});
    console.log(values)
  };

  const chooseGroup = (value) => {
    setGroup(value);
  };

  const { data: dictionaries, isSuccess: dictionariesIsSuccess } = useGetDictionariesQuery();
  const { data: groups, isSuccess: groupsIsSuccess } = useGetGroupsQuery();

  const { data: fields, isSuccess: fieldsIsSuccess } = useGetFieldsQuery(group);

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
            switch (field.id) {
              case 1:
                component = <InputText key={field.id} 
                                       label={field.description} 
                                       showLabel={true} 
                                       name={field.name} 
                                       isRequired={field.mandatory}
                                       value={values.nomenclature}
                                       onChangeFunction={handleInputChange} />;
                break;
              case 15:
                component = <InputText key={field.id} 
                                        label={field.description} 
                                        showLabel={true} 
                                        name={field.name} 
                                        isRequired={field.mandatory}
                                        value={values.name}
                                        onChangeFunction={handleInputChange} />;
                break;
              case 10:
                component = <InputDate key={field.id} 
                                       label={field.description} 
                                       showLabel={true} 
                                       name={field.name} 
                                       isRequired={field.mandatory} />;
                break;
              case 11:
                component = <InputSelect key={field.id} 
                                         label={field.description} 
                                         showLabel={true} 
                                         name={field.name} 
                                         isRequired={field.mandatory} />;
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
  );
};

export default NewMetadataItemForm;
