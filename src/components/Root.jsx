import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Root = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div className={`${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'}`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};
// className={`${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'}`}

{/* <div className="mx-auto flex justify-center mt-20 h-20 w-20 rounded-lg shadow-md">
    <div className="theme-toggle flex items-center">
        <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            className="toggle"
        />
    </div>
</div> */}
export default Root;