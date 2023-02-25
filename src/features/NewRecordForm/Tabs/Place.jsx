import React from 'react';
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
  * Вкладка с основной информацией о данных.
  */

  const dispatch = useDispatch();

  const { values, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);
  const geomInputTypes = useSelector(state => state.newRecord.geomInputTypes);
  const activeInputType = useSelector(state => state.newRecord.activeInputType);
  const geometry = useSelector(state => state.newRecord.geometry);
  const geometryError = useSelector(state => state.newRecord.geometryError);

  let geomInputWidget;
  switch (activeInputType) {
    case '3':
      geomInputWidget = <TextArea showLabel={false} name='geom' isRequired={true}
                         value={geometry ? geometry : ''} 
                         onChangeFunction={(e) => {onChangeFunction(e); dispatch(setGeometry(e.target.value))}} />
    break;
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
            <Button label='Принять' />
          </div>
          <div className={styles.button_wrapper}>
            <Button label='Очистить' color='grey' />
          </div>
        </div>
      </Fieldset>
    </div>
  )
};

export default Place;
