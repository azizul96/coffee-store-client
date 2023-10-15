import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-center my-10">
            <ul className="flex justify-center items-center gap-5">
                <li><NavLink to="/" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                    }>Home</NavLink></li>
                <li><NavLink to="/addCoffee" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                    }>Add Coffee</NavLink></li>
                <li><NavLink to="/signUp" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                    }>Sign Up</NavLink></li>
                <li><NavLink to="/login" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                    }>Login</NavLink></li>
                <li><NavLink to="/users" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                    }>Users</NavLink></li>
                
            </ul>
        </div>
    );
};

export default Navbar;