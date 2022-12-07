import React from 'react';
import { useGetAccessConditionsQuery, useGetFederalDistrictsQuery, useGetGroupsQuery, useGetHeightSystemsQuery, useGetReferenceSystemsQuery, useGetRegionsByFederalDistrictQuery, useGetScalesQuery, useGetSecretClassesQuery, useGetStorageFormatsQuery, useGetSubtypesByGroupQuery, useGetSubtypesQuery } from '../../../api/mdApi';
import InputSelect from './InputSelect/InputSelect';
import InputText from './InputText/InputText';
import InputDate from './InputDate/InputDate';
import SubmitButton from '../SubmitButton/SubmitButton';

import styles from './NewMd.module.css'
import { useGetAllEntitiesQuery } from '../../../api/cpApi';

function NewMd() {

  const { data: types, isSuccess: typesSuccess } = useGetGroupsQuery();
  // const { data: subtypes, isSuccess: subtypesSuccess } = useGetSubtypesQuery();
  const { data: scales, isSuccess: scalesSuccess } = useGetScalesQuery();
  const { data: subtypes, isSuccess: subtypesSuccess } = useGetSubtypesByGroupQuery(3);
  const { data: storageFormats, isSuccess: stFormSuccess } = useGetStorageFormatsQuery();
  const { data: districts, isSuccess: districtSuccess } = useGetFederalDistrictsQuery();
  const { data: regions, isSuccess: regionsSuccess } = useGetRegionsByFederalDistrictQuery(203);
  const { data: refsys, isSuccess: refsysSuccess } = useGetReferenceSystemsQuery();
  const { data: heightsys, isSuccess: heightSuccess } = useGetHeightSystemsQuery();
  const { data: secretclass, isSuccess: secretSuccess } = useGetSecretClassesQuery();
  const { data: access, isSuccess: accessSuccess } = useGetAccessConditionsQuery();
  const { data: entities, isSuccess: entitiesSuccess } = useGetAllEntitiesQuery();

  return (
    <form className={styles.newMdForm}>
      <div className={styles.form_fields}>
        { typesSuccess && <InputSelect label='Тип данных' name='type' options={types} />}
        { subtypesSuccess && <InputSelect label='Подтип данных' name='subtype' options={subtypes} />}
        { stFormSuccess && <InputSelect label='Формат хранения' name='storageformat' options={storageFormats} />}
        <InputText label='Номенклатура' name='nomenclature' />
        <InputText label='Название' name='name' />
        { scalesSuccess && <InputSelect label='Масштаб' name='scale' options={scales} />}
        { scalesSuccess && <InputSelect label='Минимальный масштаб' name='minscale' options={scales} />}
        <InputText label='Количество объектов' name='objectquantity' />
        <fieldset className={styles.fieldset}>
          <legend>Даты</legend>
          <InputDate label='Дата создания' name='objectcreatedat' />
          <InputDate label='Дата обновления' name='objectchangedat' />
          <InputDate label='Дата состояния местности' name='areastatedate' />
          <InputDate label='Дата состояния местности максимальная' name='maxareastatedate' />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>Местонахождение территории</legend>
          { districtSuccess && <InputSelect label='Федеральный округ' name='district' options={districts} />}
          { regionsSuccess && <InputSelect label='Регион' name='region' options={regions} />}
          <InputText label='Дополнительно' name='extraregioninfo' />
        </fieldset>
        { refsysSuccess && <InputSelect label='Система координат' name='referencesystem' options={refsys} />}
        { heightSuccess && <InputSelect label='Система высот' name='heightsystem' options={heightsys} />}
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
      </div>
      <SubmitButton value='Сохранить' />
    </form>
  )
};

export default NewMd;
