import styled from "styled-components";
 
const Button = styled.p`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    cursor: pointer;
    font-size: 30px;
    color: white;
    text-decoration: none;
    &:hover{
        animation: flash 0.8s infinite;
        text-decoration: underline;
    }

    @keyframes flash {
        0% {
            color: rgb(95, 99, 214);
        }
        49% {
            color: rgb(95, 99, 214);
        }
        50% {
            color: white;
        }
        100% {
            color: white;
        }
    }
`

const NavButton = ({text, setActivePage}) => {
    return(
        <Button draggable={false} onClick={() => setActivePage(text)} viewTransition>
            {text}
        </Button>
    )
}

export default NavButton;