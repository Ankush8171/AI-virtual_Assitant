import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Customize from "./pages/Customize";
import Customize2 from "./pages/Customize2";
import Home from "./pages/Home";

import { userDataContext } from "./context/userContext";

const App = () => {

  const { userdata } = useContext(userDataContext);

  // only while checking auth
  

  return (
    <Routes>

      <Route
        path="/"
        element={
          userdata?.assistantImage && userdata?.assistantName
            ? <Home />
            : userdata
            ? <Navigate to="/customize" />
            : <Navigate to="/signin" />
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
            ? <Navigate to="/customize" />
            : <Signin />
        }
      />

      <Route
        path="/customize"
        element={
          userdata
            ? <Customize />
            : <Navigate to="/signup" />
        }
      />

      <Route
        path="/customize2"
        element={
          userdata
            ? <Customize2 />
            : <Navigate to="/signup" />
        }
      />

    </Routes>
  );
};

export default App;