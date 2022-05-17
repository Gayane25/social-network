import styled from "styled-components";

const CreatePostStyled = styled.div`
    max-width:500px;
    display:flex;
    flex-direction: row;
    background-color:white;
    border:none; 
    border-radius: 10px;
    margin:10px;
    padding:10px;
    form {
        width:100%;
        /* background-color:whitesmoke; */
        border-radius:10px;
    };
    hr{
        border: 1px solid gray;
        align-items:center;
        justify-content: center;
       width:100%;
    }
    input {
        width:100%;
        height: 45px;
        background-color: whitesmoke;
        font-size: 16px;
        padding-left:20px;
        border: none;
        outline:none;
    };
    textarea {
    width: 100%;
  height: 130px;
  padding: 12px 20px;
  box-sizing: border-box;
  /* border: 2px solid #ccc; */
  border-radius: 4px;
  background-color: whitesmoke;
  font-size: 16px;
  resize: none;
  border:none;
    }

    button {
        cursor:pointer;
        width:100px;
        height:50px;
        margin-top:10px;
        background-color: blue;
        color:white;
        font-size:16px;
        border:none;
        border-radius:10px;
        
        right:10px;
        
        
    }

    div {
        display:flex;
        flex-direction:row;
    };

`;

export default CreatePostStyled;
