import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Customize from "./pages/Customize";
import Home from "./pages/Home";

import { userDataContext } from "./context/userContext";

const App = () => {

  const { userdata } = useContext(userDataContext);

  return (
    <Routes>

      <Route
        path="/"
        element={
          userdata?.assistantImage && userdata?.assistantName
            ? <Home />
            : <Navigate to="/customize" />
        }
      />

      <Route
        path="/signup"
        element={
          userdata
            ? <Navigate to="/" />
            : <Signup />
        }
      />

      <Route
        path="/signin"
        element={
          userdata
            ? <Navigate to={"/"} />
            : <Signin />
        }
      />

      <Route
        path="/customize"
        element={
          userdata
          ?<Customize />
          :<Navigate to ={"/signin"}/>
        }
      />

    </Routes>
  );
};

export default App;