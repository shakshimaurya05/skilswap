import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/pages/login.jsx';
import Signup from './components/pages/signup.jsx';
import Home from './components/home/home.jsx';
import LandingPage from "./components/pages/landingPage";
import { useState } from 'react';
import RefreshHandler from './RefreshHandler';
 import DiscoverSkills from "./components/home/DiscoverSkills";
import Profile from './components/pages/Profile.jsx';
import EditProfile from "./components/pages/EditProfile";
import MySkills from "./components/home/MySkills.jsx";
import Setting from "./components/home/setting.jsx"
import Messages from "./components/home/messages.jsx"
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} />}/>
         <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
             <Route path="/my-skills" element={<MySkills />} />

        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/discover" element={<DiscoverSkills />} />

        <Route path="/settings" element={<Setting />} />
        <Route path="/messages" element={<Messages />} />
      
      </Routes>
      
      
    </div>
  );
}

export default App;