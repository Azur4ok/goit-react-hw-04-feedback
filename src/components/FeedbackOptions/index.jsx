import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedBackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.wrapper}>
      {options &&
        options.map((option, indx) => (
          <li key={`${option}_${indx}`} className={styles.list}>
            <button className={styles.button} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
