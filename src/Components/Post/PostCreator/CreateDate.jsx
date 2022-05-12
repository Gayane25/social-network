import styled from "styled-components";

const StyledCreateDate = styled.span`
color:${props=>props.color || "grey"};
font-size:${props=>props.font || "12px"};`;

function CreateDate(props) {
    return (
        <StyledCreateDate {...props} />
    );
}

export default CreateDate;