import React from "react";

const Form = () => {
  return (
    <div className="bg-emerald-400 h-screen">
      <div>
        <h1 className="heading bg-emerald-500 h-20 font-fold text-4xl flex justify-center items-center">
          SignUp
        </h1>
      </div>
      <div className="content w-full mt-5 p-10 flex items-center flex-col">
        <div className="mb-2 w-xl flex border rounded-e-3xl ">
          <label className="p-1" htmlFor="name">Name: </label>
          <input className="w-full outline-none" type="text" placeholder="Enter your name" />
        </div>        
        <div className="mb-2 w-xl flex border rounded-e-3xl">
            <label className="p-1" htmlFor='email'>Email: </label>
            <input className="w-full outline-none" type='email' placeholder='Enter you Email'/>
        </div>
        <div className="mb-2 w-xl flex border rounded-e-3xl">
            <label className="p-1" htmlFor='password'>Password: </label>
            <input className="w-full outline-none" type='password' placeholder='Enter you passsword'/>
        </div>
        <button className="border rounded-tr-2xl rounded-bl-2xl p-2 bg-cyan-700 text-white hover:bg-cyan-900" >Submit</button>
        <div>
        <p className="text-xs">Already have an account? <span className="text-blue-800">Login</span> </p>
      </div>
      </div>
      
    </div>
  );
};

export default Form;
