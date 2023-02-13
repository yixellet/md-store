import React from 'react';

import styles from './Info.module.css';

function Info(props) {

  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.name}>{data.surname} {data.name} {data.patronym}</h2>
      <p>{data.inn}</p>
    </div>
  )
};

export default Info;
