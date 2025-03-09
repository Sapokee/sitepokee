import EmbeddedVideo from "../components/EmbeddedVideo";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

function Music(){
    return(
        <>
            <Title text="Music" fontSize={80}/>
            <Paragraph fontSize={30} maxWidth={80}>
                I've been doing music from the age of 10, that being singing on stage.
                I loved it during that time, but around the time I turned 18 it started
                being too repetitive, so I pivoted to online production.
            </Paragraph>
            <Paragraph fontSize={30} maxWidth={80}>
                I also picked up guitar around the age of 17, and have fallen in love with
                it since. So far, I've released two covers of songs I like, with many more
                on the way.
            </Paragraph>
            <Paragraph fontSize={30} maxWidth={80}>
                Here's a preview of the work I've done so far!
            </Paragraph>
            <EmbeddedVideo/>
        </>
    )
}

export default Music;