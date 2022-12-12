import React, { useRef, useState } from 'react';
import dateFormatter from '../../../common/dateFormatter';
import * as mdApi from '../../../api/mdApi';
import InputSelect from './InputSelect/InputSelect';
import InputText from './InputText/InputText';
import InputTextArea from './InputTextArea/InputTextArea';
import InputDate from './InputDate/InputDate';
import SubmitButton from '../SubmitButton/SubmitButton';

import styles from './NewMd.module.css'
import { useGetAllEntitiesQuery } from '../../../api/cpApi';
import { useDispatch, useSelector } from 'react-redux';
import { setGeometry } from '../../../store/reducers/newMdSlice';
import InputTextWithButton from './InputTextWithButton/InputTextWithButton';

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
  const [extraRegionInfo, setExtraRegionInfo] = useState('');
  const dateNow = new Date();
  const [objectCreateDate, setObjectCreateDate] = useState(dateFormatter(dateNow, '-'));
  const [objectChangeDate, setObjectChangeDate] = useState(dateFormatter(dateNow, '-'));
  const [areaStateDate, setAreaStateDate] = useState(dateFormatter(dateNow, '-'));
  const [maxAreaStateDate, setMaxAreaStateDate] = useState(dateFormatter(dateNow, '-'));
  const [comment, setComment] = useState('');
  const [secretClass, setSecretClass] = useState('-1');
  const [accessCondition, setAccessConditions] = useState('2');
  const [guid, setGuid] = useState('');
  const [location, setLocation] = useState('');
  const [creator, setCreator] = useState('');
  const [rightHolder, setRightHolder] = useState('');
  const [incomingDoc, setIncomingDoc] = useState('');
  const [outgoingDoc, setOutgoingDoc] = useState('');
  const [geomInputType, setGeomInputType] = useState('1');
  const GeoJSONref = useRef(null);
  const [geomWKT, setGeomWKT] = useState('');

  const dispatch = useDispatch();

  const geomInputTypes = useSelector(state => state.newMd.geomInputTypes);

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
        <InputTextArea label='Комментарий' name='comment' 
                       value={comment} onChangeFunction={setComment} />
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
          <InputTextArea label='Дополнительно' name='extraregioninfo' 
                         value={extraRegionInfo} onChangeFunction={setExtraRegionInfo} />
        </fieldset>
        {
          refsysSuccess && 
          <InputSelect label='Система координат' name='referencesystem' options={refsys}
                       defaultOption={referenceSystem} onChangeFunction={setReferenceSystem} />
        }
        {
          (heightSuccess && type === '5') && 
          <InputSelect label='Система высот' name='heightsystem' options={heightsys}
                       defaultOption={heightSystem} onChangeFunction={setHeightSystem} />
        }
        <fieldset className={styles.fieldset}>
          <legend>Даты</legend>
          <InputDate label='Дата создания' name='objectcreatedat' 
                     value={objectCreateDate} onChangeFunction={setObjectCreateDate} />
          {
            (type !== '5' && type !== '12') &&
            <InputDate label='Дата обновления' name='objectchangedat' 
                       value={objectChangeDate} onChangeFunction={setObjectChangeDate} />
          }
          {
            type !== '5' &&
            <InputDate label='Дата состояния местности' name='areastatedate' 
                       value={areaStateDate} onChangeFunction={setAreaStateDate} />
          }
          {
            type !== '5' &&
            <InputDate label='Дата состояния местности максимальная' name='maxareastatedate' 
                       value={maxAreaStateDate} onChangeFunction={setMaxAreaStateDate} />
          }
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>Доступ к данным</legend>
          {
            secretSuccess &&
            <InputSelect label='Гриф секретности' name='secret_class' options={secretclass}
                         defaultOption={secretClass} onChangeFunction={setSecretClass} />
          }
          {
            accessSuccess &&
            <InputSelect label='Условия доступа' name='access_conditions' options={access}
                         defaultOption={accessCondition} onChangeFunction={setAccessConditions} />
          }
        </fieldset>
        <InputText label='Системный идентификатор' name='guid' value={guid} onChangeFunction={setGuid} />
        <fieldset className={styles.fieldset}>
          <legend>Контрагенты</legend>
          {
            (entitiesSuccess && type !== '3') &&
            <InputSelect label='Местонахождение данных' name='location' options={entities}
                         onChangeFunction={setLocation} />
          }
          {
            entitiesSuccess &&
            <InputSelect label='Организация-изготовитель' name='creator' options={entities}
                         onChangeFunction={setCreator} />
          }
          {
            entitiesSuccess &&
            <InputSelect label='Правообладатель' name='rightholder' options={entities}
                         onChangeFunction={setRightHolder} />
          }
        </fieldset>
        <InputTextWithButton label='Входящий документ' name="incomingdoc" value={incomingDoc} onChangeFunction={setIncomingDoc} />
        <InputTextWithButton label='Исходящий документ' name="outgoingdoc" value={outgoingDoc} onChangeFunction={setOutgoingDoc} />
        {
          (type !== '5') &&
          <fieldset className={styles.fieldset}>
            <legend>Геометрия</legend>
            <InputSelect label='Способ ввода' name='geomtype' options={geomInputTypes}
                         defaultOption={geomInputType} onChangeFunction={setGeomInputType} />
            {
              geomInputType === '2' &&
              <input type="file" ref={GeoJSONref} />
            }
            {
              geomInputType === '3' &&
              <InputTextArea label='' name='wkt' 
                             value={geomWKT} onChangeFunction={setGeomWKT} />
            }
            <SubmitButton value='Нарисовать' onClickFunction={() => dispatch(setGeometry(geomWKT))} />
          </fieldset>
        }
      </div>
      <SubmitButton value='Сохранить' />
    </form>
  )
};

export default NewMd;
