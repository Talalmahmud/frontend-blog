import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className=" flex flex-col  gap-4 shadow-lg rounded-md p-4">
            <h2 className=" text-xl font-bold text-slate-900 hover:text-slate-800 cursor-pointer ">
                Title
            </h2>
            <p className=" text-sm font-bold text-slate-700 hover:text-slate-800 cursor-pointer ">
                &Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium id, quam quibusdam volfk dfs f af fdsarer afdasdf
                fdsaf a ferfe
            </p>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <p>12-jun-2023</p>
                    <p>09:30 am</p>
                </div>
                <Link
                    to={"/details/5"}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default Card;
