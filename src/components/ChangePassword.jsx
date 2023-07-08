import React from "react";
import ProfileLayout from "./ProfileLayout";

const ChangePassword = () => {
    return (
        <ProfileLayout>
            <div className=" flex justify-center items-center">
                <div className=" flex flex-col gap-4 items-start  mt-10">
                    <input
                        type="text"
                        className=" shadow-md pl-2 pr-10 py-2 outline-none"
                        placeholder="New password"
                        id="newpassword"
                    />
                    <input
                        type="text"
                        className=" shadow-md pl-2 pr-10 py-2 outline-none"
                        placeholder="Confirm password"
                        id="confirmpassword"
                    />
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
                    >
                        Change
                    </button>
                </div>
            </div>
        </ProfileLayout>
    );
};

export default ChangePassword;
