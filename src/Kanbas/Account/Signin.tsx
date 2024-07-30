import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useNavigate } from "react-router-dom"; 
import * as client from "./client"; 

export default function Signin() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<any>({});
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const signin = async () => {
    try {
      const currentUser = await client.signin(credentials);
      dispatch(setCurrentUser(currentUser)); 
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  }; 
  const handleSignUp = () => {
    navigate('/Kanbas/Account/Signup');
  };
  return (
    <div className="wd-signin-screen">
      <h1>Sign in</h1> 
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      <input className="wd-username form-control mb-2" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        value={credentials.username} placeholder="username" />
      <input className="wd-password form-control mb-2" onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
        value={credentials.password} placeholder="password" type="password" />
      <button className="wd-signin-btn btn btn-primary w-100" onClick={signin} style={{ marginBottom: '10px' }}> Sign in </button>
      <br />
      <button className="wd-signin-btn btn btn-primary w-100" onClick={handleSignUp}>Sign up</button>
    </div> 
  );
}