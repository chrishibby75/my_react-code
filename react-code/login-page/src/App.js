import React, { useState, Fragment, useEffect } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoginInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoginInfo === "1") {
      setIsLoggedIn(true);
    } 
    // else {
    //   setIsLoggedIn(false);
    // }
  }, []);


  function handleLogin(email, password) {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    
  }
  
  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    // localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  }

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={handleLogout} />
      <main>
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {isLoggedIn && <Home onLogout={handleLogout} />}
      </main>
    </Fragment>
  );
};

export default App;