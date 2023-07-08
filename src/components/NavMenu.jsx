import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
    const [isLogedin, setIsLogedin] = useState(true);
    return (
        <div>
            <div className="flex gap-4 justify-center items-center">
                {isLogedin ? (
                    <div className=" flex gap-4 items-center">
                        <Link to="/profile">profile</Link>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline">
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link
                        to={"/login"}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavMenu;
