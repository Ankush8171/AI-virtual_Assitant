import React, { useContext, useState } from 'react'
import bg from "../assets/authBg.png"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/userContext';
import axios from "axios"


const Signup = () => {

  const [showPassword,setShowPassword] = useState(false);
  const {serverUrl,userdata,setuserData} = useContext(userDataContext)
  const navigate = useNavigate();

  console.log(serverUrl)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [err,setError] = useState("")
  const [loading,setLoading] = useState("")

  const handleSignUp=async(e)=>{
    console.log("Signup clicked");
    e.preventDefault()
    navigate('/signin')
    setLoading(true)
    setError("")
    try{

      let result = await axios.post(`${serverUrl}/api/auth/signup`,{
        name,
        email,
        password
      },{withCredentials:true})

      setuserData(result.data);
      setLoading(false);
      navigate("/customize");

    }catch(err){
      console.log(err)
       setuserData(null);
      setError(err.response.data.message)
      setLoading(false)  
      
    }
  }

  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center'
     style={{backgroundImage:`url(${bg})`}}>
      <form onSubmit={handleSignUp}
      className='max-w-[500px] w-[90%] h-[500px] bg-[#00000062] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]'>
        <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Register to 
           <span className='text-blue-500'>virtual Assistant</span>
        </h1>

        <input type="text" 
        required
        placeholder='Enter your Name'
        className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]'
        onChange={(e)=>setName(e.target.value)}
        value={name}
        />

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

        <button type="submit"
        className='mt-[30px] font-semibold text-black text-[19px] min-w-[130px] h-[60px] bg-white rounded-full cursor-pointer'
        disabled={loading}>
        {loading ?"Loading...":"Sign up"}
        </button>
        <p onClick={()=>navigate("/signin")}
         className='text-white text-[18px]'>Already have an account ?<span className='ml-[5px] text-blue-400'>SignIn</span></p>
        
      </form> 
    </div>
  )
}

export default Signup
