import { useState } from 'react'
import Header from './Header';


const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true);
  const toggleSignInForm = () =>{
   setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_small.jpg"
        alt="logo"/>
      </div>
      <form 
      className="bg-black absolute p-12 w-4/12 h-[500px] my-40 mx-auto right-0 left-0 text-white/100 bg-black/80">
        <h1 className="font-bold text-3xl align-top py-4">
        {isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" placeholder="Enter Full Name" className="p-2 m-2 w-80 mx-auto right-0 left-0 bg-transparent border border-gray-300 rounded p-4 flex items-center justify-center"/>)}
        <input type="text" placeholder="Email Address" className="p-2 m-2 w-80 mx-auto right-0 left-0 bg-transparent border border-gray-300 rounded p-4 flex items-center justify-center"/>
        {!isSignInForm && (<input type="password" placeholder="Create a Password" className="p-2 m-2 w-80 mx-auto right-0 left-0 bg-transparent border border-gray-300 rounded p-4 flex items-center justify-center"/>)}
        {isSignInForm && (<input type="password" placeholder="Password" className="p-2 m-2 w-80 mx-auto right-0 left-0 bg-transparent border border-gray-300 rounded p-4 flex items-center justify-center"/>)}
        <button className="p-1 m-1 w-80 mx-auto right-0 left-0 bg-red-700 rounded hover:bg-red-500/60 flex items-center justify-center">{isSignInForm? "Sign In" : "Sign Up"}</button>
        <h4 className="flex items-center justify-center  text-200">OR</h4>
        <button className="p-1 m-1 w-80 mx-auto right-0 left-0 bg-gray-600 bg-gray-500/50 rounded hover:bg-gray-500/60 flex items-center justify-center">Use a sign-in code</button>
        <p className="py-4 cursor-pointer flex items-center justify-center" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix?Sign Up" : "Already Rgistered Sign In Now"}</p>
      </form>
      
    </div>
  )
}

export default Login;
