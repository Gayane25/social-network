import styled from "styled-components";

const StyledFlex = styled.div`
display:flex;
flex-direction: ${props=>props.direction||"row"};
align-items: ${props=>props.align || "stretch"};
justify-content: ${props=>props.justify || "stretch"};
padding: ${({padding})=>padding ||"0"};
margin: ${({margin})=>margin || "0"};
flex-wrap:${props=>props.wrap || "no-wrap"};
width:inherit;
`;

function Flex(props) {
    return <StyledFlex {...props} />;

}
export default Flex;