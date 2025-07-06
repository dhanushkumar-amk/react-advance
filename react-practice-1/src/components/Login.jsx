import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Login = () => {


    const [value, setValue] = useState("login");


  return (
    <div className='flex justify-center items-center h-[500px] bg-slate-100'>
        <div className='w-96 p-6 bg-gray-100 rounded-lg shadow-lg'>
             <div className="relative">
                    <FaTimes size={20}  className='absolute top-0 right-0.5 text-red-600 '  />
                </div>
                <h1 className='text-green-600 text-2xl font-bold flex items-center justify-center'>
                    {
                        value === "login" ? "Login" :"Register"
                    }
                </h1>
                <form  className="flex items-center  flex-col  gap-5 m-5" >
                  <div className="flex gap-3">

                  <label>Name</label>
                    <input type="text" placeholder="Enter your name..." className="border p-1 rounded-md"  />
                  </div>
                    <div className="flex gap-3">
                  <label names>Email</label>
                    <input type="text" placeholder="Enter your name..." className="border p-1 rounded-md"  />
                  </div>
                  {
                    value === "Register" ?   <div className="flex gap-3">
                  <label names>Age</label>
                    <input type="text" placeholder="Enter your name..." className="border p-1 rounded-md"  />
                  </div> : <></>
                  }
                    {/* <div className="flex">
                  <label className="">Password</label>
                    <input type="text" placeholder="Enter your name..." className="border p-1 rounded-md"  />
                  </div> */}

                  <button className='px-20 py-2 bg-green-600 rounded-2xl text-white cursor-pointer font-bold hover:bg-green-700 ' >
                    {
                        value === "login" ? "Login to account" : "Create Account"
                    }
                  </button>
                </form>
                {
                    value === "login" ?  <p className='text-sm text-gray-500 font-bold text-center ' > Don't have an account? <span  className='text-green-600'  >register</span>
                </p> :  <p className='text-sm text-gray-500 font-bold text-center ' >Already have an account <span  className='text-green-600'>login</span>
                </p>
                }

        </div>

    </div>
  )
}

export default Login
