import React, { useState } from "react";

const BlogDetailsPage = () => {
    const [comments, setComments] = useState([
        { id: 1, username: "John", content: "Great blog post!" },
        { id: 2, username: "Jane", content: "Thanks for sharing." },
    ]);

    const [newComment, setNewComment] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editingCommentContent, setEditingCommentContent] = useState("");

    const handleAddComment = () => {
        if (newComment.trim() === "") {
            return;
        }
        const newCommentObj = {
            id: comments.length + 1,
            username: "New User",
            content: newComment,
        };
        setComments([...comments, newCommentObj]);
        setNewComment("");
    };

    const handleEditComment = (commentId, commentContent) => {
        setEditingCommentId(commentId);
        setEditingCommentContent(commentContent);
    };

    const handleCommentChange = (event) => {
        setEditingCommentContent(event.target.value);
    };

    const handleSaveComment = (commentId) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return { ...comment, content: editingCommentContent };
            }
            return comment;
        });
        setComments(updatedComments);
        setEditingCommentId(null);
        setEditingCommentContent("");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Blog Title</h1>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                gravida, neque a aliquet egestas, purus enim vehicula tortor, at
                consequat justo quam at dui. Fusce at fringilla sapien. Integer
                quis sollicitudin lorem.
            </p>
            <h2 className="text-lg font-bold mb-2">Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id} className="mb-4">
                    <p className="font-medium mb-1">{comment.username}</p>
                    {editingCommentId === comment.id ? (
                        <div className="flex">
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md w-full py-2 px-3 mb-2"
                                value={editingCommentContent}
                                onChange={handleCommentChange}
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ml-2"
                                onClick={() => handleSaveComment(comment.id)}
                            >
                                Save
                            </button>
                        </div>
                    ) : (
                        <>
                            <p>{comment.content}</p>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md px-4 py-2 mt-2"
                                onClick={() =>
                                    handleEditComment(
                                        comment.id,
                                        comment.content
                                    )
                                }
                            >
                                Edit
                            </button>
                        </>
                    )}
                </div>
            ))}
            <div className="flex">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md w-full py-2 px-3 mb-2"
                    placeholder="Enter your comment"
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                />
                <button
                    className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 ml-2"
                    onClick={handleAddComment}
                >
                    Add Comment
                </button>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
