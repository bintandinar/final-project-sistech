import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

export default function Navbar({ token }) {
  const navigate = useNavigate();
  const handleLogout = () => {
      localStorage.removeItem('token');
      navigate(`/`);
  };

  return (  
  <div>
      <div className="navbar">
          <h1><a href="/">ASKdegree</a></h1>
          <div className="links">
              {/* <a href="/login">Login</a> */}
              {!token ? (
                <Link className="link" to={`/Login`}>
                       Login
                </Link>
                 ) : (
                    <button className="btn" onClick={handleLogout}>
                        Logout
                    </button>
                 )}   
          </div>
      </div>
  </div>
  );
}

 
