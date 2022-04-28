import styles from './Filter.module.css';
import { useState } from 'react';
// import { searchByName } from 'redux/slice';
// import { useSelector,useDispatch } from 'react-redux';

 import PropType from 'prop-types';

const Filter = () => { 
  const [filter, setFilter] = useState('');

  return (
    <div className={styles.BoxFilter}>
      <h2>Find contacts by name</h2>
      <label className={styles.Filter} >Find contacts by name
        <input type='text' value={filter} onChange={(e) => setFilter(e.currentTarget.value)} />
      </label>
    </div>
  );
}

Filter.proptype = {
  Filter:PropType.node.isRequired,
}

export default Filter;