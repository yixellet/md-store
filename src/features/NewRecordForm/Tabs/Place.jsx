import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import { setActiveInputType, setGeometry } from '../../../store/reducers/newRecord';
import Button from '../../CommonComponents/Button/Button';
import Fieldset from '../../CommonComponents/Fieldset/Fieldset';
import Select from '../../CommonComponents/Inputs/Select/Select';
import TextArea from '../../CommonComponents/Inputs/TextArea/TextArea';
import SelectRegion from '../Inputs/SelectRegion';
import styles from './Tabs.module.css';

function Place(props) {
  /**
  * Вкладка с информацией о местоположении объекта
  * MultiPolygon (((47.30948238 46.72358681, 47.2115114 46.12302692, 47.9357968 46.40362896, 47.30948238 46.72358681)),((47.41445127 46.84099042, 47.7643476 46.69479587, 47.7643476 46.91991391, 47.41445127 46.84099042)))
  */

  const dispatch = useDispatch();

  const { values, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);
  const geomInputTypes = useSelector(state => state.newRecord.geomInputTypes);
  const activeInputType = useSelector(state => state.newRecord.activeInputType);
  const [geometryError, setGeometryError] = useState('');

  let geomInputWidget;
  switch (activeInputType) {
    case '3':
      geomInputWidget = <TextArea showLabel={false} name='geom'
                         value={values.geom} isRequired={true}
                         onChangeFunction={(e) => {onChangeFunction(e)}} />
      break;
    default:
      geomInputWidget = <TextArea showLabel={false} name='geom'
                         value={values.geom} isRequired={true}
                         onChangeFunction={(e) => {onChangeFunction(e)}} />
  };

  const confirmGeometry = (geometry, type) => {
    if (type === 'wkt') {
      const wktRegex = /MultiPolygon \((\(\((\d{1,3}\.\d* \d{1,3}\.\d*(, ?)?){3,}\)\)(, ?)?)+\)/i;
      if (wktRegex.test(geometry)) {
        dispatch(setGeometry(geometry));
      } else {
        setGeometryError('Ошибка в коде WKT');
      };
    };
  };

  const clearGeometry = () => {
    setGeometryError('');
    dispatch(setGeometry(null));
    onChangeFunction({target: {name: 'geom', value: ''}});
  };

  return (
    <div className={styles.fields}>
      {
        (fields && Object.keys(fields).includes('26')) &&
        <SelectRegion label={fields[26].description} name={fields[26].name} isRequired={fields[26].mandatory}
                      defaultOption={values.region_ref} onChangeFunction={onChangeFunction} />
      }
      {
        (fields && Object.keys(fields).includes('20')) &&
        <TextArea label={fields[20].description} name={fields[20].name} isRequired={fields[20].mandatory}
                      value={values.extraregioninfo} onChangeFunction={onChangeFunction} />
      }
      <Fieldset label='Ограничивающий полигон'>
        <Select label='Метод ввода' showLabel={true} options={geomInputTypes} 
                name='geomInputType' defaultOption={activeInputType}
                onChangeFunction={(e) => dispatch(setActiveInputType(e.target.value))} />
        { geomInputWidget }
        {
          geometryError &&
          <p>{geometryError}</p>
        }
        <div className={styles.buttons_wrapper}>
          <div className={styles.button_wrapper}>
            <Button label='Принять' onClickFunction={(e) => {e.preventDefault(); confirmGeometry(values.geom, 'wkt')}} />
          </div>
          <div className={styles.button_wrapper}>
            <Button label='Очистить' color='grey' onClickFunction={(e) => {e.preventDefault(); clearGeometry()}} />
          </div>
        </div>
      </Fieldset>
    </div>
  )
};

export default Place;
