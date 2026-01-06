import './navbar.css';
import {useNavigate} from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
   <nav className="navbar navbar-expand-lg  fixed-top">
  <div className="container-fluid">
    <div className="navbar-brand skillswap" href="#"> <i className="fa-solid fa-infinity"></i>  SkillSwap</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto gap-4">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Explore</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Swap Skills</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
       
      </ul>
      <div className="ms-auto  join">
            <button onClick={() => navigate("/signup")} className="btn px-4">
              Join Now
            </button>
          </div>
    </div>
  </div>
</nav>
  );
}