import React, { useState } from 'react';
import * as mdApi from '../../../api/mdApi';
import InputSelect from './InputSelect/InputSelect';
import InputText from './InputText/InputText';
import InputDate from './InputDate/InputDate';
import SubmitButton from '../SubmitButton/SubmitButton';

import styles from './NewMd.module.css'
import { useGetAllEntitiesQuery } from '../../../api/cpApi';
import { useDispatch, useSelector } from 'react-redux';
import { setGeometry, setStorageFormat, setSubtype, setType } from '../../../store/reducers/newMdSlice';

function NewMd() {
  const [type, setNewType] = useState('1');
  const [subtype, setSubtype] = useState('');
  const [storageFormat, setStorageFormat] = useState('');
  const [nomenclature, setNomenclature] = useState('');
  const [name, setName] = useState('');
  const [scale, setScale] = useState('-1');
  const [minScale, setMinScale] = useState('-1');
  const [objectQuantity, setObjectQuantity] = useState('');
  const [referenceSystem, setReferenceSystem] = useState('-1');
  const [heightSystem, setHeightSystem] = useState('-1');
  const [district, setDistrict] = useState(203);
  const [region, setRegion] = useState('');

  const dispatch = useDispatch();

  const { data: types, isSuccess: typesSuccess } = mdApi.useGetGroupsQuery();
  const { data: scales, isSuccess: scalesSuccess } = mdApi.useGetScalesQuery();
  const { data: subtypes, isSuccess: subtypesSuccess } = mdApi.useGetSubtypesByGroupQuery(type);
  const { data: storageFormats, isSuccess: stFormSuccess } = mdApi.useGetStorageFormatsByGroupQuery(type);
  const { data: districts, isSuccess: districtSuccess } = mdApi.useGetFederalDistrictsQuery();
  const { data: regions, isSuccess: regionsSuccess } = mdApi.useGetRegionsByFederalDistrictQuery(district);
  const { data: refsys, isSuccess: refsysSuccess } = mdApi.useGetReferenceSystemsQuery();
  const { data: heightsys, isSuccess: heightSuccess } = mdApi.useGetHeightSystemsQuery();
  const { data: secretclass, isSuccess: secretSuccess } = mdApi.useGetSecretClassesQuery();
  const { data: access, isSuccess: accessSuccess } = mdApi.useGetAccessConditionsQuery();
  const { data: entities, isSuccess: entitiesSuccess } = useGetAllEntitiesQuery();

  return (
    <form className={styles.newMdForm}>
      <div className={styles.form_fields}>
        {
          typesSuccess && 
          <InputSelect label='Тип' 
                       name='type' options={types} defaultOption={type} onChangeFunction={setNewType} />
        }
        {
          subtypesSuccess && 
          <InputSelect label='Вид пространственных данных' 
                       name='subtype' options={subtypes} onChangeFunction={setSubtype} />
        }
        {
          stFormSuccess && 
          <InputSelect label='Формат хранения' 
                       name='storageformat' options={storageFormats} onChangeFunction={setStorageFormat} />
        }
        {
          type !== '12' &&
          <InputText label='Номенклатура' name='nomenclature' value={nomenclature} onChangeFunction={setNomenclature} />          
        }
        <InputText label='Название' name='name' value={name} onChangeFunction={setName} />
        {
          scalesSuccess && 
          <InputSelect label='Масштаб' name='scale' 
                       defaultOption={scale} options={scales} onChangeFunction={setScale} />
        }
        {
          scalesSuccess && 
          <InputSelect label='Минимальный масштаб' name='minscale' 
                       defaultOption={minScale} options={scales} onChangeFunction={setMinScale} />
        }
        {
          (type !== '5' && type !== '12') &&
          <InputText label='Количество объектов' name='objectquantity' 
                     defaultOption={objectQuantity} onChangeFunction={setObjectQuantity} />
        }
        <fieldset className={styles.fieldset}>
          <legend>Местонахождение территории</legend>
          {
            (districtSuccess && (type === '1' || type === '2' || type === '12')) && 
            <InputSelect label='Федеральный округ' name='district' options={districts}
                         defaultOption={district} onChangeFunction={setDistrict} />
          }
          {
            (regionsSuccess && (type === '1' || type === '2' || type === '12')) && 
            <InputSelect label='Регион' name='region' options={regions}
                         defaultOption={region} onChangeFunction={setRegion} />
          }
          <InputText label='Дополнительно' name='extraregioninfo' />
        </fieldset>
        {
          refsysSuccess && 
          <InputSelect label='Система координат' name='referencesystem' options={refsys}
                       value={referenceSystem} onChangeFunction={setReferenceSystem} />
        }
        {
          (heightSuccess && type === '5') && 
          <InputSelect label='Система высот' name='heightsystem' options={heightsys}
                       value={heightSystem} onChangeFunction={setHeightSystem} />
        }
        <fieldset className={styles.fieldset}>
          <legend>Даты</legend>
          <InputDate label='Дата создания' name='objectcreatedat' />
          <InputDate label='Дата обновления' name='objectchangedat' />
          <InputDate label='Дата состояния местности' name='areastatedate' />
          <InputDate label='Дата состояния местности максимальная' name='maxareastatedate' />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>Доступ к данным</legend>
          { secretSuccess && <InputSelect label='Гриф секретности' name='secret_class' options={secretclass} />}
          { accessSuccess && <InputSelect label='Условия доступа' name='access_conditions' options={access} />}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>Контрагенты</legend>
          { entitiesSuccess && <InputSelect label='Местонахождение данных' name='location' options={entities} />}
          { entitiesSuccess && <InputSelect label='Организация-изготовитель' name='creator' options={entities} />}
          { entitiesSuccess && <InputSelect label='Правообладатель' name='rightholder' options={entities} />}
        </fieldset>
        <div className={styles.input_wrapper}>
          <label htmlFor='geom' className={styles.label}>Геометрия</label>
          <div className={styles.input_with_button_wrapper}>
            <input type='text' 
                  name='geom' 
                  id='geom'
                  className={styles.text_input_with_button}
                  onChange={(event) => dispatch(setGeometry(event.target.value))} />
            <button className={styles.plus_button}>+</button>
          </div>
        </div>
      </div>
      <SubmitButton value='Сохранить' />
    </form>
  )
};

export default NewMd;
