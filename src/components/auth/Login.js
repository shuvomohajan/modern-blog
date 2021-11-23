import {useState} from "react";
import LoginImg from "../../images/LoginPage Image.png";
import PassEye from "../../images/PassEye.png";
export default function SignIn() {

const [passwordShown,setPasswordShown]=useState(false);

   const shw_hidePassword=(e)=>{
     e.preventDefault();
      setPasswordShown(!passwordShown);
   }
  return (
   <div className="flex items-center justify-center  h-screen bg-white">
   <div className="flex flex-row absolute w-3/4 h-4/5 mb-8 max-mx-48  rounded-lg shadow-2xl   bg-white ">

            <div className="px-12 py-32 max-w-2/5  xl:w-2/5 h-7/12 space-y-4">

               <h1 className="text-3xl sm:text-4xl  px-2 fond-bold text-blue-900">Welcome </h1>
               <p className="text-semibold px-2 italic">Please Enter your Email & Password.</p>

                                          <form>
                                          <div className="space-y-6 w-full lg:w-3/4 mx-4 md:mx-12 ">
                                                   <div className="flex border-b-2 border-gray-700">   
                                                                     <svg className="svg-icon w-8" viewBox="0 0 20 20">
                                                                        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z" ></path>
                                                                     </svg>
                                                                     <input type="text" className="w-full h-12 px-2 border-0 focus:outline-none font-semibold " placeholder="Email" />
                                                   </div>

                                          <div className="flex border-b-2 border-gray-700 ">
                                          <svg className="svg-icon w-8 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z"
                                                                              fill="currentColor"/>
                                                            </svg>

                                          
                                          <input className="w-4/5 h-12 px-1 border-0 focus:outline-none font-semibold" type={passwordShown ? "text": "password"} placeholder="Password"/>
                                          <label onClick={shw_hidePassword}>
                                                   <img src={PassEye} alt='eye' className="w-6 h-10 pt-3 ml-4 cursor-pointer"/>
                                                </label>
                                             </div>
                                             

                                          <button
                                             className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium "
                                             type="submit"
                                          >
                                             Login
                                          </button>
                                          </div>
                                          </form>
                                          <div className="flex items-center mt-3">
                                          <h1 className="font-medium px-16 sm:px-28 lg:px-16 xl:px-12 2xl:px-28">Don't Have an Account?</h1>
                                          </div>
                                             <a href="#!" class="font-medium px-28 sm:px-44 lg:px-28 2xl:px-40 text-blue-900 ml-1">SignUp</a>

            </div>




               <div className="max-w-3/5 lg:w-3/5 sm:max-h-full hidden lg:block ">
                  <img src={LoginImg} alt="LoginPage" className="w-3/5 h-full absolute "/>
               </div>
   </div>
 </div>
  );
};

