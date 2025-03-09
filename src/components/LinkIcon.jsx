import styled from "styled-components";

const Logo = styled.img`
    border-radius: 15px;
    height: 50px;
    width: 50px;
    border: 3px solid black;
    background-color: white;
`

function LinkIcon({ imageSource, link}){
    return(
        <a href={link} target="_blank" rel="noreferrer">
            <Logo src={imageSource} alt="Link to socials"/>
        </a>
    )
}

export default LinkIcon;