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
import InputSubmit from './InputSubmit/InputSubmit';

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
  const { data: secretClasses, isSuccess: secretSuccess } = mdApi.useGetSecretClassesQuery();
  const { data: access, isSuccess: accessSuccess } = mdApi.useGetAccessConditionsQuery();
  const { data: entities, isSuccess: entitiesSuccess } = useGetAllEntitiesQuery();
  const [addNewMd] = mdApi.useAddMdDmapMutation();

  const handlerSubmit = async() => {
    await addNewMd({
      nomenclature,
      scale,
      objectQuantity,
      location,
      storageFormat,
      maxAreaStateDate,
      minScale,
      areaStateDate,
      objectCreateDate,
      objectChangeDate,
      name,
      referenceSystem,
      rightHolder,
      creator,
      secretClass,
      extraRegionInfo,
      comment,
      accessCondition,
      guid,
      subtype,
      region,
      incomingDoc,
      outgoingDoc,
      geomWKT
    }).unwrap()
  }

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
          <InputSelect label='Формат хранения' isRequired={true}
                       name='storageformat' options={storageFormats} onChangeFunction={setStorageFormat} />
        }
        {
          type !== '12' &&
          <InputText label='Номенклатура' name='nomenclature' isRequired={false}
                     value={nomenclature} onChangeFunction={setNomenclature} />          
        }
        <InputText label='Название' name='name' value={name} isRequired={type !== '5'} onChangeFunction={setName} />
        {
          scalesSuccess && 
          <InputSelect label='Масштаб' name='scale' isRequired={type === '1' || type === '2'}
                       defaultOption={scale} options={scales} onChangeFunction={setScale} />
        }
        {
          scalesSuccess && 
          <InputSelect label='Минимальный масштаб' name='minscale' isRequired={false}
                       defaultOption={minScale} options={scales} onChangeFunction={setMinScale} />
        }
        {
          (type !== '5' && type !== '12') &&
          <InputText label='Количество объектов' name='objectquantity' isRequired={false}
                     defaultOption={objectQuantity} onChangeFunction={setObjectQuantity} />
        }
        <InputTextArea label='Комментарий' name='comment' isRequired={false}
                       value={comment} onChangeFunction={setComment} />
        <fieldset className={styles.fieldset}>
          <legend>Местонахождение территории</legend>
          {
            (districtSuccess && (type === '1' || type === '2' || type === '12')) && 
            <InputSelect label='Федеральный округ' name='district' options={districts} isRequired={false}
                         defaultOption={district} onChangeFunction={setDistrict} />
          }
          {
            (regionsSuccess && (type === '1' || type === '2' || type === '12')) && 
            <InputSelect label='Регион' name='region' options={regions} isRequired={false}
                         defaultOption={region} onChangeFunction={setRegion} />
          }
          <InputTextArea label='Дополнительно' name='extraregioninfo' isRequired={false}
                         value={extraRegionInfo} onChangeFunction={setExtraRegionInfo} />
        </fieldset>
        {
          refsysSuccess && 
          <InputSelect label='Система координат' name='referencesystem' options={refsys} isRequired={type !== 12}
                       defaultOption={referenceSystem} onChangeFunction={setReferenceSystem} />
        }
        {
          (heightSuccess && type === '5') && 
          <InputSelect label='Система высот' name='heightsystem' options={heightsys} isRequired={type === 5}
                       defaultOption={heightSystem} onChangeFunction={setHeightSystem} />
        }
        <fieldset className={styles.fieldset}>
          <legend>Даты</legend>
          <InputDate label='Дата создания' name='objectcreatedat' isRequired={type !== 3}
                     value={objectCreateDate} onChangeFunction={setObjectCreateDate} />
          {
            (type !== '5' && type !== '12') &&
            <InputDate label='Дата обновления' name='objectchangedat' isRequired={false}
                       value={objectChangeDate} onChangeFunction={setObjectChangeDate} />
          }
          {
            type !== '5' &&
            <InputDate label='Дата состояния местности' name='areastatedate' isRequired={true}
                       value={areaStateDate} onChangeFunction={setAreaStateDate} />
          }
          {
            type !== '5' &&
            <InputDate label='Дата состояния местности максимальная' name='maxareastatedate' isRequired={false}
                       value={maxAreaStateDate} onChangeFunction={setMaxAreaStateDate} />
          }
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>Доступ к данным</legend>
          {
            secretSuccess &&
            <InputSelect label='Гриф секретности' name='secret_class' options={secretClasses} isRequired={true}
                         defaultOption={secretClass} onChangeFunction={setSecretClass} />
          }
          {
            accessSuccess &&
            <InputSelect label='Условия доступа' name='access_conditions' options={access} isRequired={true}
                         defaultOption={accessCondition} onChangeFunction={setAccessConditions} />
          }
        </fieldset>
        <InputText label='Системный идентификатор' name='guid' value={guid} onChangeFunction={setGuid} isRequired={false} />
        <fieldset className={styles.fieldset}>
          <legend>Контрагенты</legend>
          {
            (entitiesSuccess && type !== '3') &&
            <InputSelect label='Местонахождение данных' name='location' options={entities}
                         onChangeFunction={setLocation} isRequired={true} />
          }
          {
            entitiesSuccess &&
            <InputSelect label='Организация-изготовитель' name='creator' options={entities}
                         onChangeFunction={setCreator} isRequired={true} />
          }
          {
            entitiesSuccess &&
            <InputSelect label='Правообладатель' name='rightholder' options={entities}
                         onChangeFunction={setRightHolder} isRequired={true} />
          }
        </fieldset>
        <InputTextWithButton label='Входящий документ' name="incomingdoc" value={incomingDoc} isRequired={false} onChangeFunction={setIncomingDoc} />
        <InputTextWithButton label='Исходящий документ' name="outgoingdoc" value={outgoingDoc} isRequired={false} onChangeFunction={setOutgoingDoc} />
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
      <InputSubmit value='Сохранить' onClickFunction={handlerSubmit} />
    </form>
  )
};

export default NewMd;
