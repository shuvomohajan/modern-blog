import { useState } from "react";
import validator from "validator";

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
    <div className="py-48 px-48">
    <div className="py-8 px-8 max-w-sm mx-auto box-border border-2 border-blue-200 bg-white rounded-xl shadow-md space-y-2 ">
   
      <div className="font-semibold">
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="text-red-500 text-xs italic">{errorMessage()}</div>
      <div className="text-green-500 text-xs italic">{successMessage()}</div>

      <form>
        <div className="w-full bg-grey-lightest text-center space-y-2 ">
          {/* Labels and inputs for form data */}
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="appearance-none border border-blue-100 rounded w-full py-2 px-3 text-grey-darker"
            onChange={handleName}
            value={name}
            type="text"
          />

          <label className="block text-grey-darker text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none border border-blue-100 rounded w-full py-2 px-3 text-grey-darker"
            onChange={handleEmail}
            value={email}
            type="email"
          />
          <div className="text-red-500 text-xs italic">{validEmail}</div>

          <label className="block text-grey-darker text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="appearance-none border border-blue-100 rounded w-full py-2 px-3 text-grey-darker"
            onChange={handlePassword}
            value={password}
            type="password"
          />

          <label className="block text-grey-darker text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            className="appearance-none border border-blue-100 rounded w-full py-2 px-3 text-grey-darker"
            onChange={(e) => handleConfirmPassword(e)}
            value={confirmPassword}
            type="password"
          />
          <div className="text-red-500 text-xs italic">
            {confirmErrorMessage()}
          </div>

          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-green-800 border border-red-600 rounded-full text-gray-100 text-sm font-semibold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
