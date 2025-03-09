import styled from "styled-components";

const strokeSize = 3;

const Text = styled.p`
    margin-top: 10px;
    color: white;
    font-size: ${(props) => props.fontSize}px;
    max-width: ${(props) => props.maxWidth}ch;
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

const Paragraph = ({children, fontSize, maxWidth}) => {
    return(
        <Text fontSize={fontSize} maxWidth={maxWidth}>
            {children}
        </Text>
    )
}

export default Paragraph;