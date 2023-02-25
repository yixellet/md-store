import React from 'react';
import { useGetDocumentQuery, useGetDocumentsQuery } from '../../../api/documents';
import { useGetFieldsQuery } from '../../../api/metadata/fields';
import TextWithButton from '../../CommonComponents/Inputs/TextWithButton/TextWithButton';
import styles from './Tabs.module.css';

function Docs(props) {
  /**
  * Вкладка с основной информацией о данных.
  */

  const { values, onChangeFunction } = props;
  const { data: fields } = useGetFieldsQuery(values.group_ref);
  const { data: in_docs } = useGetDocumentsQuery(1);
  const { data: out_docs } = useGetDocumentsQuery(2);
  const { data: in_doc } = useGetDocumentQuery(values.incomingdocguid, { skip: !values.incomingdocguid });

  return (
    <div className={styles.fields}>
      {
        (fields && Object.keys(fields).includes('27')) &&
        <TextWithButton label={fields[27].description} name={fields[27].name} 
                        isRequired={fields[27].mandatory}
                        value={in_doc ? in_doc.number : ''} onChangeFunction={onChangeFunction} />
      }
      {
        (fields && Object.keys(fields).includes('28')) &&
        <TextWithButton label={fields[28].description} name={fields[28].name} 
                        isRequired={fields[28].mandatory}
                        value={in_doc ? in_doc.number : ''} onChangeFunction={onChangeFunction} />
      }
    </div>
  )
};

export default Docs;
