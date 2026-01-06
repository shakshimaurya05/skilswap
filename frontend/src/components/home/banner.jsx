
import "./home.css";
import { useState , useEffect} from "react";
import laptop from "../../assets/lg1.png"
const Banner = () => {
   const [loggedInUser, setLoggedInUser]= useState('');
  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])
  return (
    <section className="banner">
     
        <h1> Welcome {loggedInUser}!</h1>
      <p>Ready to share your skills and learn something new?</p>
       <div className="laptop"><img src={laptop} alt=""  /></div>  

      
    </section>

  );
};

export default Banner;