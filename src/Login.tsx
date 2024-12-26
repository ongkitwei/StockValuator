import { GiChargingBull } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name == "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  function handleLoginButton() {
    try {
      const response = axios.post("http://localhost:3000/api/login", {
        email: email,
        password: password
      });
      console.log(response);
      navigate("/HomePage");
    } catch (error) {
      console.error("ERROR: ", error);
      alert("Email or Password incorrect");
    }
  }
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center">
        <div className="bg-gradient-to-t from-black to-gray-700 w-[650px] h-[800px] border-none rounded-2xl flex flex-col items-center pt-[130px]">
          <GiChargingBull className="text-black text-6xl mb-[20px] hover:text-white" />
          <h1 className="font-irish text-white text-3xl mb-[50px] hover:text-black">
            Market Clubhouse
          </h1>
          <input
            placeholder="EMAIL"
            name="email"
            type="email"
            onChange={handleInputChange}
            className="font-irish bg-black rounded-lg p-[10px] w-[300px] mb-[20px] text-white"
          ></input>
          <input
            placeholder="PASSWORD"
            name="password"
            type="password"
            onChange={handleInputChange}
            className="font-irish bg-black rounded-lg p-[10px] w-[300px] mb-[50px] text-white"
          ></input>
          <button
            className="font-irish bg-gray-600 rounded-3xl p-[10px] w-[290px] text-black font-bold hover:bg-black hover:text-white transition duration-500 delay-50"
            onClick={handleLoginButton}
          >
            SUBMIT
          </button>
          <p className="text-white text-sm pt-5 font-thin">
            Don't have an account?{" "}
            <Link className="hover:underline" to="/SignupPage">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
