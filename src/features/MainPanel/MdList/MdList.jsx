import React from 'react';
import { useGetMetadataQuery } from '../../../api/metadata';

import styles from './MdList.module.css'
import MdListItem from './MdListItem/MdListItem';

function MdList() {
  const { data, isSuccess } = useGetMetadataQuery();
  return (
    <ul className={styles.list}>
      <MdListItem />
      <MdListItem />
      <MdListItem />
      <MdListItem />
    </ul>
  )
};

export default MdList;
