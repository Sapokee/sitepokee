import styled from "styled-components";

const strokeSize = 5;

const Text = styled.h1`
    margin-top: 50px;
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
    text-align: center;
`

const Title = ({text, fontSize}) => {
    return(
        <Text fontSize={fontSize}>
            {text}
        </Text>
    )
}

export default Title;