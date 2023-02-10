import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Table.module.css';

function Table(props) {

  const listFields = useSelector(state => state.app.counterpartiesList[props.type]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {
            Object.values(listFields.fields).map((field) => {
              return <th key={field.id}>{field.description}</th>
            })
          }
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  )
};

export default Table;
