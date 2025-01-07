import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("metilda@gmail.com");
  const [password, setPassword] = useState("Metilda@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body flex items-center w-full">
          <h2 className="card-title">Login</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email ID</span>
            </div>
            <input
              type="text"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="card-actions w-full pt-4">
            <button onClick={handleLogin} className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
