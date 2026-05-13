import React, { useRef, useContext } from "react";
import Card from "../components/Card";
import { RiImageAddLine } from "react-icons/ri";
import { MdKeyboardBackspace } from "react-icons/md";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";


const image1 = "/assets/image1.png";
const image2 = "/assets/image2.jpg";
const image3 = "/assets/authBg.png";
const image4 = "/assets/image4.png";
const image5 = "/assets/image5.png";
const image6 = "/assets/image6.jpeg";
const image7 = "/assets/image7.jpeg";

const Customize = () => {

  const {serverUrl,
    userdata,
    setuserData,
    frontendImage, setFrontendImage,
    backendImage, setBackendImage,
    selectedImage,setSelectedImage} = useContext(userDataContext)

  const inputImage = useRef(null);
  const navigate = useNavigate()

  const handleImage=(e)=>{
    const file =e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))

   

  }
  return (
    <div
      className="w-full min-h-screen bg-gradient-to-t from-[black] to-[#030353] flex justify-center
     items-center flex-col p-[20px]"
    >
      <MdKeyboardBackspace 
            className=' cursor-pointer absolute top-[30px] left-[30px] text-white w-[25px] h-[25px]'
            onClick={()=>{
             console.log("clicked")
               navigate("/")
                }}
        />
      <h1 className="text-white text-[30px] text-center mb-[30px]">
        Select your
        <span className="text-blue-200">Assistant Image</span>
      </h1>
      <div className="w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />

        <div
          className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[#0000ff66] rounded-2xl overflow-hidden
    hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-2 hover:border-white flex items-center justify-center
     ${selectedImage === "input" ?"border-4 border-white shadow-2xl  shadow-blue-950":null}`}
    onClick={()=>{
      inputImage.current.click()
      setSelectedImage("input")
    }}>
          {
            !frontendImage &&  <RiImageAddLine className="text-white w-[25px] h-[25px]" />
          }
          {
            frontendImage && <img src={frontendImage} className="h-full object-cover"/>
          }
          
        </div>
        <input onChange={handleImage}
         type="file" accept='image/*' ref={inputImage} hidden/>
      </div>

      {selectedImage && <button onClick={()=>navigate("/customize2")}
      className="mt-[30px] cursor-pointer font-semibold text-black text-[19px] min-w-[130px] h-[60px] bg-white rounded-full cursor-pointer">
        Next
      </button>}     
    </div>
  );
};

export default Customize;
