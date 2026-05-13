import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userDataContext = createContext();

const UserContext = ({ children }) => {

  const serverUrl = "http://localhost:8000";

    const [userdata, setuserData] = useState(null);
    const [frontendImage, setFrontendImage] = useState(null);
    const [backendImage, setBackendImage] = useState(null);
    const [selectedImage,setSelectedImage] = useState(null)

  const handleCurrentUser = async () => {
    try {

      const result = await axios.get(
        `${serverUrl}/api/user/current`,
        {
          withCredentials: true,
        }
      );

      setuserData(result.data);
      console.log(result.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleCurrentUser();
  }, []);

  const value = {
    serverUrl,
    userdata,
    setuserData,
    frontendImage, setFrontendImage,
    backendImage, setBackendImage,
    selectedImage,setSelectedImage
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;