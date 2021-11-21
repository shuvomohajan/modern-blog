import { useState } from "react";
import validator from "validator";
import SignUp from "../images/signUp.gif";
import SignUpBack from "../images/signUpBack.jpg";
import PassEye from "../images/PassEye.png";

export default function Register() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isNotMatch, setIsNotMatch] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    let mail = e.target.value;

    setEmail(mail);
    if (validator.isEmail(mail)) {
      setValidEmail("");
    } else {
      setValidEmail("Enter Valid Email");
    }
    setSubmitted(false);
  };
  const [passwordShown,setPasswordShown]=useState(false);

   const shw_hidePassword=(e)=>{
     e.preventDefault();
      setPasswordShown(!passwordShown);
   }

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleConfirmPassword = (e) => {
    const cnfrmpass = e.target.value;
    setConfirmPassword(cnfrmpass);
    if (password !== cnfrmpass) {
      setIsNotMatch(true);
      setSubmitted(false);
    } else {
      setIsNotMatch(false);
    }
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>You are successfully registered!!</h1>
      </div>
    );
  };
  //Confirm Password Error Message
  const confirmErrorMessage = () => {
    return (
      <div
        style={{
          display: isNotMatch ? "" : "none",
        }}
      >
        <h1>Password doesn't match.</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  
  return (
    <div className="flex items-center h-screen bg-white">
    <div class=" flex items-center justify-between box-border border-2  rounded-lg bg-white shadow-2xl  mx-48 w-3/4 h-4/5  absolute">
    
       <div className="w-3/5 h-full">
          <img src={SignUpBack } alt="SignUpPage" className="w-3/5 h-full absolute "/>
           <img src={SignUp } alt="SignUpPage" className="w-2/4 h-2/4 mx-48 my-44  relative"/>
        </div>
    <div className="w-2/5 h-7/12">
  
         <h1 className="text-5xl  fond-semibold text-black ml-5 pt-5">Get started with your account </h1>
         <h2 className="text-xl font-medium text-black ml-7 pt-5 italic">It's quick & easy.</h2>
       {/* Calling to the methods */}
       <div className="text-red-500 text-xs font-semibold ml-8 pt-3 italic">{errorMessage()}</div>
       <div className="text-green-500 text-xs font-semibold ml-8 pt-3 italic">{successMessage()}</div>

       <form>
         <div className="space-y-2 w-3/4 mx-12  ">
      <div className="flex mx-4 md:mx-2 border-b-2 border-gray-700">
      <svg class="svg-icon w-8 h-12" viewBox="0 0 20 20">
							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
						</svg>

           <input
            className="w-full h-12 px-2 border-0 focus:outline-none font-semibold "
            onChange={handleName}
            value={name}
            type="text"
            placeholder="Name"
          />
       </div>

       <div className="flex mx-4 md:mx-2 border-b-2 border-gray-700 ">
                  <svg className="svg-icon w-8" viewBox="0 0 20 20">
							<path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z" ></path>
						</svg>

          <input
            className="w-full h-12 px-2 border-0 focus:outline-none font-semibold "
            onChange={handleEmail}
            value={email}
            type="email"
            placeholder="Email"
          />
          </div>
          <div className="text-red-500 text-xs italic">{validEmail}</div>

          <div className="flex mx-4 md:mx-2 border-b-2 border-gray-700">
                   <svg className="svg-icon w-8 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z"
                                    fill="currentColor"/>
                   </svg>
          <input
            className="w-4/5 h-12 px-1 border-0 focus:outline-none font-semibold"
            onChange={handlePassword}
            value={password}
            type={passwordShown ? "text": "password"}
            placeholder="Password"
          />
           <label onClick={shw_hidePassword}>
                    <img src={PassEye} alt='eye' className="w-6 h-10 pt-3 ml-4 cursor-pointer"/>
               </label>
            </div>
            <div className="flex mx-4 md:mx-2 border-b-2 border-gray-700">
            <svg className="svg-icon w-8 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"  d="M6 8C4.34315 8 3 9.34315 3 11V13C3 14.6569 4.34315 16 6 16C7.65685 16 9 14.6569 9 13H15V15H17V13H18V15H20V11H9C9 9.34315 7.65685 8 6 8ZM7 13V11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14C6.55228 14 7 13.5523 7 13Z"
             fill="currentColor"
           />
            </svg>
          <input
            className="w-4/5 h-12 px-1 border-0 focus:outline-none font-semibold"
            onChange={(e) => handleConfirmPassword(e)}
            value={confirmPassword}
            type="password"
            placeholder="Please input password again"
          />
          </div>
          <div className="text-red-500 text-xs italic">
            {confirmErrorMessage()}
          </div>

          <button
            onClick={handleSubmit}
            className="text-center w-1/3 ml-2 bg-blue-900 rounded-md text-white py-3 font-medium "
            type="submit"
          >
            Submit
           </button>
         </div>
         <div className="flex items-center mt-3">
           <h1 className="font-medium ml-14 ">Already a ModernBlogger?</h1>
             <a href="#!" class="font-medium text-blue-900 ml-1">SignIn</a>
          </div>
       </form>
       <div className="pt-12 ml-5">
         <p className="font-medium">By Clicking Submit,you are agree to our <a href="#!" className="font-medium text-blue-900">Terms</a> and that you have read our  <a href="#!" className="font-medium text-blue-900">Privacy Policy</a> and
         <a href="#!" className="font-medium text-blue-900"> Content Policy</a>.</p>
       </div>
     </div>
     </div>
   </div>
  );
}
