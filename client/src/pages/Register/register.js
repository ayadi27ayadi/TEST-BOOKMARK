import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {register } from "../../actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [msg, setMsg] = useState(false);
  const onInputChange = (e) => {
    e.preventDefault(); 
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(register(Form));
    setMsg(!msg);
      //  setMsg(false);
      if (msg) {
        setInterval(() => {
          setMsg(!msg);
        }, 4000);
      }
    setForm({
      ...Form,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword:"",
      phone: "",
    });
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
 <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
 <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
     <h1 className="mb-8 text-3xl text-center">Sign up</h1>
     <input 
         type="text"
         className="block border border-grey-light w-full p-3 rounded mb-4"
         name="firstName"
         placeholder="First Name" 
         value={Form.firstName}
         onChange={(e)=> onInputChange(e) }/>

     <input 
         type="text"
         className="block border border-grey-light w-full p-3 rounded mb-4"
         name="lastName"
         placeholder="Last Name" 
         value={Form.lastName}
         onChange={(e)=> onInputChange(e) }/>

     <input 
         type="email"
         className="block border border-grey-light w-full p-3 rounded mb-4"
         name="email"
         placeholder="Email" 
         value={Form.email}
         onChange={(e)=> onInputChange(e) }/>
     <input 
         type="password"
         className="block border border-grey-light w-full p-3 rounded mb-4"
         name="password"
         placeholder="Password"
         value={Form.password}
         onChange={(e)=> onInputChange(e) } />
         <input 
             type="text"
             className="block border border-grey-light w-full p-3 rounded mb-4"
             name="phone"
             placeholder="Phone"
             onChange={(e)=> onInputChange(e) } />
     <button
         type="submit"
         onClick={(e)=>onSubmitForm(e)}
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
     >Create Account</button>
      { msg ? <p style={{color: 'green'}}> Account registered successfully</p> : null}
     <div className="text-center text-sm text-grey-dark mt-4">
         By signing up, you agree to the 
         <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
             Terms of Service
         </a> and 
         <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
             Privacy Policy
         </a>
     </div>
 </div>

 <div className="text-grey-dark mt-6">
     Already have an account? 
     <a className="no-underline border-b border-blue text-blue" href="/login">
         Log in
     </a>.
 </div>
</div>
           
        </div>
  );
};

export default Register;