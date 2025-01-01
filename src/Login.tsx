import { GiChargingBull } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthenticateContext } from "./contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const { isLoggedIn, setLoggedIn } = useContext(AuthenticateContext);

  // if (!isLoggedIn == undefined || setLoggedIn == undefined) {
  //   throw new Error(
  //     "AuthenticateContext must be used within an AuthContext provider."
  //   );
  // }
  // useEffect(() => {
  //   console.log(`updated state of isLoggedIn is ${isLoggedIn}`);
  // }, [isLoggedIn]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name == "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  async function handleLoginButton() {
    if (!email || !password) {
      return alert("Please fill in both PASSWORD & EMAIL");
    }

    try {
      const { data, status } = await axios.post(
        "http://localhost:3000/api/login",
        {
          email: email,
          password: password
        }
      );
      if (status == 200) {
        console.log(data);
        setLoggedIn(true);
        console.log(isLoggedIn);
        navigate("/homepage");
      } else {
        alert("Login failed, try again !!!");
      }
    } catch (error) {
      console.error("ERROR: ", error);
      alert("Email or Password incorrect");
    }
  }

  // function handleLoginButton() {
  //   setAuthenticated(true);
  // }
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log("good");
  //   } else {
  //     console.log("bad");
  //   }
  // }, [isAuthenticated]); // Runs whenever `isAuthenticated` changes

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
