import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/authAction";

const Login = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => {
    return state.authReducers;
  });
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    e.preventDefault(); 
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const OnSubmitForm = (e) => {
    e.preventDefault();
    dispatch(login(Form));
    setForm({
      email: "",
      password: "",
    });
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
 <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
 <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
     <h1 className="mb-8 text-3xl text-center">Sign up</h1>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => OnSubmitForm(e)}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       value={Form.email}
       name="email"
       id="email" type="email" placeholder="Email"
       onChange={(e) => onInputChange(e)} />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
       id="password" type="password" 
       name="password"
       value={Form.password}
       placeholder="******************"
       onChange={(e) => onInputChange(e)} />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <a href="/listphoto" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       type="submit" >
        Sign In
      </a>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
     
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
</div>
</div>
  );
};


export default Login;