import React from "react";

const Search = () => {
    return (
        <div className="rounded-md shadow-md w-1/4 flex  items-center">
            <input
                type="text"
                className=" outline-none w-full  px-4"
                placeholder="Search your blog..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
            </button>
        </div>
    );
};

export default Search;
