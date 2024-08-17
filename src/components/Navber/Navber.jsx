import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "animate.css";
import { AuthContext } from "../Provider/AuthProvider";


const Navber = () => {
   
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

    const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  
  const handleSignOut = () => {
    logOut()
    .then(()=>{
      navigate('/')
    })
    .catch();}

    const menuItems = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/contect', label: 'Contect' }
    ];

    // dark and light mode 
    const [theme, setTheme] = useState(() => {
      const storedTheme = localStorage.getItem('light');
      return storedTheme || 'light';
  });
  
  useEffect(() => {
      localStorage.setItem('theme', theme);
      document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
  
  const handleToggle = (e) => {
      if (e.target.checked) {
          setTheme('dark');
      } else {
          setTheme('light');
      }
  };

    return (
        <div id="home" className=" bg-green-50 w-full  ">
            <div className="navbar max-w-[1290px] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {menuItems.map(({ path, label }) => (
      <li key={path}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            ` border-transparent  hover:border-green-500 ${
              isActive ? 'text-green-500   ' : ''
            }`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl"> <img className="h-10 w-10 animate__animated animate__pulse  animate__infinite" src="https://i.ibb.co/C2Rx4rg/website-logo-removebg-preview.png" alt="website-logo" />  <a>
                N-mart
              </a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-3 px-1">
    {menuItems.map(({ path, label }) => (
      <li key={path}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `border-b-2 border-transparent hover:border-green-500 ${
              isActive ? 'text-green-500 border-green-500' : ''
            }`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
      
    </ul>
  </div>
  <div className="navbar-end">

 {
  user &&  <label className="swap mr-4 swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleToggle} type="checkbox" value='synthwave' />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
 }

          {/* user picture and logout/login btn */}
          {user ? (
             <div className="flex gap-3 items-center z-[1000] relative">
             <div>
               <a id="clickable" onClick={toggleDropdown}>
                 <img
                   className="h-14 w-14 rounded-full cursor-pointer"
                   src={
                     (user && user?.photoURL) ||
                     "https://i.ibb.co/VHD1J6g/user-profile-icon-free-vector.jpg"
                   }
                   alt=""
                 />
               </a>
       
               {dropdownOpen && (
                 <div className="absolute right-0 mt-4 w-48 bg-white border rounded-lg shadow-lg">
                   <p className="px-4 py-2 text-gray-700">{user.displayName}</p>
                   <hr />
                   <button
                     onClick={handleSignOut}
                     className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                   >
                     Logout
                   </button>
                 </div>
               )}
             </div>
           </div>
          ) : (
            <Link to="/login" className="btn bg-green-500 text-white">
            Login
          </Link>
          )}
        </div>
</div>
        </div>
    );
};

export default Navber;