import React from "react";
import { Link } from "react-router-dom";

const ProfileLayout = ({ children }) => {
    return (
        <div className=" w-full h-[100vh] flex px-20 ">
            <div className=" h-full bg-slate-100 shadow-lg w-1/4 flex flex-col gap-4 py-10">
                <div className="w-full py-2 tracking-tighter text-xl text-center font-semibold border-b-2">
                    <Link to={"/changepassword"}>Change password</Link>
                </div>
                <div className="w-full py-2 tracking-tighter text-xl text-center font-semibold border-b-2">
                    <Link to={"/myblog"}>My Blogs</Link>
                </div>
                <div className="w-full py-2 tracking-tighter text-xl text-center font-semibold border-b-2">
                    <button>Add Blog</button>
                </div>
            </div>
            <div className=" w-full h-full bg-black bg-opacity-10">
                <div className=" flex flex-col ">
                    <h2 className=" font-bold text-2xl text-center">
                        Welcome Talal Mahmud
                    </h2>
                    <div className="w-full h-full">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
