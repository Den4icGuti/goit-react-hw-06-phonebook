import styles from './Filter.module.css';
// import { useState } from 'react';
import { searchByName } from 'redux/ItemSlice';
import { useSelector, useDispatch } from 'react-redux';

import PropType from 'prop-types';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(searchByName(value));
  };

  return (
    <div className={styles.BoxFilter}>
      <h2>Find contacts by name</h2>
      <label className={styles.Filter}>
        Find contacts by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </div>
  );
};

Filter.proptype = {
  Filter: PropType.node.isRequired,
};

export default Filter;
