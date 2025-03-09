import styled from "styled-components";
import background from "../assets/background.mp4";

const Video = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    pointer-events: none;
`

const BackgroundVideo = () => {
    return(
    <Video autoPlay loop muted playsInline preload="auto">
        <source src={background} type="video/mp4"/>
        Something went wrong.
    </Video>
    )
}

export default BackgroundVideo;