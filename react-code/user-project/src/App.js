import React, { useState } from 'react';
import AddUser from "./components/AddUser/AddUser"
import UsersList from './components/UsersList/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(uName, uAge) {
    setUsersList(prevUsersList => {
      return[ ...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
