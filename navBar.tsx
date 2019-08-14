// src/components/NavBar.js
// .. other imports

// NEW - import the Link component
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    // .. code removed for brevity
    <>
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {/* NEW - add a link to the home and profile pages */}
      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}
      //..
    </>
  );
};

export default NavBar;
