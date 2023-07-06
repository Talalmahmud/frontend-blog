import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="w-full px-4 md:px-20 sticky z-20 top-0 shadow-md bg-white">
            <div className=" flex justify-between items-center py-6">
                <Link
                    to={"/"}
                    className=" text-2xl font-bold tracking-tighter hover:shadow-sm"
                >
                    BLOG
                </Link>
                <div className="flex gap-4 justify-center items-center">
                    <Link
                        to={"/login"}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
