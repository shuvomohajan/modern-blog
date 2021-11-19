import {useState} from "react";

export default function SignIn() {

const [passwordShown,setPasswordShown]=useState(false);

   const shw_hidePassword=(e)=>{
     e.preventDefault();
      setPasswordShown(!passwordShown);
   }
  return (
    <div class="relative h-screen  bg-white flex flex-col space-y-10 justify-center items-center">
    <div class="relative sm:max-w-sm w-full">
    <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
    <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
       <div class="relative box-border border-2 border-blue-200 bg-white w-96 shadow-xl rounded p-5">
          <h1 class="text-3xl font-medium">Welcome</h1>
             <p class="text-sm">Please Enter your Email & Password</p>
    
      <form class="space-y-5 mt-5">
          <input type="text" class="w-full h-12 border border-gray-800 rounded px-3 " placeholder="Email" />
       <div class="w-full flex items-center border border-gray-800 rounded p-2 bg-gray-200">
          <input type={passwordShown ? "text": "password"} class="w-4/5 h-12 px-1" placeholder="  Password" />
          <button onClick={shw_hidePassword} class="text-blue-700 hover:bg-blue-400 rounded-md px-3">Show</button>
       </div>

       <div class="">
          <a href="#!" class="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">Forgot Password ?</a>
       </div>

       <button class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Login</button>
    </form>
  </div>
  </div>
</div>
  );
};

