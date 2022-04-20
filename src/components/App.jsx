import { useState } from "react";
import Form from './Form/Form';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';
import useLocalStorage from "Hooks/UseStorage";
import { nanoid } from "nanoid";
 import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 
  const [contacts, setContacts] = useLocalStorage('contacts', [])
  const [filter, setFilter] = useState('');

  //===Метод меняeющий соcтояния поля Filter===//
   const onChangeFilter = e => {
    setFilter(e.target.value)
  };
 
  //===Метод добавления нового пользователя===//
  const addContact = ( name, number ) => { 
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.some((contact) => contact.name === name)) { 
      console.log(name);
      return alert(`${name} is already in contacts.`)
    }
    return setContacts([newContact,...contacts])
  }
     
  //==Метод удаления контактов по id==//
   const onDeleteContact = (id) => {
   setContacts(contacts.filter(contact => contact.id !== id))
};
  
 //===Метод который ищет пользователя по имени===//
  const onSerchByName = () => {
    const normalize = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalize))
  };
  
   const search = onSerchByName();
  
    return (
      <div>
        <Form
          onSubmit={addContact} />
       <Filter
          title="Contacts"
          value={filter}
          onChange={onChangeFilter}
        />
        <UserList
          item={search}
          deleteContact={onDeleteContact}
        />
      </div>
     );
  
}

export default App;