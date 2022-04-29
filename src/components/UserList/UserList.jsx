import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListItem from 'components/ListItem/ListItem';
import styles from './UserList.module.css';

const UserList = ({ deleteContact }) => {
  const item = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const normalize = filter.toLowerCase();

  const filteredItems = item.filter(item =>
    item.name.toLowerCase().includes(normalize)
  );

  return (
    <div className={styles.ListUsers}>
      <ul className={styles.list}>
        {filteredItems.map(items => (
          <ListItem
            className={styles.item}
            key={items.id}
            {...items}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default UserList;
