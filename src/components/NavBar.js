import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        borderBottom: "2px solid red",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}>
      <NavLink
        style={{ marginRight: "10px", padding: "10px", color: "white" }}
        to="/">
        Home
      </NavLink>
      <NavLink
        style={{ marginRight: "10px", padding: "10px", color: "white" }}
        to="/movies">
        Movie Trailers
      </NavLink>
      <NavLink
        style={{ marginRight: "10px", padding: "10px", color: "white" }}
        to="/mylist">
        My List
      </NavLink>
    </div>
  );
}

export default NavBar;
