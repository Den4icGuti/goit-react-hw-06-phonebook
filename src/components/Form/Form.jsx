import { useState } from "react";
import PropTypes from "prop-types";
import styles from './Form.module.css';

const Form = ({onSubmit}) => { 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
//===Метод меняющий состояние в полях===//
  const onHandleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  //===Функция сброса полей после отправки формы===//
  const resetForm = () => { 
    setName("");
    setNumber("");
  }

  //===Функция отправки формы===//
  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(name,number)
    resetForm()
  };

  return (
    <form onSubmit={onHandleSubmit} className={styles.Form}>
      <h2>Phonebook</h2>
      <label className={styles.label}>Name
        <input
          type="text"
          value={name}
          name='name'
          onChange={onHandleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>Phone
        <input
          type="tel"
          value={number}
          onChange={onHandleChange}
          name='number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button tupe='submit' className={styles.btnSubmit}>Add contact</button>
    </form>
  );
  
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Form;