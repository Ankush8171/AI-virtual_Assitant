import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const { userdata,serverUrl,setuserData } = useContext(userDataContext);
  const navigate = useNavigate()

  const handleLogout = async ()=>{
    try{
      const result = await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true});
      navigate("/signin");
      setuserData(null);
    }catch(err){
      setuserData(null);
      console.log("Logout Error",err);
    }
  }

  return (
    <div
      className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col gap-[15px]"
    >
      <button
        className='absolute mt-[30px] font-semibold text-black text-[19px] min-w-[150px] h-[60px] bg-white rounded-full cursor-pointer
        top-[20px] right-[20px]'
        onClick={handleLogout}>
        LogOut
        </button>

        <button
        className='absolute mt-[30px] font-semibold text-black text-[19px] min-w-[150px] h-[60px] bg-white rounded-full cursor-pointer
        top-[90px] right-[20px] px-[20px] py-[10px]'
        onClick={()=>useNavigate("/customize")}>
       Customize your Assistant
        </button>
        
      <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden'>
        
        <img
          src={userdata?.assistantImage}
          alt=""
          className='h-full object-cover rounded-4xl shadow-lg'
        />
      </div>
      <h1 className='text-white text-[18px] font-semibold'> I'm {userdata.assistantName}</h1>
    </div>
  )
}

export default Home