import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const BlogTable = () => {
    const blogData = [
        { id: 1, title: "Blog 1" },
        { id: 2, title: "Blog 2" },
        { id: 3, title: "Blog 3" },
        { id: 1, title: "Blog 1" },
        { id: 2, title: "Blog 2" },
        { id: 3, title: "Blog 3" },
        { id: 1, title: "Blog 1" },
        { id: 2, title: "Blog 2" },
        { id: 3, title: "Blog 3" },
        { id: 1, title: "Blog 1" },
        { id: 2, title: "Blog 2" },
        { id: 3, title: "Blog 3" },
        // Add more blog entries here
    ];

    return (
        <div className="container mx-auto">
            <div className="bg-white">
                <div className="flex bg-gray-100 py-3 pr-6">
                    <div className="w-1/4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                        Serial
                    </div>
                    <div className="w-1/2 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                        Title
                    </div>
                    <div className="w-1/4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                        Actions
                    </div>
                </div>
                <div className=" h-[400px] overflow-y-auto">
                    {blogData.map((blog) => (
                        <div
                            key={blog.id}
                            className="flex bg-gray-300 py-4 border"
                        >
                            <div className="w-1/4 px-6 text-center">
                                {blog.id}
                            </div>
                            <div className="w-1/2 px-6 text-center">
                                {blog.title}
                            </div>
                            <div className="w-1/4 px-6 flex justify-center gap-2">
                                <button
                                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
                                    title="View"
                                >
                                    <FaEye />
                                </button>
                                <button
                                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-2"
                                    title="Edit"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                                    title="Delete"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogTable;
