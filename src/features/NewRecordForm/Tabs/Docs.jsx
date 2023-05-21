import React from 'react';
import { useGetDocumentQuery } from '../../../api/documents';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import TextWithButton from '../../CommonComponents/Inputs/TextWithButton/TextWithButton';
import styles from './Tabs.module.css';
import TextArea from '../../CommonComponents/Inputs/TextArea/TextArea';

function Docs(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { values, onChangeFunction, openTableFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);
  const { data: in_doc } = useGetDocumentQuery(values.incomingdocguid, { skip: !values.incomingdocguid });
  const { data: out_doc } = useGetDocumentQuery(values.outgoingdocguid, { skip: !values.outgoingdocguid });

  return (
    <div className={styles.fields}>
      {
        (fields && Object.keys(fields).includes('35')) &&
        <TextArea label={fields[35].description} name={fields[35].name} 
        isRequired={fields[35].mandatory}
        value={values[fields[35].name]} onChangeFunction={onChangeFunction} />
        /*<TextWithButton label={fields[27].description} name={fields[27].name} 
                        isRequired={fields[27].mandatory}
                        value={in_doc ? in_doc.number : ''}
                        button3ClickFunction={openTableFunction} />*/
      }
      {
        (fields && Object.keys(fields).includes('36')) &&
        <TextArea label={fields[36].description} name={fields[36].name} 
        isRequired={fields[36].mandatory}
        value={values[fields[36].name]} onChangeFunction={onChangeFunction} />
        /*<TextWithButton label={fields[28].description} name={fields[28].name} 
                        isRequired={fields[28].mandatory}
                        value={out_doc ? out_doc.number : ''}
                        button3ClickFunction={openTableFunction} />*/
      }
    </div>
  )
};

export default Docs;
