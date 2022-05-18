import styled from "styled-components";

const AuthStyled = styled.form`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding-top:77px;
    padding-left:49px;
    padding-bottom:77px;
    padding-right:49px;
    color: black;
    background-color: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 4px 5px 2px rgba(121, 197, 239, 0.38);

    span{
        padding-top:18px;
        padding-bottom:18px;
        width: 168px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        color: #6F6C90;
    }
    input{
        width: 446px;
        height: 66px;
        background-color: #FFFFFF;
        border: 1px solid #EFF0F7;
        box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
        border-radius: 46px;
        margin-bottom: 34px;
        padding-left:40px;
        font-size:24px;
        ::placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            color: #6F6C90;
            padding-left:20px;
        }
    }

    h1 {
        padding-bottom: 25px;
        font-style: normal;
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 34px;
        line-height: 46px;
        color: #6E00FF;
}
    
`;

export {AuthStyled};








