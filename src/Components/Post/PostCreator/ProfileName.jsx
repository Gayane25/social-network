import styled from "styled-components";
import PropTypes from "prop-types";


const StyledProfileName = styled.h2`
font-size:${props=>props.font || "16px"};
color:${props=>props.color || "black"};
padding:${props=>props.padding || "0"}`;

ProfileName.propTypes ={
    postItem: PropTypes.object,
};
export default function ProfileName({postItem}) {
    return (
        <StyledProfileName>
            {postItem.owner}
        </StyledProfileName>
    );
}
