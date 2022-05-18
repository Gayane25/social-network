import styled from "styled-components";

const LoggedInHeaderStyled = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
background: #FFFFFF;
box-shadow: 0px 4px 5px 2px rgba(121, 197, 239, 0.38);
padding:20px;
margin:1px;
border-radius:10px;
input {
    width: 600px;
    height: 59px;
    background: rgba(239, 246, 252, 0.87);
    border:none;
    border-radius: 25px;
    padding-left:30px;
    /* padding-top:21px; */
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    ::placeholder {
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.05em;
        color: #303030;

    }
};
`;

export {LoggedInHeaderStyled};