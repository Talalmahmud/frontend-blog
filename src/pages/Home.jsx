import React from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className=" px-6 md:px-20 h-full py-10 ">
            <Search />
            <Link
                to={"/addblog"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
            >
                Create Blog
            </Link>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Home;
