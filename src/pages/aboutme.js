import styled from "styled-components";

import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import LinkIcon from "../components/LinkIcon";
import cv from "../assets/cv.pdf"
import bluesky from "../assets/bluesky_logo.png"
import email from "../assets/email_logo.png"
import github from "../assets/github_logo.png"
import linkedin from "../assets/linkedin_logo.png"

const Link = styled.a`
    color: rgb(147, 225, 237);
    text-decoration: none;
    font-weight: bold;
`;

const LinkIconsContainer = styled.div`
    display: flex;
    gap: 10px;
`

function AboutMe(){
    return(
      <>
        <Title text="About Me" fontSize={70}/>
        <Paragraph fontSize={30} maxWidth={50}>
          If you just want to see my CV, <Link href={cv} target="_blank">here it is.</Link> 
        </Paragraph>
        <Paragraph fontSize={30} maxWidth={50}>
          Sticking around? Great! Here's a little bit about myself.
        </Paragraph>
        <Paragraph fontSize={30} maxWidth={80}>
          I'm a 19 year old computer science student, currently in year 2. I chose to pursue coding
          because I love problem solving as a whole, and that's also reflected by my passion for
          cars. My other hobbies include making and playing music (check out the Music tab!),
          snowboarding, psychology, and a little bit of gaming every now and again.
        </Paragraph>
        <Paragraph fontSize={30} maxWidth={80}>
          The most important thing to me is finding meaning in my work, whether that be the knowledge
          that what I make helps people, or that what I do is just plain cool. I prefer working in a
          team, since I like organizing tasks and keeping track of progress, but I'm fine working by
          myself if the situation begs for it.
        </Paragraph>
        <LinkIconsContainer>
          <LinkIcon imageSource={bluesky} link="https://bsky.app/profile/sapokee.bsky.social"/>
          <LinkIcon imageSource={email} link="mailto:lazarcata123@gmail.com"/>
          <LinkIcon imageSource={github} link="https://github.com/Sapokee"/>
          <LinkIcon imageSource={linkedin} link="https://www.linkedin.com/in/sapokee/"/>
        </LinkIconsContainer>
      </>
    )
}

export default AboutMe;