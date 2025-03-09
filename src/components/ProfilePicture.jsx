import styled from "styled-components";
import catalin from "../assets/catalin.jpg"

const Picture = styled.img`
    border-radius: 50%;
    height: 300px;
    width: 300px;
    object-fit: cover;
    border: 5px solid rgb(58, 62, 166);
`

const ProfilePicture = () => {
    return(
        <Picture src={catalin} alt="handsome young man"/>
    )
}

export default ProfilePicture;