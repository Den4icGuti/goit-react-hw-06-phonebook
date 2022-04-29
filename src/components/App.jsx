// import { useState } from "react";
import Form from './Form/Form';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Form />
      <Filter title="Contacts" />
      <UserList
      // item={search}
      />
    </div>
  );
};

export default App;
