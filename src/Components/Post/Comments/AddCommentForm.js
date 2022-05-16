import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../../redux/postSlice";
import AddCommentFormStyled from "./AddCommentFormStyled";
import Icon from "../Icon";
import {sendIcon} from "../../../Assets/svg/index.js";
import PropTypes from "prop-types";

AddCommentForm.propTypes = {
    singlePost:PropTypes.object,
};


function AddCommentForm({singlePost}) {
    const [value, setValue] = useState("");
    const dispatch =useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();
        dispatch(
            addComment({
                commentContent: value,
                
            })
        );

    };
    return (
        <>
            <AddCommentFormStyled>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Add comment..." value ={value} onChange ={(event)=>setValue(event.target.value)} name="commentInput"/>
                    <Icon src={sendIcon} />
                </form>
            </AddCommentFormStyled>
        </>
    );
}

export default AddCommentForm;