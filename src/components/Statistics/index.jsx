import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}><span className={styles.text}>good: {good}</span></li>
      <li className={styles.listItem}><span className={styles.text}>neutral: {neutral}</span></li>
      <li className={styles.listItem}><span className={styles.text}>bad: {bad}</span></li>
      <li className={styles.listItem}><span className={styles.text}>total: {total}</span></li>
      <li className={styles.listItem}><span className={styles.text}>positive feedback: {positivePercentage}%</span></li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
