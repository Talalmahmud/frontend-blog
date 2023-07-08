import React from "react";
import ProfileLayout from "./ProfileLayout";
import BlogTable from "./BlogTable";

const MyBlog = () => {
    return (
        <>
            {" "}
            <ProfileLayout>
                <BlogTable />
            </ProfileLayout>
        </>
    );
};

export default MyBlog;
