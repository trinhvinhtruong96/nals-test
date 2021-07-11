import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import styles from './Loading.module.css';

const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
    <div className={styles.loading}>
      <Loader type="Rings" color="#009DDC" />
    </div>
    )
  );
};

export default Loading;
