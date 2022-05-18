import PropTypes from "prop-types";
import {ProfileNameStyled} from "./ProfileNameStyled";


ProfileName.propTypes ={
    name: PropTypes.string,
};
export default function ProfileName({name}) {
    return (
        <ProfileNameStyled>
            {name}
        </ProfileNameStyled>
    );
}
