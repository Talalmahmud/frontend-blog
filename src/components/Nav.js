import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

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

                <NavMenu />
            </div>
        </div>
    );
};

export default Nav;
