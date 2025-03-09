import styled from "styled-components";
import Divider from "./Divider";
import NavButton from "./NavButton";

const NavBackground = styled.div`
    background-color: rgb(10,10,10);
    width: 100%;
    height: 5vh;
    position: fixed;
    display: flex;
    flex-direction: row;
    padding-left: 30px;
    align-items: center;
`

const NavBar = ({setActivePage}) => (
        <NavBackground>
            <NavButton text="HOME" setActivePage={setActivePage}/>
            <Divider/>
            <NavButton text="ABOUT ME" setActivePage={setActivePage}/>
            <Divider/>
            <NavButton text="CODING" setActivePage={setActivePage}/>
            <Divider/>
            <NavButton text="MUSIC" setActivePage={setActivePage}/>
        </NavBackground>
    )

export default NavBar;