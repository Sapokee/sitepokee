import ProfilePicture from '../components/ProfilePicture';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

function Home() {
    return (
      <>
        <ProfilePicture/>
        <Title text="Nice seeing you here!" fontSize={80}/>
        <Paragraph fontSize={40} maxWidth={70}>
          I'm Catalin, and online I go by Sapokee. Here, you can
          find basically all of the things I do, mainly music and
          programming. Feel free to browse around. 
        </Paragraph>
      </>
    );
  }
  
  export default Home;