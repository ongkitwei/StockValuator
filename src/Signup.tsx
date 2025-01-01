function SignupPage() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-gradient-to-t from-black to-gray-700 w-[650px] h-[800px] border-none rounded-2xl flex flex-col items-center pt-[130px]">
        <h1 className="font-irish text-white text-3xl mb-[50px] hover:text-black">
          Sign Up
        </h1>
        <input
          placeholder="ENTER FULL NAME"
          name="full_name"
          type="text"
          className="font-irish bg-black rounded-lg p-[10px] w-[300px] mb-[50px] text-white"
        ></input>
        <input
          placeholder="ENTER EMAIL"
          name="email"
          type="email"
          className="font-irish bg-black rounded-lg p-[10px] w-[300px] mb-[20px] text-white"
        ></input>
        <input
          placeholder="ENTER PASSWORD"
          name="password"
          type="password"
          className="font-irish bg-black rounded-lg p-[10px] w-[300px] mb-[20px] text-white"
        ></input>
        <input
          placeholder="CONFIRM PASSWORD"
          name="password"
          type="password"
          className="font-irish bg-black rounded-lg p-[10px] w-[300px] mb-[50px] text-white"
        ></input>
        <button className="font-irish bg-gray-600 rounded-3xl p-[10px] w-[290px] text-black font-bold hover:bg-black hover:text-white transition duration-500 delay-50">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
