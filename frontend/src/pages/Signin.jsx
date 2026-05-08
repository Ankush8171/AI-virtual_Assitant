import React, { useContext, useState } from 'react'
import bg from "../assets/authBg.png"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/userContext';
import axios from "axios"


const Signin = () => {

  const [showPassword,setShowPassword] = useState(false);
  const {serverUrl} = useContext(userDataContext)
  const navigate = useNavigate();

  console.log(serverUrl)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [err,setError] = useState("")
  const [loading,setLoading] = useState("")

  const handleSignIn=async(e)=>{
    console.log("Signup clicked");
    e.preventDefault()
    setError("")
    setLoading(true)
    try{

      let result = await axios.post(`${serverUrl}/api/auth/signin`,{
        email,
        password
      },{withCredentials:true})
      console.log(result);
     setLoading(false)

    }catch(err){
      console.log(err)
      setLoading(false)
      setError(err.response.data.message)
    }
  }

  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center'
     style={{backgroundImage:`url(${bg})`}}>
      <form onSubmit={handleSignIn}
      className='max-w-[500px] w-[90%] h-[500px] bg-[#00000062] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]'>
        <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Login to 
           <span className='text-blue-500 ml-[5px]'>virtual Assistant</span>
        </h1>

        <input type="email" 
        required 
        placeholder='Enter your Email'
        className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]'
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />

        <div
        className='w-full h-[60px] border-2 border-white bg-transparent text-white  rounded-full text-[18px] relative'>
          <input type={showPassword?"text":"password"}
          required 
          placeholder='password'
          className='w-full rounded-full outline-none bg-transparent placeholder:-gray-300 px-[20px] py-[10px]'
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
           
          />
          {!showPassword && <FaRegEye  className=' w-[25px] h-[25px] absolute top-[18px] right-[20px] text-[white] cursor-pointer'
          onClick={()=>setShowPassword(true)} />}
          {showPassword && <FaRegEyeSlash  className=' w-[25px] h-[25px] absolute top-[18px] right-[20px] text-[white] cursor-pointer'
          onClick={()=>setShowPassword(false)} />}
        </div>
        {err.length >0 && <p className='text-red-500 text-[17px]'> *{err}</p>}

        <button 
        type="submit"
        className='mt-[30px] font-semibold text-black text-[19px] min-w-[130px] h-[60px] bg-white rounded-full cursor-pointer'
        disabled={loading}>
          {loading ?"Loading..":"Sign In"} 
        </button>

        <p onClick={()=>navigate("/signup")}
         className='text-white text-[18px]'>Want to create a new account ?<span className='ml-[5px] text-blue-400'>Signup</span></p>
        
      </form> 
    </div>
  )
}

export default Signin
