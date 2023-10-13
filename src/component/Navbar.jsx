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
                <li><NavLink to="/addcoffee" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                    }>Add Coffee</NavLink></li>
                <li><NavLink to="/updatecoffee" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                    }>Update Coffee</NavLink></li>
                
            </ul>
        </div>
    );
};

export default Navbar;