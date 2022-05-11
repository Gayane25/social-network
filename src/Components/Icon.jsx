import styled from "styled-components";

const styledIcon = styled.img`
width:${props=>props.width || "24px"};
height:${props=>props.height || "24px"};
padding: ${({padding})=>padding ||"5px"}`;

function Icon(props) {
    return (
        <styledIcon {...props}/>
    );
}

export default Icon;