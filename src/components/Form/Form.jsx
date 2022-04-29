import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ItemSlice';
import styles from './Form.module.css';

import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //===Функция сброса полей после отправки формы===//
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  //===Функция отправки формы===//
  const onHandleSubmit = e => {
    e.preventDefault();

    if (item.some(items => items.name === name)) {
      alert(`There is already a user ${name} with this`);
      return;
    }
    if (item.some(items => items.number === number)) {
      alert(`There is already a number ${number} with this`);
      return;
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={styles.Form}>
        <h2>Phonebook</h2>
        <label className={styles.label}>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={e => setName(e.currentTarget.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Phone
          <input
            type="tel"
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button tupe="submit" className={styles.btnSubmit}>
          Add contact
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Form;
