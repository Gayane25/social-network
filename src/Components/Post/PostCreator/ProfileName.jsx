import PropTypes from "prop-types";
import {ProfileNameStyled} from "./ProfileNameStyled";


ProfileName.propTypes ={
    postItem: PropTypes.object,
};
export default function ProfileName({postItem}) {
    return (
        <ProfileNameStyled>
            {postItem.owner}
        </ProfileNameStyled>
    );
}
