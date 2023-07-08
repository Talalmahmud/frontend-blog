import React, { useState } from "react";

const BlogAddModal = ({ isOpen, setIsOpen, closeModal, openModal }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAddBlog = () => {
        // Handle adding the blog data (e.g., sending to server, updating state, etc.)
        console.log("Title:", title);
        console.log("Description:", description);
        closeModal();
    };

    return (
        <div>
            {/* <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                onClick={openModal}
            >
                Add Blog
            </button> */}

            {isOpen && (
                <div className="fixed top-0 left-0 h-full w-full  bg-black bg-opacity-50 flex items-center justify-center z-50 ">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                        <h2 className="text-2xl mb-4">Add Blog</h2>
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="border border-gray-300 rounded-md w-full py-2 px-3"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="border border-gray-300 rounded-md w-full py-2 px-3"
                                rows="4"
                                value={description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mr-2"
                                onClick={handleAddBlog}
                            >
                                Add
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md px-4 py-2"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogAddModal;
