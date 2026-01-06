import { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from "../../utils";
import { ToastContainer,} from 'react-toastify';
import "./home.css";

const Header = () => {
   const [loggedInUser, setLoggedInUser]= useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])
 const handleLogout = (e) =>{
  localStorage.removeItem('token');
  localStorage.removeItem('loggedInUser');
  handleSuccess('user logged out');
  setTimeout(()=>{
    navigate('/login');
  }, 1000)
 }
  return (
    <header className="header">
      <div className="logo">
        <span className="brand"><i className="fa-solid fa-infinity"></i>  SkillSwap</span>
      </div>
        <div className="header-right">
    <button onClick={handleLogout}>logout</button>
    <div className="profile-icon" onClick={() => { navigate("/profile");}}>
      <i className="fa-solid fa-user"></i>
    </div>
  </div>
       <ToastContainer />
    </header>
  );
};

export default Header;