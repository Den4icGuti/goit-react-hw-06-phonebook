import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ListItem from "components/ListItem/ListItem";
import styles from './UserList.module.css';

const UserList = ({deleteContact }) => {
  const item = useSelector(state => state.contacts.items)
  return (
    <div className={styles.ListUsers}>
      <ul className={styles.list}>
        {item.map(items => (
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
  number:PropTypes.string
}

export default UserList;

