import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../services/store/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    //   remove token
    window.localStorage.removeItem("token");
    // unset the user from redux
    dispatch(logoutUser());

    navigate("/", {
      state: "You have successfully logged out.",
    });
  }, []);

  return <div>Logout</div>;
};

export default Logout;
