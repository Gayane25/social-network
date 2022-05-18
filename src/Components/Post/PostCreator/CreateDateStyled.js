import styled from "styled-components";

const CreateDateStyled = styled.span`
color:${props=>props.color || "grey"};
font-size:${props=>props.font || "12px"};`;

export  {CreateDateStyled};