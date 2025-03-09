import styled from "styled-components";

const strokeSize = 5;

const TempTitle = styled.h1`
    position: fixed;
    top: 200px;
    left: 100px;
    color: white;
    font-size: ${(props) => props.fontSize}px;
    text-shadow: 
        -${strokeSize}px -${strokeSize}px 0 black,  
        ${strokeSize}px -${strokeSize}px 0 black,
        -${strokeSize}px  ${strokeSize}px 0 black,
        ${strokeSize}px  ${strokeSize}px 0 black,
        -${strokeSize}px  0px 0 black,
        ${strokeSize}px  0px 0 black,
         0px -${strokeSize}px 0 black,
         0px  ${strokeSize}px 0 black;
`

function Projects(){
    return(
        <TempTitle fontSize={20}>
            *work in progress, check back later ;)
        </TempTitle> 
    )
}

export default Projects;