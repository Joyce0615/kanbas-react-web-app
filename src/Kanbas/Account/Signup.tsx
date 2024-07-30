import React, { useState } from "react"; 
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Link, useNavigate } from "react-router-dom"; 
import * as client from "./client"; 

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const signup = async () => {
    try {
    const currentUser = await client.signup(user); 
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  const handleSignIn = () => {
    navigate('/Kanbas/Account/Signin');
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1> 
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
             className="wd-username form-control mb-2" placeholder="username" />
      <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password"
             className="wd-password form-control mb-2" placeholder="password" />
      <button onClick={signup} className="wd-signup-btn btn btn-primary w-100" style={{ marginBottom: '10px' }}> Sign up </button><br />
      <button className="wd-signin-btn btn btn-primary w-100" onClick={handleSignIn}>Sign in</button>
    </div> 
  );
}