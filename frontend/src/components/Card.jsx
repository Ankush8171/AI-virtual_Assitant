
import React from 'react'
import { useContext } from 'react'
import { userDataContext } from "../context/userContext";

const Card = ({image}) => {

   const {serverUrl,
      userdata,
      setuserData,
      frontendImage, setFrontendImage,
      bakendImage, setBackendImage,
      selectedImage,setselectedImage} = useContext(userDataContext)

  return (
    <div className={` w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[#0000ff66] rounded-2xl overflow-hidden
    hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-2 hover:border-white
    ${selectedImage==image ?"border-4 border-white shadow-2xl  shadow-blue-950":null}`} onClick={()=>setselectedImage(image)}>
        <img src={image} className='h-full object-cover'/>
      
    </div>
  )
}

export default Card
