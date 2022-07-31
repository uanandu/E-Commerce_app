import styled from "styled-components";
import { aboutUs } from "../data/aboutUsData";
import { Icon } from "react-icons-kit";
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare';
import {githubSquare} from 'react-icons-kit/fa/githubSquare';

const AboutUs = () => {

return(
<MainDiv>
    <ContactUs>Contact Us!</ContactUs>
    <Wrapper>
        {aboutUs.map((person) => {
            return (
                <>
                <Container>
                <Img src = {person.Info[1].imgSrc}/>
                <Overlay>
                    <Text>
                        <Name>{person.Info[0].fullName}</Name>
                        <A href = {person.Info[2].linkedIn} target="_blank"><Icon size={32} icon={linkedinSquare}/></A>
                    <A href = {person.Info[3].gitHub} target="_blank"><Icon size={32} icon={githubSquare}/></A>
                    </Text>
                </Overlay>
                </Container>
                </>
            )
            
        })}
    </Wrapper>
    </MainDiv>
)
}
const Name = styled.p`
color: black;

`
const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
`
const ContactUs = styled.h1`
margin-bottom: 30px;
`
const A = styled.a`
text-decoration: none;
color: black;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: white;
 border-radius: 5%;


  &:hover{
      opacity: 0.7;
  }

`
const Text = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
position: relative;
`
const Img = styled.img`
max-width: 200px;
height: 300px;
object-fit: cover;
border-radius: 5%;
`
const Wrapper = styled.div`
display: flex;
gap: 30px;
`

export default AboutUs;