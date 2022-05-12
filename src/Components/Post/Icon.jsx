import styled from "styled-components";

const StyledIcon = styled.img`
src: ${props=>props.src}
width:${props=>props.width || "32px"};
height:${props=>props.height || "32px"};
padding: ${({padding})=>padding ||"5px"}
`;

function Icon(props) {
    return (
        <StyledIcon {...props}/>
    );
}

export default Icon;