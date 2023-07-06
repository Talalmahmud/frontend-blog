import React, { useState } from "react";

const BlogForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [blogList, setBlogList] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAddBlog = () => {
        const newBlog = {
            title: title,
            description: description,
        };

        setBlogList([...blogList, newBlog]);
        setTitle("");
        setDescription("");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create a Blog</h1>
            <div className="mb-4">
                <label htmlFor="title" className="block mb-2 font-medium">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="">
                <label
                    htmlFor="description"
                    className="text-gray-700 font-medium mb-2"
                >
                    Description:
                </label>
                <textarea
                    id="description"
                    rows="10"
                    className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your description"
                    onChange={handleDescriptionChange}
                ></textarea>
            </div>
            <div className="mb-4">
                <button
                    onClick={handleAddBlog}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default BlogForm;
