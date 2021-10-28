import React from "react";
import UserFinder from "./components/UserFinder/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS =[
  { id: "u1", name: "Chris" },
  { id: "u2", name: "Heather" },
  { id: "u3", name: "Kade" }
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }
  return (
<UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>  
    );
};

export default App;