import styled from "styled-components";


const StyledProfileName = styled.h2`
font-size:${props=>props.font || "16px"};
color:${props=>props.color || "black"};
padding:${props=>props.padding || "0"}`;


export default function ProfileName(props) {
    return (
        <StyledProfileName {...props}/>
    );
}