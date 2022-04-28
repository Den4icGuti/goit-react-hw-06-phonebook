import styles from './Filter.module.css';
import { useState } from 'react';
// import { searchByName } from 'redux/slice';
// import { useSelector,useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';

const Filter = () => { 
  const [filter, setFilter] = useState('');

  //   const onChangeFilter = e => {
  //   setFilter(e.target.value)
  //  };

  // const search = useSelector(state => state.contacts.filter);
  // const dispatch = useDispatch()
  return (
    <div className={styles.BoxFilter}>
       <h2>Find contacts by name</h2>
      <label className={styles.Filter} >Find contacts by name
        <input type='text' value={filter} onChange={(e) => setFilter(e.currentTarget.value)}/>
      </label>
    </div>
    
  )
}

// Filter.propTypes = {
//   title: PropTypes.string.isRequired,
//   value:PropTypes.string.isRequired
// }

export default Filter;