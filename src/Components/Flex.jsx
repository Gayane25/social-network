import styled from "styled-components";

const styledFlex = styled.div`
display:flex;
flex-direction: ${props=>props.direction||"row"};
align-items: ${props=>props.align || "stretch"};
justify-content: ${props=>props.justify || "stretch"};
padding: ${({padding})=>padding ||"0"};
margin: ${({margin})=>margin || "0"};
`;
function Flex(props) {
    return <styledFlex {...props} />;

    
}
export default Flex;