import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import UserContext, { AuthContext } from "../Context/Context";

const GoogleLogin = () => {
  const { googleOAuth, user, signout } = useContext(AuthContext);
  const googleLogin = () => {
    googleOAuth()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Welcome " + user.displayName);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  // console.log(AuthContext);
  return (
    <div>
      {!user && (
        <Button className="" onClick={googleLogin}>
          Login With Google
        </Button>
      )}
      {user && (
        <Button className="" onClick={signout}>
          Sign Out
        </Button>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default GoogleLogin;
