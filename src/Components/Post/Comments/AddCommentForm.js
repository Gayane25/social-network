import React,{useState} from "react";
import { useDispatch } from "react-redux";
// import { addComment } from "../../../redux/postSlice";
import AddCommentFormStyled from "./AddCommentFormStyled";
import Icon from "../Icon";
import {sendIcon} from "../../../Assets/svg/index.js";
import PropTypes from "prop-types";

// AddCommentForm.propTypes = {
//     singlePost:PropTypes.object,
// };


// function AddCommentForm({singlePost}) {
//     const [value, setValue] = useState("");
//     const dispatch =useDispatch();

//     const submitHandler = (event, id)=>{
//         event.preventDefault();
//         console.log(id);
//         dispatch(
//             addComment({
//                 commentContent: value,
//                 id:id
//             })
//         );

//     };
//     return (
//         <>
//             <AddCommentFormStyled>
//                 <form onSubmit={(event)=>submitHandler(event, singlePost.content._id)}>
//                     <input type="text" placeholder="Add comment..." value ={value} onChange ={(event)=>setValue(event.target.value)} name="commentInput"/>
//                     <span><Icon src={sendIcon} /></span>
//                 </form>
//             </AddCommentFormStyled>
//         </>
//     );
// }

// export default AddCommentForm;