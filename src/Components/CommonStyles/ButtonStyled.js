import styled from "styled-components";


const ButtonStyled = styled.button`
display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 28px 50px;
        gap: 8px;
        width: ${(props)=>props.width || "446px"};
        height: ${(props)=>props.height || "67px"};
        /* box-shadow: 0px 8px 22px rgba(74, 58, 255, 0.26); */
        box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
        border-radius: 86px;
        background-color: ${(props)=>props.background};
        border:none;
        outline: none;
        cursor: pointer;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        color: ${(props)=>props.color|| "#FFFFFF"};
        margin-bottom: 12px;
        img {
            src: ${props=>props.src};
            width: 24px;
            height: 24px;
        }
`;

export {ButtonStyled};