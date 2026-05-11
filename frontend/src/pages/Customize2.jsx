import React ,{useContext, useState}from 'react'
import { userDataContext } from '../context/userContext';

const Customize2 = () => {

  const {userdata,backendImage,selectedImage} = useContext(userDataContext);
  const [assistantName,setAssistantName] = useState(userdata ?.AssistantName || "");

  const handleUpdateAssistant = async(req,res)=>{
    
  }
  return (
    <div
      className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center
     items-center flex-col p-[20px]"
    >
      <h1 className='text-white text-[30px] text-center mb-[30px]">
        Select your'> Enter Your <span className='text-blue-200'> Assitant Name</span>
      </h1>

       <input type="text" 
        onChange={(e)=>setAssistantName(e.target.value)}
        value={assistantName}
        required 
        placeholder='eg. Shree'
        className=' max-w-[600px] w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]'      
        />

        {assistantName && <button
      className="mt-[30px] cursor-pointer font-semibold text-black text-[19px] min-w-[300px] h-[60px] bg-white rounded-full cursor-pointer">
        Finally Create Your Assistant
      </button>

        }
    </div>
  )
}

export default Customize2
