import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut, darkMode, toggleTheme } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/cart'>My Cart</NavLink></li>
        <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            className="toggle"
        />
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to='/'><img className="w-7 md:w-14 h-7 md:h-14" src="logo.svg" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>

            {
                user ?
                    <div className="navbar-end gap-2">
                        <h3 className="invisible md:visible">{user.displayName || user.email}</h3>
                        <img className="rounded-full w-7 md:w-10" src={user.photoURL} alt="" />
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to='/signIn'><a className="btn">Login</a></Link>
                    </div>
            }
        </div>
    );
};

export default Navbar;