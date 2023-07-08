import React, { useState } from "react";
import Card from "../components/Card";
import BlogAddModal from "../components/BlogModal";
import Search from "../components/Search";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className=" px-6 md:px-20 h-full py-1">
            <div className=" flex justify-center items-center gap-4">
                <Search />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
                    onClick={() => openModal()}
                >
                    Create Blog
                </button>
            </div>
            <BlogAddModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                openModal={openModal}
                closeModal={closeModal}
            />
            <div className=" grid grid-cols-1 gap-10">
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
