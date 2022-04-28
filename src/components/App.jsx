// import { useState } from "react";
import Form from './Form/Form';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  
  // const [contacts, setContacts] = useLocalStorage('contacts', [])
  // const [filter, setFilter] = useState('');
 
  //===Метод меняeющий соcтояния поля Filter===//
 
  
 //===Метод который ищет пользователя по имени===//
  // const onSerchByName = () => {
  //   const normalize = filter.toLowerCase();
  //   // return contacts.filter(contact => contact.name.toLowerCase().includes(normalize))
  // };
  
  //  const search = onSerchByName();
  
  return (
      
      <div>
        <Form />
          
       <Filter
          title="Contacts"
         
          
        />
        <UserList
          // item={search}
        />
      </div>
     );
  
}

export default App;

