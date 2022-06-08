import React, {useState} from "react";

function CommentForm() {
    const [comment, setComment]=useState("");
    
    return (
        <form>
            < input type ="text" value={comment} onChange={(e)=>setComment(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default CommentForm;