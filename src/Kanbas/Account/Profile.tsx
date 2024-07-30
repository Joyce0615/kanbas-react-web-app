import * as client from "./client"; 
import * as peopleClient from "../People/client";
import { useState, useEffect } from "react"; 
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useNavigate } from "react-router-dom"; 

export default function Profile() {
  const [profile, setProfile] = useState<any>({
    username: "",
    password: "",
    firstName: "",
    email: "",
    lastName: "",
    dob: "",
    role: "",
    loginId: "",
    section: "",
    lastActivity: "",
    totalActivity: "",
  });
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const account = await client.profile(); 
      setProfile(account);
      } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  }; 
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  const saveProfile = async () => {
    await peopleClient.updateUser(profile);
  }
  useEffect(() => { 
    fetchProfile(); 
  }, []); 
  
  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1> 
      {profile && ( 
        <div>
          <input className="wd-username form-control" value={profile.username}
                 onChange={(e) => setProfile({ ...profile, username: e.target.value })}/><br/>
          <input className="wd-password form-control" value={profile.password}
                 onChange={(e) => setProfile({ ...profile, password:e.target.value })}/><br/>
          <input className="wd-firstname form-control" value={profile.firstName} placeholder="user name"
                 onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/><br/>
          <input className="wd-dob form-control" value={profile.dob}
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/><br/>
          <input className="wd-email form-control" value={profile.email} placeholder="email address"
                 onChange={(e) => setProfile({ ...profile, email: e.target.value })}/><br/>
          <select className="wd-role form-control" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            {/* <option value="USER">User</option> */}
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
            <option value="STUDENT">Student</option>
          </select><br />
          <button onClick={saveProfile} id="wd-save-btn" className="btn btn-success w-100 mb-2">
            Save</button>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
          </button>
        </div> 
      )} 
    </div> 
  );
}