import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetPersonsQuery } from '../../../../api/counterparties/persons';
import Pagination from '../../../CommonComponents/Pagination/Pagination';
import Table from '../../../CommonComponents/Table/Table';

import styles from './PersonsList.module.css';

function PersonsList(props) {

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const fields = useSelector(state => state.app.counterpartiesList[1].fields);

  const { data, isSuccess, isLoading } = useGetPersonsQuery(page, size);

  if (isLoading) return <div>Loading...</div>

  return (
    <div className={styles.wrapper}>
      {
        isSuccess &&
        <>
          <Table fields={fields} data={data.data} viewFunction={props.viewFunction} openInfoId={props.openInfoId} />
          <Pagination totalPages={data.totalPages} currentPage={data.currentPage} onClickFunction={setPage} />
        </>
      }
    </div>
  )
};

export default PersonsList;
