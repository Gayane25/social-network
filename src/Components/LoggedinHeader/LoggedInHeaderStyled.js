import styled from "styled-components";

const LoggedInHeaderStyled = styled.div`
position:relative;
display:flex;
width:100%;
flex-direction:row;
justify-content: space-between;
background-color:#FFFFFF;
box-shadow: 0px 4px 5px 2px rgba(121, 197, 239, 0.38);
padding:20px 50px;
margin-top:1px;
border-radius:10px;
input {
    width: 600px;
    height: 59px;
    background-color: rgba(239, 246, 252, 0.87);
    border:none;
    border-radius: 25px;
    padding-left:25px;
    padding-right:25px;
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
div {
   background-color:#FFFFFF;
}
`;

export {LoggedInHeaderStyled};