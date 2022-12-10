import { DarkThemeToggle, Flowbite } from "flowbite-react";
import React from "react";
import GoogleLogin from "../../Auth/GoogleLogin/GoogleLogin";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <div>
      <Nav></Nav>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Header;
