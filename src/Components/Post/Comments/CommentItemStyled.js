import styled from "styled-components";
const CommentItemStyled = styled.div`
display:flex;
padding:5px;
background-color: whitesmoke;
p {
    font-size:16px;
    margin-top:10px;
    margin-left:10px;
}
span {
    max-width:32px;
    cursor: pointer;
    :hover {
        color: blue;
    };
}
`;

export {CommentItemStyled};