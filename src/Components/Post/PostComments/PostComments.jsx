import React from "react";
import CommentCollection from "./CommentCollection";
import CommentForm from "./CommentForm";

function PostComments() {
    return (
        <div>
            <CommentForm/>
            <CommentCollection />
        </div>
    );
}

export default PostComments;