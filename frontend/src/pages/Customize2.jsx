import React ,{useContext, useState}from 'react'
import { userDataContext } from '../context/userContext';
import { MdKeyboardBackspace } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Customize2 = () => {

  const {userdata,backendImage,selectedImage,serverUrl,setuserData} = useContext(userDataContext);
  const [assistantName,setAssistantName] = useState(userdata ?.assistantName || "");
  const navigate=useNavigate()
  const [loading,setLoading] = useState(false)

  const handleUpdateAssistant = async ()=>{

    setLoading(true)
    try{
        
      let formData = new FormData()
      formData.append("assistantName",assistantName);
      if(backendImage){
          formData.append("file",backendImage);
      }else{
        formData.append("imageUrl",selectedImage);

      }
         const result = await axios.post(`${serverUrl}/api/user/update`,
          formData,{withCredentials:true}
        )
        setLoading(false)
        console.log(result.data);
        setuserData(result.data);
        navigate("/")
    }catch(err){
      setLoading(false)
      console.log(err);
    }

  }
  return (
    <div
      className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center
     items-center flex-col p-[20px] relative"
    >
      <MdKeyboardBackspace 
      className=' cursor-pointer absolute top-[30px] left-[30px] text-white w-[25px] h-[25px]'
      onClick={()=>navigate("/customize")}
      />
      <h1 className="text-white text-[30px] text-center mb-[30px]">
  Enter Your
  <span className="text-blue-200"> Assistant Name</span>
</h1>

       <input type="text" 
        onChange={(e)=>setAssistantName(e.target.value)}
        value={assistantName}
        required 
        placeholder='eg. Shree'
        className=' max-w-[600px] w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]'      
        />

       {assistantName && (
  <button
    className="mt-[30px] font-semibold text-black text-[19px] min-w-[300px] h-[60px] bg-white rounded-full cursor-pointer"
    onClick={handleUpdateAssistant}
  >
    {!loading ? "Finally Create Your Assistant" : "Loading..."}
  </button>
)}

        
    </div>
  )
}

export default Customize2
