import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/style/style.css";
// import { CHeader, CFooter } from "../../components";

const Index = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    let data = {
      username: '',
      password: ''
    }
    
    axios
    .get("http://localhost:3000/login")
    .then((response) => {
      console.log(response.data)
    });

  };
  return (
    <>
    <div className="min-h-screen antialiased py-6 flex flex-col justify-center sm:placeholder:">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto text-center">
        <span className="text-red-500 text-2xl font-light items-center justify-center">Java Car Auto</span>
        <div className="mt-4 bg-neutral-500 shadow-md rounded-lg text-left">
          <div className="h-2 bg-slate-600 rounded-t-md"> </div>
          <div className="px-8 py-6">
            <label htmlFor="" className="block font-semibold">Username</label>
            <input type="text" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" placeholder="Username">{ userName }</input>
            <label htmlFor="" className="block font-semibold mt-3">Password</label>
            <input type="text" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" placeholder="Password">{ password }</input>
            <div className="flex justify-end items-baseline">
              <button type="submit" className="mt-4 bg-slate-600 text-red-300 py-2 px-6 rounded-md hover:bg-slate-400">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Index
