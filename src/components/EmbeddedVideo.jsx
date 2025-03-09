import styled from "styled-components";

const StyledEmbeddedVideo = styled.iframe`
    border: 5px solid black;
`

function EmbeddedVideo(){
    return(
        <StyledEmbeddedVideo 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/2i31HJwaDS0" 
            title="Embedded YouTube video" 
            allow="autoplay; picture-in-picture; fullscreen" 
        ></StyledEmbeddedVideo>
    )
}

export default EmbeddedVideo;