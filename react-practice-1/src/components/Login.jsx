import { useRef, useState } from "react";
    import { FaTimes } from 'react-icons/fa';

const Login = ({ setModelOpen }) => {
  const [value, setValue] = useState("login");
  const ref = useRef();

  return (
    <div className="fixed inset-0 z-5 bg-black flex items-center justify-center">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg relative">
        <button
          onClick={() => setModelOpen(false)}
          className="absolute top-2 right-2 text-red-600"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>

        <h1 className="text-green-600 text-2xl font-bold text-center mb-4">
          {value === "login" ? "Login" : "Register"}
        </h1>

        <form ref={ref} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter your email..."
              className="w-full border p-2 rounded-md"
            />
          </div>

          {value === "register" && (
            <div>
              <label className="block mb-1">Age</label>
              <input
                type="text"
                placeholder="Enter your age..."
                className="w-full border p-2 rounded-md"
              />
            </div>
          )}

          <button className="w-full py-2 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700">
            {value === "login" ? "Login to account" : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-gray-500 font-bold text-center mt-4">
          {value === "login" ? (
            <>
              Create an account?{" "}
              <span
                className="text-green-600 cursor-pointer"
                onClick={() => setValue("register")}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-green-600 cursor-pointer"
                onClick={() => setValue("login")}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
